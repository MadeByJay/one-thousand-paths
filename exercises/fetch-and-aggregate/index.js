import { get } from "https";

export async function countActiveUsersFetch() {
  const response = await fetch("example.com/api/users");
  if (!response.ok) {
    return;
  }
  const data = await response.json();

  const activeCount = data.filter((user) => {
    return user.isActive;
  }).length;

  return activeCount;
}

export async function countActiveUsers() {
  const data = await new Promise((resolve, reject) => {
    let rawContent = "";
    get("example.com/api/users", (response) => {
      response.on("data", (chunk) => {
        rawContent += chunk;
      });
      response.on("end", () => {
        resolve(rawContent);
      });
      response.on("error", (error) => {
        reject(error);
      });
    }).on("error", (error) => {
      reject(error);
    });
  });

  const parsed = JSON.parse(data);
  const activeCount = parsed.data.filter((user) => user.isActive).length;
  return activeCount;
}
