import models from "../models/IndexModel";
import bcrypt from "bcrypt";
import users from "../models/users";
import customer from "../models/customer";
const findAllRows = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      include: [
        {
          association: "user",
        },
      ],
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};

const findUser = async (req, res) => {
  try {
    const result = await models.customer.findAll({
      include: {
        model: models.users,
        as: "user",
      },
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};
const findCustomerAccount = async (req, res) => {
  try {
    const result = await models.customeraccount.findAll();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};

const findCustomerOrderDetail = async (req, res) => {
  try {
    const result = await models.customerorderdetail.findAll();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};

const findAllRowsById = async (req, res) => {
  try {
    const result = await models.users.findByPk(req.params.id);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(req.body.password, salt);
    const result = await models.users.create({
      username: req.body.username,
      password: passHash,
    });

    const create = await models.customer.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      user_id: result.id,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const passHash = await bcrypt.hash(req.body.password, salt);
    const result = await models.users.update(
      {
        nama: req.body.username,
        password: passHash,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteUser = async (req, res) => {
  try {
    await models.users.destroy({
      where: { id: req.params.id },
    });

    res.status(200).send("Data was deleted");
  } catch (error) {
    res.status(400).send(err);
  }
};

export default {
  findAllRows,
  createUser,
  updateUser,
  findAllRowsById,
  deleteUser,
  findUser,
  findCustomerOrderDetail,
  findCustomerAccount,
};
