const router = require("express").Router();
const category = require("../controllers/categoryController");

router.get("/", category.ShowCategory);
router.post("/", category.createCategory);

module.exports = router;
