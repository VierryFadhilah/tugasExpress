import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);
var DataTypes = require("sequelize").DataTypes;
var _customer = require("./customer");
var _customeraccount = require("./customeraccount");
var _customerorderdetail = require("./customerorderdetail");
var _order_detail = require("./order_detail");
var _orders = require("./orders");
var _product = require("./product");
var _product_category = require("./product_category");
var _productpercategory = require("./productpercategory");
var _users = require("./users");

function initModels(sequelize) {
  var customer = _customer(sequelize, DataTypes);
  var customeraccount = _customeraccount(sequelize, DataTypes);
  var customerorderdetail = _customerorderdetail(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_category = _product_category(sequelize, DataTypes);
  var productpercategory = _productpercategory(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  product.belongsTo(product_category, {
    as: "category",
    foreignKey: "category_id",
  });
  product_category.hasMany(product, {
    as: "products",
    foreignKey: "category_id",
  });
  customer.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(customer, { as: "customers", foreignKey: "user_id" });
  orders.belongsTo(users, { as: "user", foreignKey: "user_id" });
  users.hasMany(orders, { as: "orders", foreignKey: "user_id" });

  return {
    customer,
    customeraccount,
    customerorderdetail,
    order_detail,
    orders,
    product,
    product_category,
    productpercategory,
    users,
  };
}

const models = initModels(sequelize);
export default models;
export { sequelize };
