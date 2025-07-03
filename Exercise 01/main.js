// Just paste the base path and run the code it will create new folders and move all the files to their specific folder
const fs = require("fs");
const path = require("path");

let basepath = "D:\\Code\\Backend\\Backend\\Exercise 01";

let files = fs.readdirSync(basepath);

for (let i = 0; i < files.length; i++) {
  if (files[i].endsWith(".js")) {
    continue;
  }
  if (files[i].includes(".js") && files[i].includes(".json")) {
    continue;
  } else {
    let extension = path.extname(files[i]);

    let dir = extension.replace(".", "");

    let oldpath = basepath + "\\" + files[i];
    console.log("old");
    console.log(oldpath);

    let newPath = basepath + "\\" + dir + "\\" + files[i];
    console.log("final");
    console.log(newPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    if (path.extname(files[i]) == extension) {
      fs.rename(oldpath, newPath, function (err) {
        if (err) throw err;
        console.log("Successfully renamed - AKA moved!");
      });
    }
  }
}
