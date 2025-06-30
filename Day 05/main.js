const express = require("express");
const app = express();
const port = 3000;

const blog = require("./routes/blog");
const shop = require("./routes/shop");

app.use("/blog", blog);
app.use("/shop", shop);

app.use(express.static("public"));

// This is chaining of requests
app
  .get("/", (req, res) => {
    console.log("It is an get request");
    res.send("Hello World Get 22!");
  })
  .post("/", (req, res) => {
    console.log("It is an post request");
    res.send("Hello World Post!");
  })
  .put("/", (req, res) => {
    console.log("It is an put request");
    res.send("Hello World Put!");
  });

app.get("/index", (req, res) => {
  console.log("It is an index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  console.log("It is an index");
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["Person", "People"] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
