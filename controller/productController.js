import models from "../models/IndexModel";

const createProduct = async (req, res) => {
  try {
    const result = await models.product.create({
      name: req.body.name,
      description: req.body.description,
      category_id: req.body.category_id,
      price: req.body.price,
      image: req.body.image,
    });

    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(err);
  }
};

const findProductPerCategory = async (req, res) => {
  try {
    const result = await models.product_category.findAll({
      include: [
        {
          association: "products",
        },
      ],
    });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};
const productPerCategory = async (req, res) => {
  try {
    const result = await models.productpercategory.findAll();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving customers");
  }
};

export default {
  createProduct,
  findProductPerCategory,
  productPerCategory,
};
