const express = require("express");
const app = express();

app.get("/hi", (req, res) => {
  res.send("Hello Mangpor");
});

module.exports = app;
