use("myDatabase");

// Insert a few documents into the courses collection.
db.getCollection("courses").insertMany([
  {
    name: "Java",
    Price: 20000,
    Instructor: "Harry",
  },
  {
    name: "Python",
    Price: 18000,
    Instructor: "Alice",
  },
  {
    name: "JavaScript",
    Price: 15000,
    Instructor: "Bob",
  },
  {
    name: "C++",
    Price: 17000,
    Instructor: "Charlie",
  },
  {
    name: "React",
    Price: 22000,
    Instructor: "Diana",
  },
  {
    name: "Node.js",
    Price: 21000,
    Instructor: "Ethan",
  },
  {
    name: "Data Science",
    Price: 25000,
    Instructor: "Fiona",
  },
  {
    name: "Machine Learning",
    Price: 27000,
    Instructor: "George",
  },
  {
    name: "Flutter",
    Price: 19000,
    Instructor: "Hannah",
  },
  {
    name: "Kotlin",
    Price: 16000,
    Instructor: "Ivan",
  },
]);

console.log("Inserted data");
