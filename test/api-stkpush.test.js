import { describe, it, expect, beforeEach, afterEach } from "vitest";
import path from "path";
import { pathToFileURL } from "url";

const filePath = path.join(process.cwd(), "api", "stkpush.js");
const handlerModule = await import(pathToFileURL(filePath).href);
const handler = handlerModule.default;

function makeRes() {
  const obj = {};
  obj._status = 200;
  obj._json = null;
  obj.status = function (s) {
    this._status = s;
    return this;
  };
  obj.json = function (j) {
    this._json = j;
    return Promise.resolve(j);
  };
  return obj;
}

describe("api/stkpush handler", () => {
  let origEnv;
  let origFetch;

  beforeEach(() => {
    origEnv = { ...process.env };
    origFetch = global.fetch;
  });

  afterEach(() => {
    process.env = { ...origEnv };
    global.fetch = origFetch;
  });

  it("returns 500 when CONSUMER_KEY/SECRET missing", async () => {
    delete process.env.CONSUMER_KEY;
    delete process.env.CONSUMER_SECRET;
    const req = {
      method: "POST",
      body: { phoneNumber: "0712345678", amount: 100 },
    };
    const res = makeRes();
    await handler(req, res);
    expect(res._status).toBe(500);
    expect(res._json).toBeTruthy();
    expect(res._json.message).toMatch(/Missing CONSUMER_KEY\/CONSUMER_SECRET/);
  });

  it("initiates STK push when env and fetch succeed", async () => {
    process.env.CONSUMER_KEY = "key";
    process.env.CONSUMER_SECRET = "secret";
    process.env.BUSINESS_SHORTCODE = "123456";
    process.env.MPESA_PASSKEY = "passkey";
    process.env.STK_CALLBACK_URL = "https://example.com/api/mpesa-callback";
    process.env.DARAJA_MODE = "sandbox";

    // mock fetch: oauth then stk
    global.fetch = async (url, opts) => {
      if (String(url).includes("/oauth")) {
        return { ok: true, json: async () => ({ access_token: "tok" }) };
      }
      if (String(url).includes("/mpesa/stkpush")) {
        return {
          ok: true,
          json: async () => ({
            MerchantRequestID: "mreq",
            CheckoutRequestID: "creq",
            ResponseCode: "0",
            ResponseDescription: "Success",
          }),
        };
      }
      return { ok: false, text: async () => "not found" };
    };

    const req = {
      method: "POST",
      body: { phoneNumber: "0712345678", amount: 350 },
    };
    const res = makeRes();
    await handler(req, res);
    expect(res._status).toBe(200);
    expect(res._json).toBeTruthy();
    expect(res._json.success).toBe(true);
    expect(res._json.data).toBeTruthy();
    expect(
      res._json.data.ResponseCode || res._json.data.responseCode || "0"
    ).toBeDefined();
  });
});
