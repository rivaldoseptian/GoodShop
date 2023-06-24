const router = require("express").Router();
const product = require("./product");
const category = require("./category");
const user = require("./user");

router.use("/category", category);
router.use("/product", product);
router.use("/user", user);

module.exports = router;
