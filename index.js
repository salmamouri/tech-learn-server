const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const categories = require("./data/categories.json");
const courses = require("./data/courses.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Tech Learn API Running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  const categoryCourse = courses.filter((c) => c.category_id === id);
  res.send(categoryCourse);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const selectCourse = courses.find((c) => c._id === id);
  res.send(selectCourse);
});
app.listen(port, () => {
  console.log("Tech Learn API is Running on port", port);
});
