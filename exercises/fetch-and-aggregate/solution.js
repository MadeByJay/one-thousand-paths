// You have an endpoint returning JSON like:
// {
//   "data": [
//     {"userId": "u1", "isActive": true},
//     {"userId": "u2", "isActive": false},
//     ...
//   ]
// }
// Write a function countActiveUsers() that:
// 1. Fetches the JSON.
// 2. Counts how many objects have isActive === true.
// 3. Logs only the count (no extra text).

import https from "https";

export async function countActiveUsers() {
  const data = await new Promise((resolve, reject) => {
    let rawContent = "";

    https
      .get("https://example.com/api/users", (response) => {
        response.on("data", (chunk) => {
          rawContent += chunk;
        });

        response.on("end", () => {
          resolve(rawContent);
        });

        response.on("error", (error) => {
          reject(error);
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });

  const parsed = JSON.parse(data);
  const activeCount = parsed.data.filter(
    (user) => user.isActive === true,
  ).length;

  console.log(activeCount);
}
