import { json } from "sequelize";
import models from "../models/IndexModel";

const createOrder = async (req, res) => {
  try {
    let uid = req.body.user_id;
    let orders = JSON.parse(req.body.orders);

    let result = await models.orders.create({
      user_id: uid,
    });

    let total = 0;
    let price = 0;
    for (let i = 0; i < orders.length; i++) {
      const element = orders[i];
      total += element.quantity;
      const elementProduct = await models.product.findByPk(element.product_id);
      price += elementProduct.price * element.quantity;

      // console.log(element.quantity);

      // console.log(elementProduct);

      await models.order_detail.create({
        order_id: result.id,
        product_id: element.product_id,
        quantity: element.quantity,
      });
    }

    let updateOrder = await models.orders.update(
      {
        totalproduct: total,
        totalprice: price,
      },
      {
        where: { id: result.id },
      }
    );

    res.status(200).send(updateOrder);
  } catch (error) {
    res.status(400).send(error);
  }
};
export default {
  createOrder,
};
