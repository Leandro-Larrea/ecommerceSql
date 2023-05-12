const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Order', {
    status: {
      type: DataTypes.ENUM('CREATED', 'PENDING', 'COMPLETED', 'CANCELED'),
      allowNull: false,
      defaultValue: 'CREATED'
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    }
  });
};