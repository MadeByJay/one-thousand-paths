[
  { keyId: "IAfpK", age: 58 },
  { keyId: "WNVdi", age: 64 },
  { keyId: "jp9zt", age: 47 },
];

function parseRecords(rawString) {
  if (!rawString || rawString.trim() === "") {
    return [];
  }

  // Split on commas, trim whitespace, and drop empty pieces
  const tokens = rawString
    .split(",")
    .map((piece) => piece.trim())
    .filter((piece) => piece !== "");

  const records = [];

  // We expect pairs: ["key=...", "age=...", "key=...", "age=...", ...]
  for (let index = 0; index < tokens.length; index += 2) {
    const keyToken = tokens[index];
    const ageToken = tokens[index + 1];

    if (!keyToken || !ageToken) {
      // Incomplete pair; skip gracefully
      continue;
    }

    const keyParts = keyToken.split("=");
    const ageParts = ageToken.split("=");

    if (keyParts.length < 2 || ageParts.length < 2) {
      // Malformed; skip
      continue;
    }

    const keyId = keyParts[1].trim();
    const ageNumber = Number(ageParts[1].trim());

    if (!keyId || Number.isNaN(ageNumber)) {
      // Invalid values; skip
      continue;
    }

    records.push({
      keyId: keyId,
      age: ageNumber,
    });
  }

  return records;
}
