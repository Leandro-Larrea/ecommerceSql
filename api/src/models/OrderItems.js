const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('OrderItem', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  });
};