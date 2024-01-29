const Product = require("../models/product");

const getProductByID = async (req, res) => {
    const product = await Product.findOne({_id: req.params.id});
    console.log(product);
    res.send(product);
};

module.exports = getProductByID;
