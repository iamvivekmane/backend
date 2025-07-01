const path = require("path");
const fs = require("fs");
console.log("hello");

let oldPaths = [
  "d:\\Code\\Backend\\Backend\\Exercise 01\\another.zip",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\cat.jpg",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\name.jpg",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\name.png",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\random.zip",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\this.pdf",
];

let dir1 = ".zip";

for (let i = 0; i < 7; i++) {
  //   if (path.extname(oldPaths[i]) == dir1) {
  if (!fs.existsSync(dir1)) {
    fs.mkdirSync(dir1);
  }
  let newPath =
    oldPaths[i].replace(path.basename(oldPaths[i]), "") +
    dir1.replace(".", "") +
    "\\" +
    path.basename(oldPaths[i]);

  fs.rename(oldPaths[i], newPath, function (err) {
    //   if (err) throw err;
    console.log("Successfully renamed - AKA moved!");
  });
  //   }
}

// console.log("old path", oldPaths[0]);

// console.log(
//   "new path",
//   oldPaths[0].replace(path.basename(oldPaths[0]), "") +
//     dir1.replace(".", "") +
//     "\\" +
//     path.basename(oldPaths[0])
// );

// \\ let newPath = "d:\\Code\\Backend\\Backend\\Exercise 01\\pdf\\sample.pdf";

// \\ fs.rename(oldPath, newPath, function (err) {
// \\   if (err) throw err;
// \\   console.log("Successfully renamed - AKA moved!");
// \\ });

// \\ It returns the extension name of the file
// \\ console.log(path.extname(myPath));

// \\ let filename = "sample.txt";

// \\ console.log(path.dirname(myPath));

// \\ let oldPath = path.dirname(myPath);
// \\ console.log(oldPath);

// \\ let newPath = path.dirname(myPath) + "/txt";

// \\ let newPath = "d:\\Code\\Backend\\Backend\\Exercise 01\\txt";
// \\ console.log(newPath);

// \\ if (!fs.existsSync(dir1)) {
// \\   fs.mkdirSync(dir1);
// \\ }

// \\ if (path.extname(myPath) == ".txt") {
// \\   fs.rename(path.dirname(filename), newPath, function (err) {
// \\     if (err) throw err;
// \\     console.log("Success");
// \\   });
// \\ }
