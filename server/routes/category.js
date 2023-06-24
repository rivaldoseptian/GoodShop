const router = require("express").Router();
const authentication = require("../middleware/authentication");
const category = require("../controllers/categoryController");

router.get("/", authentication, category.ShowCategory);
router.post("/", category.createCategory);

module.exports = router;
