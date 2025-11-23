// You have:
// const basicUsers = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ];
// const userSettings = [
//   { userId: 1, theme: "dark" },
//   { userId: 2, theme: "light" }
// ];
// Write:
// function mergeUserData(basicUsers, userSettings)
// that returns:
// [
//   { id: 1, name: "Alice", theme: "dark" },
//   { id: 2, name: "Bob", theme: "light" }
// ]
// Assume every basicUsers.id has a matching userSettings.userId.

function mergeUserData(basicUsers, userSettings) {
  if (!Array.isArray(basicUsers) || !Array.isArray(userSettings)) {
    return [];
  }

  const settingsByUserId = {};

  for (const setting of userSettings) {
    settingsByUserId[setting.userId] = setting;
  }

  const merged = [];

  for (const user of basicUsers) {
    const settings = settingsByUserId[user.id] || {};
    merged.push({
      id: user.id,
      name: user.name,
      theme: settings.theme || null,
    });
  }

  return merged;
}

Explanation;

// What we’re practicing:
// - Doing an O(n) join instead of nested loops.
// - Building an index map for quick lookups.
// Steps:
// 1. Index userSettings by userId into settingsByUserId.
// 2. Loop basicUsers:
// - Look up settingsByUserId[user.id].
// - Build a new object combining data from both.
// 3. Return the merged array.
// This is exactly the pattern of joining tables by a key.
