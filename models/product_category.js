const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "product_category",
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
    },
    {
      sequelize,
      tableName: "product_category",
      schema: "public",
      timestamps: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
      indexes: [
        {
          name: "pk_id_product_category",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
