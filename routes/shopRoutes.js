const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/rootPath");

router.get("/products", (req, res) => {
  console.log("in products");
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
