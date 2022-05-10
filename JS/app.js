const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../index.html"));
});

app.listen(3001, () => {
  console.log("En attente des requêtes au port 3001");
});
