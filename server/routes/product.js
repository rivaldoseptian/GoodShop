const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.GetAllProduct);

module.exports = router;
