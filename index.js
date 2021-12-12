const express = require("express");
const app = express();
const importData = require("./data.json");

let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/players", (req, res) => {
  res.send(importData);
});

app.listen(PORT, () => {
  console.log(`app is listening on port http://localhost:${PORT}`);
});
