// Given:
// const users = [
//   { id: 1, name: "Alice", role: "admin" },
//   { id: 2, name: "Bob", role: "user" },
//   { id: 3, name: "Carol", role: "admin" },
// ];
// Write:
// function groupUsersByRole(users)
// that returns:
//
// {
//   admin: [
//     { id: 1, name: "Alice", role: "admin" },
//     { id: 3, name: "Carol", role: "admin" }
//   ],
//   user: [
//     { id: 2, name: "Bob", role: "user" }
//   ]
// }

function groupUsersByRole(users) {
  if (!Array.isArray(users)) {
    return {};
  }

  const usersByRole = {};

  for (const user of users) {
    const role = user.role || "unknown";

    if (!usersByRole[role]) {
      usersByRole[role] = [];
    }

    usersByRole[role].push(user);
  }

  return usersByRole;
}

// Explanation;
// What we’re practicing:
// - Grouping by a key → “GROUP BY role” but in JavaScript.
// Steps:
// 1. Initialize an empty object usersByRole.
// 2. For each user:
// - Decide what role key to use (fall back to "unknown").
// - If this role does not exist yet in the object, initialize an empty array.
// - Push the user into that array.
// 3. Return the grouped object.
// This is the in-memory version of SELECT role, array_agg(user) FROM ... GROUP BY role.
