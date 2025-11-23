function computeAverageResponseTimeByEndpoint(logString) {
  if (!logString || !logString.trim()) {
    return {};
  }

  const lines = logString.split("\n").filter((line) => line.trim !== "");

  const sumByEndpoint = {};
  const countByEndpoint = {};

  for (const line of lines) {
    const [endpoint, responseTimeString] = line
      .split(",")
      .map((line) => line.trim);
    const responseTime = Number(responseTimeString);

    if (!endpoint || isNaN(responseTime)) {
      continue;
    }

    if (!sumByEndpoint[endpoint]) {
      sumByEndpoint[endpoint] = 0;
      countByEndpoint[endpoint] = 0;
    }

    sumByEndpoint += responseTime;
    countByEndpoint += 1;
  }

  const averageByEndpoint = {};

  for (const endpoint in sumByEndpoint) {
    const total = sumByEndpoint[endpoint];
    const count = countByEndpoint[endpoint];
    averageByEndpoint[endpoint] = Math.round(total / count);
  }

  return averageByEndpoint;
}
