const path = require("path");
const rootDir = require("../util/rootPath");

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
  //we can use above method also but this is used for all types of os
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};

exports.getProduct = (req, res) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
};
