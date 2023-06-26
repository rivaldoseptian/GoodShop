const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.GetAllProduct);
router.post("/", ProductController.CreateProduct);
router.get("/:ProductId", ProductController.GetOneProduct);
module.exports = router;
