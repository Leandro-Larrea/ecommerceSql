require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;
const modelProduct = require("./models/Products.js");
const modelUser = require("./models/Users.js");
const modelOrder = require("./models/Orders.js");
const modelOrderItem = require("./models/OrderItems.js");
const modelRole = require("./models/Roles.js");
const modelCategory = require("./models/Categories.js");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/ecommerceSql`,
  {
    logging: false,
    native: false,
  }
);

modelProduct(sequelize);
modelCategory(sequelize);
modelRole(sequelize);
modelOrderItem(sequelize);
modelOrder(sequelize);
modelUser(sequelize);

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Product, Category, Role, OrderItem, Order, User } = sequelize.models;

Category.belongsToMany(Product, { through: "ProductCategory" });
Product.belongsToMany(Category, { through: "ProductCategory" });
User.belongsTo(Role, { foreignKey: "roleId" });
Role.hasMany(User, { foreignKey: "userId" });
Product.belongsToMany(Order, { through: OrderItem });
Order.belongsTo(User, { foreignKey: "userId" });
User.hasMany(Order, { foreignKey: "orderId" });
Order.belongsToMany(Product, { through: OrderItem });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
