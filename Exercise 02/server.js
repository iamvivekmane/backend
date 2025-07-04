import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";
import { dirname } from "path";

let conn = await mongoose.connect("mongodb://localhost:27017/company");
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.post("/clicked", (req, res) => {
  let random = Math.random();
  console.log(random);
  if (random > 0.1 && random <= 0.2) {
    const employee = new Employee({
      eName: "Mr programmer",
      salary: 10000,
      language: "Python",
      city: "New York",
      isManager: false,
    });
    employee.save();
  } else if (random > 0.2 && random < 0.3) {
    const employee = new Employee({
      eName: "Ms Intern",
      salary: 5000,
      language: "JavaScript",
      city: "Miami",
      isManager: false,
    });
    employee.save();
  } else if (random > 0.3 && random < 0.4) {
    const employee = new Employee({
      eName: "Mr Analyst",
      salary: 9500,
      language: "R",
      city: "Chicago",
      isManager: false,
    });
    employee.save();
  } else if (random > 0.4 && random < 0.5) {
    const employee = new Employee({
      eName: "Ms Engineer",
      salary: 15000,
      language: "Java",
      city: "Seattle",
      isManager: true,
    });
    employee.save();
  } else if (random > 0.5 && random < 0.6) {
    const employee = new Employee({
      eName: "Mr Architect",
      salary: 18000,
      language: "C#",
      city: "Austin",
      isManager: true,
    });
    employee.save();
  } else if (random > 0.6 && random < 0.7) {
    const employee = new Employee({
      eName: "Ms Designer",
      salary: 11000,
      language: "HTML/CSS",
      city: "Los Angeles",
      isManager: false,
    });
    employee.save();
  } else if (random > 0.7 && random < 0.8) {
    const employee = new Employee({
      eName: "Mr Tester",
      salary: 9000,
      language: "Selenium",
      city: "Denver",
      isManager: false,
    });
    employee.save();
  } else if (random > 0.8 && random < 0.9) {
    const employee = new Employee({
      eName: "Mr DataScientist",
      salary: 16000,
      language: "Python",
      city: "Atlanta",
      isManager: true,
    });
    employee.save();
  } else {
    const employee = new Employee({
      eName: "Ms Intern",
      salary: 5000,
      language: "Go",
      city: "Miami",
      isManager: false,
    });
    employee.save();
  }
  res.send("Hello World its me!");
  // let random = Math.random();
  // console.log("the random number is ", random);
  // if (random > 0.1 && random <= 0.2) {
  //   const employee = new Employee({
  // Ename: "Mr programmer",
  // Salary: 10000,
  // language: "Python",
  // city: "New York",
  // isManager: false,
  //   });
  //   employee.save();
  // } else if (random > 0.2 && random <= 0.3) {
  //   const employee = new Employee({
  //     Ename: "Ms Developer",
  //     Salary: 12000,
  //     language: "JavaScript",
  //     city: "San Francisco",
  //     isManager: true,
  //   });
  //   employee.save();
  // } else if (random > 0.3 && random <= 0.4) {
  //   const employee = new Employee({
  //     Ename: "Mr Analyst",
  //     Salary: 9500,
  //     language: "R",
  //     city: "Chicago",
  //     isManager: false,
  //   });
  //   employee.save();
  // } else if (random > 0.4 && random <= 0.5) {
  //   const employee = new Employee({
  //     Ename: "Ms Engineer",
  //     Salary: 15000,
  //     language: "Java",
  //     city: "Seattle",
  //     isManager: true,
  //   });
  //   employee.save();
  // } else if (random > 0.5 && random <= 0.6) {
  //   const employee = new Employee({
  //     Ename: "Mr Architect",
  //     Salary: 18000,
  //     language: "C#",
  //     city: "Austin",
  //     isManager: true,
  //   });
  //   employee.save();
  // } else if (random > 0.6 && random <= 0.7) {
  //   const employee = new Employee({
  //     Ename: "Ms Designer",
  //     Salary: 11000,
  //     language: "HTML/CSS",
  //     city: "Los Angeles",
  //     isManager: false,
  //   });
  //   employee.save();
  // } else if (random > 0.7 && random <= 0.8) {
  //   const employee = new Employee({
  //     Ename: "Mr Tester",
  //     Salary: 9000,
  //     language: "Selenium",
  //     city: "Denver",
  //     isManager: false,
  //   });
  //   employee.save();
  // } else {
  //   const employee = new Employee({
  //     Ename: "Ms DevOps",
  //     Salary: 14000,
  //     language: "Bash",
  //     city: "Boston",
  //     isManager: true,
  //   });
  // }
});
