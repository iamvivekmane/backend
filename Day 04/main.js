const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.get or app.post or app.put or app.delete(path,handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About us");
});

app.get("/contact", (req, res) => {
  res.send("Contact me");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog!");
});

app.get("/blog/:slug", (req, res) => {
  //Logic to fetch ${slug} from the db

  //For URL http://localhost:3000/blog/intro-to-python?mode=dark&region=in
  console.log(req.params); // Output: {slug: `intro-to-padosi`}
  console.log(req.query); // Output: {mode:`dark`,region: `in`}
  res.send(`Hello ${req.params.slug}`);
});

// app.get("/blog/intro-to-js", (req, res) => {
//   //Logic to fetch intro to js from the db
//   res.send("Hello JavaScript!");
// });

// app.get("/blog/intro-to-python", (req, res) => {
//   //Logic to fetch intro to python from the db
//   res.send("Hello Python!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
