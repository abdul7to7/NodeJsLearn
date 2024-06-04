const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/adminRoutes");
const shopRoutes = require("./routes/shopRoutes");
// Handle favicon request
// app.get("/favicon.ico", (req, res) => res.status(204).end());

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(4000);
