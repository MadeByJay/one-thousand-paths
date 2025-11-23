// const logs = [
//   "GET /api/users 200",
//   "POST /api/users 201",
//   "GET /api/users 500",
//   "GET /api/orders 200",
//   "GET /api/users 200"
// ];
//
// // Expected:
// {
//   "/api/users": { requestCount: 4, errorCount: 1 },
//   "/api/orders": { requestCount: 1, errorCount: 0 }
// }
function summarizeLogs(logLines) {
  if (!Array.isArray(logLines) || logLines.length === 0) {
    return {};
  }

  const summaryByEndpoint = {};

  for (const line of logLines) {
    if (typeof line !== "string" || line.trim() === "") {
      continue; // skip bad lines
    }

    const parts = line.trim().split(/\s+/);
    // Expected: [method, endpoint, statusCodeString]
    if (parts.length < 3) {
      continue; // malformed line
    }

    const httpMethod = parts[0];
    const endpoint = parts[1];
    const statusCode = Number(parts[2]);

    if (!endpoint || Number.isNaN(statusCode)) {
      continue;
    }

    if (!summaryByEndpoint[endpoint]) {
      summaryByEndpoint[endpoint] = {
        requestCount: 0,
        errorCount: 0,
      };
    }

    summaryByEndpoint[endpoint].requestCount += 1;

    if (statusCode >= 500) {
      summaryByEndpoint[endpoint].errorCount += 1;
    }
  }

  return summaryByEndpoint;
}
