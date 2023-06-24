const router = require("express").Router();
const UserController = require("../controllers/userController");

router.post("/register", UserController.registerAdmin);

module.exports = router;
