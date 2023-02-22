import models from "../models/IndexModel";

const createCategory = async (req, res) => {
  try {
    const result = await models.product_category.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const findAllCategory = async (req, res) => {
  try {
    const result = await models.product_category.findAll();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving product_category");
  }
};

export default {
  createCategory,
  findAllCategory,
};
