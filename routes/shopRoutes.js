router = require("express").Router();

router.get("/products", (req, res) => {
  console.log("in products");
  res.send("<h1>all products</h1>");
});

module.exports = router;
