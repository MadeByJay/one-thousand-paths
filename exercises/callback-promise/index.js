import { readFile } from "fs";

function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
}
