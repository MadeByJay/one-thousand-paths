// You receive a string representing purchases:
// "[userId=1, amount=20];[userId=2, amount=35];[userId=1, amount=15]"
// Write a function:
// function summarizePurchases(rawString) { ... }
// that returns an object like:
// {
//   "1": 35,
//   "2": 35
// }
// "1" has 20 + 15 = 35.
//
function summarizePurchases(rawString) {
  if (!rawString?.trim) return {};

  const purchaseSegments = rawString.split(";").filter((segment) => {
    return segment.trim() !== "";
  });

  const totalsByUserID = {};

  const testParts = purchaseSegments.map((purchase) => {
    const cleanedSegments = purchase.replace("[", "").replace("]", "").trim();
    const parts = cleanedSegments.split(",").map((part) => part.trim());
    return parts;
  });

  for (parts of testParts) {
    const [rawUserIdPart, rawAmountPart] = parts;
    const [, id] = rawUserIdPart.trim().split("=");
    const [, rawAmount] = rawAmountPart.trim().split("=");
    const amount = Number(rawAmount);

    if (!id || isNaN(amount)) continue;

    if (!totalsByUserID[id]) {
      totalsByUserID[id] = 0;
    }

    totalsByUserID[id] += amount;
  }

  return totalsByUserID;
}

const testString =
  "[userId=1, amount=20];[userId=2, amount=35];[userId=1, amount=15]";
console.log(summarizePurchases(testString));
