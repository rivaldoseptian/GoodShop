const { User } = require("../models");

class UserController {
  static async registerAdmin(req, res, next) {
    try {
      const { username, email, password, address } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        address,
        role: "Admin",
      });
      res.status(201).json({ message: "Succes Register" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = UserController;
