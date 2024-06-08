const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/rootPath");
const productController = require("../controllers/products");

//admin/add-product => GET
router.get("/add-product", productController.getAddProduct);

//admin/add-product => POST
router.post("/add-product", productController.postAddProduct);

module.exports = router;
