const router = require("express").Router();
const ProductController = require("../controllers/productController");

router.get("/", ProductController.GetAllProduct);
router.post("/", ProductController.CreateProduct);
router.get("/:ProductId", ProductController.GetOneProduct);
router.put("/:ProductId", ProductController.UpdateProduct);
router.delete("/:ProductId", ProductController.DeleteProduct);
module.exports = router;
