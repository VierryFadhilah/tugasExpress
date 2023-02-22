const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "product",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "product_category",
          key: "id",
        },
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "product",
      schema: "public",
      timestamps: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
      indexes: [
        {
          name: "pk_id_product",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
