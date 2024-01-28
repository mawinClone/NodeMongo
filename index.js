const express = require('express');
const app = express();
const router = require('./routes/myRouter');
const PORT = 8080;

const Product = require('./models/product') //เรียกใช้งาน model -> mongoDB สร้าง db, collection

app.use(router);

const product = [
    {
        name: 'IPhone20',
        image: 'https://t1.daumcdn.net/cfile/tistory/121C3C345051A6361D',
        company: 'Apple',
    },{
        name: 'iphone200',
        image: 'https://i.pinimg.com/564x/72/45/04/7245040295a54ccbc0bf3be2493ff84e.jpg',
        company: 'Apple',
    },{
        name: 'iphone1000',
        company: 'Apple',
        image: 'https://i.pinimg.com/originals/2f/9c/37/2f9c371868b24f149e1586c7a12f87cc.jpg',
    }
]

app.get('/product',(req, res)=>{
    console.log("app get product");
    res.status(200).json(product);
})

app.listen(PORT,()=>{
    console.log('Server Runing ... ');
})