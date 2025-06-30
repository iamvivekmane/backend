const fs = require("fs");

console.log("starting");

// fs.writeFileSync("file1.txt", "This is the first file");

fs.writeFile("file2.txt", "This is the second file", () => {
  console.log("done");
  fs.readFile("file2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("file2.txt", " appended text", (e, d) => {
  console.log(d.toString());
});
console.log("ending");
