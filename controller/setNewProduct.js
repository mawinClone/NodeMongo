const Product = require("../models/product");

const setNewProduct = async (req, res) => {
  try {
    let data = new Product({
      name: req.body.name,
      price: req.body.price,
      desciption: req.body.desciption,
    });

    await data.save();
    return res.send("set db")
  } catch (err) {
    console.log(err);
  }
};

module.exports = setNewProduct;
