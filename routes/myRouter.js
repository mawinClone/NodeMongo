const express = require('express');
const router = express.Router();
const Product = require('../models/product'); //เรียกใช้งาน model -> mongoDB สร้าง db, collection

const setNewProduct = require('../controller/setNewProduct');
const getAllProduct = require('../controller/getAllProduct');
const getProductByID = require('../controller/getProductByID');



router.get('/', (req, res) => {
  res.status(200);
  res.type('text/plain');
  res.send('response from router');
});
router.get('/product', (req, res, next) => {
  console.log('router get product!');
  next(); // do next /product path
});


router.get('/getAllProduct', getAllProduct);
router.get('/getProduct/:id', getProductByID);

router.post('/setNewProduct',setNewProduct);

module.exports = router; // ส่งออกให้ index require
