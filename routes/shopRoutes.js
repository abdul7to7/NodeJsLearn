const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/rootPath");
const productController = require("../controllers/products");

router.get("/products", productController.getProduct);

module.exports = router;
