import fs from "fs/promises";

let a = await fs.readFile("file1.txt");

let b = await fs.appendFile("file1.txt", "\nWritten text");

console.log(a.toString());
