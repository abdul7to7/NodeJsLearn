const router = require("express").Router();

//admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  res.send(
    "<body><form action='/admin/add-product' method='POST'><input type='text' name='title'/><input type='text' name='size'/><button type='submit'>Submit</button></form></body>"
  );
});

//admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
