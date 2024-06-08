const router = require("express").Router();
const path=require('path');
const rootDir=require('../util/rootPath');

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(__dirname,'..','views','add-product.html'))
  //we can use above method also but this is used for all types of os
  res.sendFile(path.join(rootDir,'views','add-product.html'))
});

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
