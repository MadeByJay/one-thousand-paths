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
  const settingsByUserId = {};
  for (const setting of userSettings) {
    settingsByUserId[setting.userId] = setting;
  }

  const mergedUserData = [];
  for (const user of basicUsers) {
    const settingsData = settingsByUserId[user.id];

    mergedUserData.push({
      id: user.id,
      name: user.name,
      theme: settingsData.theme,
    });
  }
  return mergedUserData;
}

const basicUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const userSettings = [
  { userId: 1, theme: "dark" },
  { userId: 2, theme: "light" },
];
console.log(mergeUserData(basicUsers, userSettings));
