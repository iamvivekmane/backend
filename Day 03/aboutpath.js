import path from "path";

let myPath = "D:\\Code\\Backend\\Backend\\Day 03\\main.txt";

// It returns the extension name of the file
console.log(path.extname(myPath));

// It returns the directory of the file
console.log(path.dirname(myPath));

// It returns the filename which is name of file and extension
console.log(path.basename(myPath));

//It returns the joined pathname as per the os we are using
console.log(path.join("c:/", "programs\\user.txt"));
