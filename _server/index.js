const express = require("express");
const fs = require("fs");
const path = require("path");
const port = 4000;
var cors = require('cors')
const corsOptions = {
  origin: "http://localhost:3000"
}

const app = express();
app.use(cors(corsOptions))

function fakeDelay(callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(callback());
    }, 1000);
  });
}

app.get("/", (_req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data_tabs.json"), "utf8"),
  );

  return res.json(data);
});

app.get("/projects/:id", (req, res) => {
  const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "data_projects.json"), "utf8"),
  );

  const filteredData = data.filter((item) => item.id === req.params.id);

  return res.json(filteredData[0]);
});

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}`);
});
