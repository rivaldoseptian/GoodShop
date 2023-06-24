const router = require("express").Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.registerAdmin);
router.post("/login", UserController.loginAdmin);
module.exports = router;
