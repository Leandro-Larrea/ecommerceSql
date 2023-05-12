const { User, Role } = require("../db.js");

class userController {
  //User Register
  static async create(user) {
    try {
      const newUser = await User.create(user);
      let role = await Role.findOne({ where: { name: "user" } });
      if (!role) {
        role = await Role.create();
      }
      await newUser.setRole(role);
    } catch (error) {
      throw new Error(error.message);
    }
  }
  static async getById(id) {
    try {
      if (!id) throw new Error("Id not found.");
      await conn.sync({ force: false });
      const userFound = await User.findOne({
        where: { id: id },
        include: {
          model: Role,
          attributes: ["name"],
        },
      });
      return userFound;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = userController;
