const handler = require("./routes");

const express = require("express");

const app = express();

// Handle favicon request
// app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use((req, res, next) => {
  console.log("in the middleware");
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello World</h1>");
});

app.listen(4000);
