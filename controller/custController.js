import models from "../models/IndexModel";

const createCustomer = async (req, res) => {
  try {
    const result = await models.customer.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      cust_address: req.body.alamatCustomer,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const findCustomerDetailOrder = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      include: {
        model: models.users,
        as: "user",
      },
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const findAllCustomer = async (req, res) => {
  try {
    const result = await models.customer.findAll();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};
const findAllCustomerOrderDetail = async (req, res) => {
  try {
    const result = await models.order_detail.findAll({});
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const findAllCustomerById = async (req, res) => {
  try {
    const result = await models.customer.findByPk(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const updateCustomer = async (req, res) => {
  try {
    let idCustomer = req.params.id;
    const result = await models.customer.update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        cust_address: req.body.alamatCustomer,
      },
      {
        where: { id_customer: idCustomer },
      }
    );

    res.status(200).send(`data dengan ID ${idCustomer} berhasil di ubah`);
  } catch (error) {
    res.status(400).send(err);
  }
};
const deleteCustomer = async (req, res) => {
  try {
    await models.customer.destroy({
      where: { id_customer: req.params.id },
    });

    res.status(200).send("Data Customer was deleted");
  } catch (error) {
    res.status(400).send(err);
  }
};

export default {
  createCustomer,
  findAllCustomer,
  findAllCustomerById,
  updateCustomer,
  deleteCustomer,
  findCustomerDetailOrder,
  findAllCustomerOrderDetail,
};
