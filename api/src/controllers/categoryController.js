const { Category } = require("../db.js");

module.exports = class categoryController {
  static async get() {
    try {
      let categories = await Category.findAll({});
      return categories;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  static async update(id) {}

  static async delete(id) {}
};
