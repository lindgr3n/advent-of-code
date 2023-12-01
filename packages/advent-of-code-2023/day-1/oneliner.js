const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./puzzle-input.txt");

fs.readFile(filePath, "utf8", function (err, data) {
  var sum = data
    .split(/(\n|\r|,)/g)
    .filter((e) => e != "\n" && e != "\r")
    .filter((e) => e != "")
    .map((i) => i.split("").filter((n) => !isNaN(n)))
    .map((e) => e[0] + e[e.length - 1])
    .reduce((sum, i) => sum + parseInt(i), 0);
  console.log("Answer", sum);
});
