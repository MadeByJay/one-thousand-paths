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
