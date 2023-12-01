const fs = require("fs");
const path = require("path");

function readPuzzleInputAsArray({ filename }) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(error);
        return;
      }
      resolve(
        data
          .split(/(\n|\r|,)/g)
          .filter((e) => e != "\n" && e != "\r")
          .filter((e) => e != "")
      );
    });
  });
}

function readPuzzleInput({ filename }) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, filename);
    fs.readFile(filePath, "utf8", function (err, data) {
      if (err) {
        reject(error);
        return;
      }
      resolve(data);
    });
  });
}

module.exports = { readPuzzleInputAsArray, readPuzzleInput };
