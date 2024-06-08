const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const path = require("path");

//for css
app.use(express.static(path.join(__dirname, "public")));

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
  res.status(404).sendFile(path.join(__dirname, "views", "pageNotFound.html"));
});

app.listen(4000);
