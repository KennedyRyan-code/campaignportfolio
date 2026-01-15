import { logInfo, logError } from "./logger.js";

function getBaseUrls(mode) {
  if (mode === "live") {
    return {
      oauth:
        "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      stk: "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    };
  }
  return {
    oauth:
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    stk: "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
  };
}

function timestamp() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const y = d.getUTCFullYear();
  const m = pad(d.getUTCMonth() + 1);
  const day = pad(d.getUTCDate());
  const hh = pad(d.getUTCHours());
  const mm = pad(d.getUTCMinutes());
  const ss = pad(d.getUTCSeconds());
  return `${y}${m}${day}${hh}${mm}${ss}`;
}

function to254(phone) {
  if (!phone) return phone;
  let p = phone.trim();
  if (p.startsWith("+")) p = p.slice(1);
  if (p.startsWith("0")) return "254" + p.slice(1);
  if (p.startsWith("7") && p.length === 9) return "254" + p;
  return p;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    BUSINESS_SHORTCODE,
    MPESA_PASSKEY,
    STK_CALLBACK_URL,
    DARAJA_MODE,
  } = process.env;

  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    logError("Missing CONSUMER_KEY/CONSUMER_SECRET in env");
    res.status(500).json({
      success: false,
      message: "Missing CONSUMER_KEY/CONSUMER_SECRET in env",
    });
    return;
  }

  if (!BUSINESS_SHORTCODE || !MPESA_PASSKEY || !STK_CALLBACK_URL) {
    logError(
      "Missing BUSINESS_SHORTCODE, MPESA_PASSKEY or STK_CALLBACK_URL in env"
    );
    res.status(500).json({
      success: false,
      message:
        "Missing BUSINESS_SHORTCODE, MPESA_PASSKEY or STK_CALLBACK_URL in env",
    });
    return;
  }

  const {
    phoneNumber,
    amount,
    accountReference = "Coffee",
    transactionDesc = "Project Boost",
  } = req.body || {};

  if (!phoneNumber || !amount) {
    res
      .status(400)
      .json({ success: false, message: "phoneNumber and amount are required" });
    return;
  }

  try {
    const base = getBaseUrls(DARAJA_MODE && DARAJA_MODE.trim());

    const basic = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString(
      "base64"
    );
    logInfo("Requesting Daraja access token");

    let fetchImpl = globalThis.fetch;
    if (!fetchImpl) {
      const mod = await import("node-fetch");
      fetchImpl = mod.default;
    }

    const oauthRes = await fetchImpl(base.oauth, {
      method: "GET",
      headers: { Authorization: `Basic ${basic}` },
    });

    if (!oauthRes.ok) {
      const txt = await oauthRes.text();
      logError("Failed to get access token: " + txt);
      res.status(500).json({
        success: false,
        message: "Failed to get access token",
        details: txt,
      });
      return;
    }

    const oauthJson = await oauthRes.json();
    const token = oauthJson.access_token;

    const ts = timestamp();
    const password = Buffer.from(
      `${BUSINESS_SHORTCODE}${MPESA_PASSKEY}${ts}`
    ).toString("base64");
    const phone254 = to254(phoneNumber);

    const payload = {
      BusinessShortCode: BUSINESS_SHORTCODE,
      Password: password,
      Timestamp: ts,
      TransactionType: "CustomerBuyGoodsOnline",
      Amount: amount,
      PartyA: phone254,
      PartyB: BUSINESS_SHORTCODE,
      PhoneNumber: phone254,
      CallBackURL: STK_CALLBACK_URL,
      AccountReference: accountReference,
      TransactionDesc: transactionDesc,
    };

    logInfo("Sending STK Push request for " + phone254 + " amount " + amount);
    const stkRes = await fetchImpl(base.stk, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const stkJson = await stkRes.json();

    if (!stkRes.ok) {
      logError("STK Push failed: " + JSON.stringify(stkJson));
      res
        .status(500)
        .json({ success: false, message: "STK Push failed", details: stkJson });
      return;
    }

    logInfo("STK Push initiated: " + JSON.stringify(stkJson));
    res
      .status(200)
      .json({ success: true, message: "STK Push initiated", data: stkJson });
  } catch (error) {
    logError("STK Push error: " + (error && error.message));
    res
      .status(500)
      .json({ success: false, message: error.message || "Unknown error" });
  }
}
