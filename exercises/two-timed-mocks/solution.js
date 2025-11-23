// Problem recap (slightly generalized):
// Hit an HTTP endpoint that returns a string in the same format as 1.3:
// "key=IAfpK, age=58, key=WNVdi, age=64, ..."
// Parse into { keyId, age } objects.
// Count how many have age >= 50.
// Log only the integer count.
// We will reuse parseRecords from 1.3 and add a small HTTP helper.

import https from "https";

// Helper: perform a GET and resolve with the raw body as a string
function fetchStringFromUrl(url) {
  return new Promise((resolve, reject) => {
    let rawBody = "";

    https
      .get(url, (response) => {
        response.on("data", (chunk) => {
          rawBody += chunk;
        });

        response.on("end", () => {
          resolve(rawBody);
        });

        response.on("error", (error) => {
          reject(error);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

// Reuse parseRecords from section 1.3
function parseRecords(rawString) {
  if (!rawString || rawString.trim() === "") {
    return [];
  }

  const tokens = rawString
    .split(",")
    .map((piece) => piece.trim())
    .filter((piece) => piece !== "");

  const records = [];

  for (let index = 0; index < tokens.length; index += 2) {
    const keyToken = tokens[index];
    const ageToken = tokens[index + 1];

    if (!keyToken || !ageToken) {
      continue;
    }

    const keyParts = keyToken.split("=");
    const ageParts = ageToken.split("=");

    if (keyParts.length < 2 || ageParts.length < 2) {
      continue;
    }

    const keyId = keyParts[1].trim();
    const ageNumber = Number(ageParts[1].trim());

    if (!keyId || Number.isNaN(ageNumber)) {
      continue;
    }

    records.push({
      keyId: keyId,
      age: ageNumber,
    });
  }

  return records;
}

// Main mock function
async function countAgesAtLeast50FromEndpoint(url) {
  try {
    const rawString = await fetchStringFromUrl(url);
    const records = parseRecords(rawString);

    const count = records.filter((record) => record.age >= 50).length;

    // In a Coderbyte-style environment, they often expect EXACT output:
    console.log(count);
  } catch (error) {
    // In many challenge setups, you might just log 0 or nothing;
    // here we choose to log 0 on error to be deterministic.
    console.log(0);
  }
}

// What’s happening and why
// fetchStringFromUrl encapsulates the raw HTTP dance (this is the “hard” part of many Coderbyte Node tasks).
// We reuse the parsing logic instead of duplicating it: good signal of senior thinking.
// Then the aggregation is trivial: filter on age >= 50, get .length, log.
// In a real Coderbyte problem, they might:
// Provide the URL themselves.
// Provide a fixed function signature like async function NodeChallenge() with the URL hardcoded.
// You can adapt by inlining the URL and removing the url parameter.
