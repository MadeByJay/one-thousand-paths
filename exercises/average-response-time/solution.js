// Problem
// You receive a multi-line string of CSV log data:
// "/api/users,100
// /api/users,200
// /api/orders,150"
// Each line is endpoint,responseTimeMs.
// Write:
// function computeAverageResponseTimeByEndpoint(logString)
// that returns:
// {
//   "/api/users": 150,  // (100+200)/2
//   "/api/orders": 150
// }
// Round to the nearest integer if needed using Math.round.

function computeAverageResponseTimeByEndpoint(logString) {
  if (!logString || logString.trim() === "") {
    return {};
  }

  const lines = logString.split("\n").filter((line) => line.trim() !== "");

  const sumByEndpoint = {};
  const countByEndpoint = {};

  for (const line of lines) {
    const [endpoint, responseTimeString] = line
      .split(",")
      .map((part) => part.trim());

    const responseTime = Number(responseTimeString);

    if (!endpoint || Number.isNaN(responseTime)) {
      continue; // skip invalid lines
    }

    if (!sumByEndpoint[endpoint]) {
      sumByEndpoint[endpoint] = 0;
      countByEndpoint[endpoint] = 0;
    }

    sumByEndpoint[endpoint] += responseTime;
    countByEndpoint[endpoint] += 1;
  }

  const averageByEndpoint = {};

  for (const endpoint in sumByEndpoint) {
    const total = sumByEndpoint[endpoint];
    const count = countByEndpoint[endpoint];
    averageByEndpoint[endpoint] = Math.round(total / count);
  }

  return averageByEndpoint;
}

// Explanation
// What we’re practicing:
// - Multi-line string parsing.
// - Separate maps: sum and count, then derive average.
// Steps:
// 1. Split by \n to get each log line.
// 2. For each line:
// - Split on , → endpoint and response time.
// - Maintain sumByEndpoint and countByEndpoint.
// 3. At the end, loop endpoints and compute Math.round(total / count).
// Again, very “backend log analysis” flavored.
