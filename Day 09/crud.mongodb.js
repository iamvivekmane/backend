// **CREATE**

// It uses the database specified
use("CrudDb");

// It creates a new collection in the database
db.createCollection("courses");

// **INSERT**

//It insert one new record in the collection specified
db.courses.insertOne({
  name: "Rick code",
  price: 100,
  assignments: 12,
  projects: 45,
});

//It insert multiple new records in the collection specified
db.courses.insertMany([
  {
    name: "Rick code",
    price: 100,
    assignments: 12,
    projects: 45,
  },
  {
    name: "Morty code",
    price: 120,
    assignments: 10,
    projects: 38,
  },
  {
    name: "Summer dev",
    price: 90,
    assignments: 14,
    projects: 42,
  },
  {
    name: "Beth scripts",
    price: 110,
    assignments: 11,
    projects: 39,
  },
  {
    name: "Jerry coder",
    price: 95,
    assignments: 13,
    projects: 41,
  },
  {
    name: "Unity project",
    price: 150,
    assignments: 9,
    projects: 50,
  },
  {
    name: "Birdperson dev",
    price: 105,
    assignments: 10,
    projects: 36,
  },
  {
    name: "Mr. Meeseeks",
    price: 98,
    assignments: 15,
    projects: 44,
  },
  {
    name: "Squanchy scripts",
    price: 102,
    assignments: 13,
    projects: 46,
  },
  {
    name: "Evil Morty",
    price: 130,
    assignments: 8,
    projects: 48,
  },
]);

// **READ**

// Returns the records in which the price is 100
let a = db.courses.find({ price: 100 });

// Returns the result as an array
console.log(a.toArray());

// Returns the first result
let b = db.courses.findOne({ price: 100 });
console.log(b);

// **UPDATE**

//Updates the first record with the specified updated value
db.courses.updateOne({ price: 100 }, { $set: { price: 200 } });

//Updates the all records with the specified updated value
db.courses.updateMany({ price: 200 }, { $set: { price: 2000 } });

// **DELETE**

//Deletes the first record with the specified value
db.courses.deleteOne({ price: 120 });

//Deletes the all records with the specified value
db.courses.deleteMany({ price: 2000 });
