import fs from "fs";
import path from "path";

function appendLog(line) {
  try {
    const filePath = path.join(process.cwd(), "server.log");
    fs.appendFileSync(filePath, line + "\n");
  } catch (err) {
    console.error("Logger write failed:", err);
  }
}

export function logInfo(msg) {
  const line = `${new Date().toISOString()} INFO ${msg}`;
  // eslint-disable-next-line no-console
  console.log(line);
  appendLog(line);
}

export function logError(msg) {
  const line = `${new Date().toISOString()} ERROR ${msg}`;
  // eslint-disable-next-line no-console
  console.error(line);
  appendLog(line);
}

export default { logInfo, logError };
