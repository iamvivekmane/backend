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

let folderNames = [
  "d:\\Code\\Backend\\Backend\\Exercise 01\\zip",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\jpg",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\png",
  "d:\\Code\\Backend\\Backend\\Exercise 01\\pdf",
];

for (let i = 0; i < oldPaths.length; i++) {
  if (path.extname(oldPaths[i]) == ".zip") {
    try {
      if (!fs.existsSync(folderNames[0])) {
        fs.mkdirSync(folderNames[0]);
        console.log("Folder created succcessfully");
      }
    } catch (err) {
      console.log(err);
    }

    let newPath = folderNames[0] + "\\" + path.basename(oldPaths[i]);
    console.log(newPath);

    fs.rename(oldPaths[i], newPath, function (err) {
      if (err) {
        throw err;
      }
      console.log("Success!");
    });
  } else if (path.extname(oldPaths[i]) == ".jpg") {
    try {
      if (!fs.existsSync(folderNames[1])) {
        fs.mkdirSync(folderNames[1]);
        console.log("Folder created succcessfully");
      }
    } catch (err) {
      console.log(err);
    }

    let newPath = folderNames[1] + "\\" + path.basename(oldPaths[i]);
    console.log(newPath);

    fs.rename(oldPaths[i], newPath, function (err) {
      if (err) {
        throw err;
      }
      console.log("Success!");
    });
  } else if (path.extname(oldPaths[i]) == ".png") {
    try {
      if (!fs.existsSync(folderNames[2])) {
        fs.mkdirSync(folderNames[2]);
        console.log("Folder created succcessfully");
      }
    } catch (err) {
      console.log(err);
    }

    let newPath = folderNames[2] + "\\" + path.basename(oldPaths[i]);
    console.log(newPath);

    fs.rename(oldPaths[i], newPath, function (err) {
      if (err) {
        throw err;
      }
      console.log("Success!");
    });
  } else if (path.extname(oldPaths[i]) == ".pdf") {
    try {
      if (!fs.existsSync(folderNames[3])) {
        fs.mkdirSync(folderNames[3]);
        console.log("Folder created succcessfully");
      }
    } catch (err) {
      console.log(err);
    }

    let newPath = folderNames[3] + "\\" + path.basename(oldPaths[i]);
    console.log(newPath);

    fs.rename(oldPaths[i], newPath, function (err) {
      if (err) {
        throw err;
      }
      console.log("Success!");
    });
  }
}

// try {
//   if (!fs.existsSync(folderName1)) {
//     fs.mkdirSync(folderName1);
//   }
// } catch (err) {
//   console.log(err);
// }

// console.log(oldPaths[0]);
// console.log(newPath1);

// fs.rename(oldPaths[0], newPath1, function (err) {
//   if (err) {
//     throw err;
//   }
//   console.log("Success!");
// });
