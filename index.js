const handler = require("./routes");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

// Handle favicon request
// app.get("/favicon.ico", (req, res) => res.status(204).end());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/add-product", (req, res, next) => {
  res.send(
    "<body><form action='/products' method='POST'><input type='text' name='title'/><input type='text' name='size'/><button type='submit'>Submit</button></form></body>"
  );
});

app.post("/products", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(4000);
