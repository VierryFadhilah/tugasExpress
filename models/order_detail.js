const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "order_detail",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "order_detail",
      schema: "public",
      timestamps: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
      indexes: [
        {
          name: "pk_order_detail",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
