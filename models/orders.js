const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "orders",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "id",
        },
      },
      totalproduct: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      totalprice: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "orders",
      schema: "public",
      timestamps: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
      indexes: [
        {
          name: "pk_id_orders",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
