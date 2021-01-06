"use strict";

const express = require("express");

const PORT = 3001;
const HOST = "0.0.0.0";

const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api", (req, res) => {
  res.status(200).send("SUCCESS>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
