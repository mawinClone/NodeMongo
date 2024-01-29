const Product = require("../models/product");

const getAllProduct = async (req, res) => {
    const all = await Product.find();
    res.send(all);
};

module.exports = getAllProduct;
