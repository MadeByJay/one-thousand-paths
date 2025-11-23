// "[userId=1, amount=20];[userId=2, amount=35];[userId=1, amount=15]"
// function summarizePurchases(rawString) { ... }
// {
//   "1": 35,
//   "2": 35
// }

function summarizePurchases(rawString) {
  if (!rawString || rawString.trim() === "") {
    return {};
  }

  const purchaseSegments = rawString
    .split(";")
    .filter((segment) => segment.trim() !== "");

  const totalsByUserId = {};

  for (const segment of purchaseSegments) {
    const cleanedSegment = segment.replace("[", "").replace("]", "").trim();
    // Example cleaned: "userId=1, amount=20"

    const parts = cleanedSegment.split(",").map((part) => part.trim());
    // Example parts: ["userId=1", "amount=20"]

    let userId = null;
    let amount = 0;

    for (const part of parts) {
      const [key, value] = part.split("=").map((piece) => piece.trim());
      if (key === "userId") {
        userId = value;
      } else if (key === "amount") {
        amount = Number(value);
      }
    }

    if (userId === null || Number.isNaN(amount)) {
      continue; // skip bad data
    }

    if (!totalsByUserId[userId]) {
      totalsByUserId[userId] = 0;
    }

    totalsByUserId[userId] += amount;
  }

  return totalsByUserId;
}

// What we’re practicing:
// - Parsing a semi-structured string into data.
// - Using a dictionary (plain object) to aggregate totals per key.
// Step-by-step:
// 1. Guard for empty input – return {} instead of crashing.
// 2. Split the string on ; to get each [userId=..., amount=...] chunk.
// 3. For each chunk:
//     - Remove [ and ].
//     - Split on , to separate userId=1 and amount=20.
//     - Split each part on = to get key and value.
// 4. Track userId and amount.
// 5. Use totalsByUserId[userId] += amount to accumulate.
// 6. Return the summary object.
// This is very similar to “log parsing” or “CSV-ish” challenges you might see.
