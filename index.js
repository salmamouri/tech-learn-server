const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Tech Learn API Running");
});
app.listen(port, () => {
  console.log("Tech Learn API is Running on port", port);
});
