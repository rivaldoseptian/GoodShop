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
  static async CreateProduct(req, res, next) {
    try {
      const { title, image, description, categoryId, stock } = req.body;
      const product = await Product.create({
        title,
        image,
        description,
        categoryId,
        quantity: 0,
        stock,
      });
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  }

  static async GetOneProduct(req, res, next) {
    try {
      const id = req.params.ProductId;
      if (!id) throw { name: "Not Found" };
      let product = await Product.findByPk(id, {
        include: [Category],
      });
      if (!product) throw { name: "Not Found" };
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
