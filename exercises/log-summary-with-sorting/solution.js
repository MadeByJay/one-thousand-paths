// Problem recap:
// Input: single long string of log lines separated by \n.
// Each line: "<method> <endpoint> <statusCode>"
// You must output a comma-separated list of endpoints sorted by:
// Descending errorCount (server errors >= 500)
// Tie-break on endpoint name lexicographically (ascending)
// Example shape of output: "/api/users,/api/orders".

function parseLogLine(line) {
  if (typeof line !== "string" || line.trim() === "") {
    return null;
  }

  const parts = line.trim().split(/\s+/);
  if (parts.length < 3) {
    return null;
  }

  const httpMethod = parts[0];
  const endpoint = parts[1];
  const statusCode = Number(parts[2]);

  if (!endpoint || Number.isNaN(statusCode)) {
    return null;
  }

  return {
    httpMethod,
    endpoint,
    statusCode,
  };
}

function isServerError(statusCode) {
  return statusCode >= 500;
}

function summarizeErrorsForSorting(logString) {
  if (!logString || logString.trim() === "") {
    return "";
  }

  const lines = logString.split("\n");
  const statsByEndpoint = {};

  for (const line of lines) {
    const parsed = parseLogLine(line);
    if (!parsed) {
      continue;
    }

    const endpoint = parsed.endpoint;
    const statusCode = parsed.statusCode;

    if (!statsByEndpoint[endpoint]) {
      statsByEndpoint[endpoint] = {
        requestCount: 0,
        errorCount: 0,
      };
    }

    statsByEndpoint[endpoint].requestCount += 1;

    if (isServerError(statusCode)) {
      statsByEndpoint[endpoint].errorCount += 1;
    }
  }

  // Turn stats into an array we can sort
  const endpointsWithStats = Object.keys(statsByEndpoint).map((endpoint) => {
    return {
      endpoint: endpoint,
      errorCount: statsByEndpoint[endpoint].errorCount,
    };
  });

  endpointsWithStats.sort((first, second) => {
    // Primary: descending errorCount
    if (second.errorCount !== first.errorCount) {
      return second.errorCount - first.errorCount;
    }

    // Secondary: ascending endpoint name
    if (first.endpoint < second.endpoint) return -1;
    if (first.endpoint > second.endpoint) return 1;
    return 0;
  });

  const endpointNamesInOrder = endpointsWithStats.map((item) => item.endpoint);

  // Comma-separated list, no spaces (typical auto-grader style)
  return endpointNamesInOrder.join(",");
}

// What’s happening and why
// We reuse a parseLogLine helper like in 2.3.
// We build a dictionary with errorCount and requestCount.
// We then convert to an array of objects to sort:
// Sort by errorCount descending.
// Tie-break by endpoint ascending.
// Finally, we join endpoints into a single string.
// This demonstrates:
// Aggregation and statistics.
// Custom sort logic.
// Exact output format (comma-separated list).
