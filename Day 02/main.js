// import { a, b, c, d } from "./mymodule1.js";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// When we are exporting a default value at that time we can use whatever name we want to import the value
// import random from "./mymodule1.js";
// console.log(random);

const a = require("./mymodule2.js");
console.log(a, __dirname, __filename);
