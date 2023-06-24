const { Category, Product } = require("../models");

class ProductController {
  static async GetAllProduct(req, res, next) {
    try {
      const product = await Product.findAll({
        include: [Category],
      });
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
