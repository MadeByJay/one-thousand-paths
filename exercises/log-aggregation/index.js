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
function summarizeLogs(logs) {
  if (!Array.isArray(logs) || !logs.length) return {};

  const summaryByEndpoint = {};

  for (const log of logs) {
    if (log.trim === "") {
      continue;
    }
    const parts = log.trim().split(" ");

    const endpoint = parts[1];
    const statusCode = Number(parts[2]);

    if (!endpoint || isNaN(statusCode)) continue;

    if (!summaryByEndpoint[endpoint]) {
      summaryByEndpoint[endpoint] = {
        requestCount: 0,
        errorCount: 0,
      };
    }

    if (statusCode >= 500) summaryByEndpoint[endpoint].errorCount += 1;
    summaryByEndpoint[endpoint].requestCount += 1;
  }

  return summaryByEndpoint;
}
