import fs from "fs";

// Callback style
function readFileCallback(path, callback) {
  fs.readFile(path, "utf8", (error, data) => {
    if (error) {
      callback(error);
      return;
    }
    callback(null, data);
  });
}

// Promise wrapper
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
}

// Async/await usage
async function printFile(path) {
  try {
    const data = await readFilePromise(path);
    console.log(data);
  } catch (error) {
    console.error("Failed to read file:", error);
  }
}
