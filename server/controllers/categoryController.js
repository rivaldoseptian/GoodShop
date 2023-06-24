const { Category } = require("../models");

class CategoryController {
  static async ShowCategory(req, res, next) {
    try {
      const category = await Category.findAll();
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });

      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = CategoryController;
