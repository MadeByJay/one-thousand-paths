// Given a URL query string like:
// "user=alice&tag=node&tag=backend&sort=created"
// Write:
// function parseQueryString(queryString)
// that returns:
// {
//   user: "alice",
//   tag: ["node", "backend"],
//   sort: "created"
// }
// If a key appears once → store a string.
// If a key appears multiple times → store an array of values.

function parseQueryString(queryString) {
  if (!queryString || queryString.trim() === "") {
    return {};
  }

  const queryParameters = queryString.split("&");
  const result = {};

  for (const parameter of queryParameters) {
    if (parameter.trim() === "") continue;

    const [rawKey, rawValue] = parameter.split("=");
    const key = decodeURIComponent(rawKey);
    const value = decodeURIComponent(rawValue || "");

    if (result.hasOwnProperty(key)) {
      // Existing key
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else {
        result[key] = [result[key], value];
      }
    } else {
      // New key
      result[key] = value;
    }
  }

  return result;
}

// Explanation
// What we’re practicing:
// Handling repeated keys, which is very backend.
// Building a structure that is a bit smarter than “just a map of strings”.
// Steps:
// 1. Split a=b&c=d style string on & to get "user=alice", "tag=node", etc.
// 2. For each pair:
// - Split on =.
// - Decode using decodeURIComponent so it works with real URLs.
// 3. If the key already exists:
// - If it is an array, push the new value.
// - If it is not an array, convert it into an array [existing, newValue].
// 4. If the key is new, set as a simple string.
