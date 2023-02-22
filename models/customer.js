const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "customer",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      firstname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      tableName: "customer",
      schema: "public",
      timestamps: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
      indexes: [
        {
          name: "fki_fk_user_id",
          fields: [{ name: "user_id" }],
        },
        {
          name: "pk_id_customer",
          unique: true,
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
