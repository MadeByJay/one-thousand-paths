// Exercise 10 – Simple Rate Limiter Check
// Problem
// You have an array of timestamps (in seconds) when a user made a request, sorted ascending:
// const requestTimes = [1, 10, 20, 35, 50, 65];
// You have a windowSizeInSeconds and a maxRequests value.
// Write: function isRequestAllowed(requestTimes, windowSizeInSeconds, maxRequests, newRequestTime)
// that returns true if the new request at newRequestTime can be allowed, and false if it would exceed the allowed number of requests within the window ending at newRequestTime.
// For example:
// - windowSizeInSeconds = 30
// - maxRequests = 3
// - newRequestTime = 55
// We look at all requests > (55 - 30) → > 25.
// Existing in that window: 35, 50.
// New request would be the 3rd → allowed.
// If newRequestTime = 60, window is (60 - 30) = 30, so 35, 50 again; new is 3rd → allowed.
// If one more right after at 61, window (61 - 30) = 31, still 35, 50 + new 61 = 3 → allowed.
// The next one at 62 would see 35, 50, 61, and now 62 would be 4th → not allowed.

function isRequestAllowed(
  requestTimes,
  windowSizeInSeconds,
  maxRequests,
  newRequestTime,
) {
  if (!Array.isArray(requestTimes)) {
    return true; // No history, allow by default
  }

  if (windowSizeInSeconds <= 0 || maxRequests <= 0) {
    return false;
  }

  const windowStartTime = newRequestTime - windowSizeInSeconds;

  // We only care about timestamps inside the window (windowStartTime, newRequestTime]
  const recentRequests = [];

  for (const timestamp of requestTimes) {
    if (timestamp > windowStartTime && timestamp <= newRequestTime) {
      recentRequests.push(timestamp);
    }
  }

  // If adding the new request would exceed maxRequests, deny
  return recentRequests.length < maxRequests;
}

// Explanation
// What we’re practicing:
// - Thinking in time windows (a real backend concern).
// - Filtering timestamps using a predicate instead of complex math.
// Steps:
// 1. Define window start: newRequestTime - windowSizeInSeconds.
// 2. Collect all existing request times that fall within that window (greater than start, less than or equal to new time).
// 3. If the count of recent requests is already >= maxRequests, then this new one would exceed, so return false.
// 4. Otherwise, return true.
// This logic is a stepping stone to implementing token bucket or sliding window rate limiters.
