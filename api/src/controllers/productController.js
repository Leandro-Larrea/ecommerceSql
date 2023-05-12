const { Product, Category } = require("../db.js");

module.exports = class productController {
  static async create(product) {
    try {
      let newProduct = await Product.create(product);
      console.log("Searching or creating category");
      let categories = [];
      for (const cat of product.categories) {
        let category = await Category.findOrCreate({
          where: { name: cat },
        });
        categories.push(category[0]);
      }
      await newProduct.addCategory(categories);
      let productFound = await Product.findOne({
        where: {
          id: newProduct.id,
        },
        include: {
          model: Category,
          attributes: ["name"],
          through: {
            attributes: [],
          },
        },
      });
      return productFound;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async get(id) {
    try {
      let product;
      if (id) {
        product = await Product.findOne({ where: { id: id } });
      } else {
        product = await Product.findAll({
          include: {
            model: Category,
            attributes: ["name"],
            through: {
              attributes: [],
            },
          },
        });
      }
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update(id) {
    await conn.sync({ force: false });
    try {
      let product;
      if (id) {
      } else {
        product = await Product.findAll({});
      }
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async delete(id) {
    try {
      let product;
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  }
};
