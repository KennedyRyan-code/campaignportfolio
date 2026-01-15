import fs from "fs";
import path from "path";
import { logInfo, logError } from "./logger.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  try {
    const payload = req.body || {};
    logInfo("M-PESA callback received: " + JSON.stringify(payload));

    try {
      const filePath = path.join(process.cwd(), "mpesa-callbacks.log");
      const line = `${new Date().toISOString()} ${JSON.stringify(payload)}\n`;
      fs.appendFileSync(filePath, line);
    } catch (fsErr) {
      logError(
        "Failed to write mpesa-callbacks.log: " + (fsErr && fsErr.message)
      );
    }

    res.status(200).json({ success: true, message: "Callback received" });
  } catch (err) {
    logError("Error in mpesa callback handler: " + (err && err.message));
    res
      .status(500)
      .json({ success: false, message: err.message || "Internal error" });
  }
}
