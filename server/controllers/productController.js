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

  static async UpdateProduct(req, res, next) {
    try {
      const id = req.params.ProductId;
      if (!id) throw { name: "Not Found" };
      const { title, image, description, categoryId, stock } = req.body;
      const product = await Product.findByPk(id);
      if (!product) throw { name: "Not Found" };

      await Product.update(
        { title, image, description, categoryId, stock },
        { where: { id } }
      );
      res.status(200).json({ message: "Succes Update Product" });
    } catch (error) {
      next(error);
    }
  }

  static async DeleteProduct(req, res, next) {
    try {
      const id = req.params.ProductId;
      const product = await Product.findByPk(id);
      if (!product) throw { name: "Not Found" };
      await Product.destroy({
        where: { id },
      });
      res.status(200).json({ message: "Succes Delete Product" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ProductController;
