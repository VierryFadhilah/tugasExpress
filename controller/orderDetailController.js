import models from "../models/IndexModel";

const createOrderDetail = async (req, res) => {
  try {
    const result = await models.order_detail.create({
      order_id: req.body.order_id,
      product_id: req.body.product_id,
      quantity: req.body.quantity,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const findAllOrderCustomer = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      include: [
        {
          association: "user",
          include: [
            {
              association: "orders",
              include: "order_details",
            },
          ],
        },
      ],
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};

export default {
  createOrderDetail,
  findAllOrderCustomer,
};
