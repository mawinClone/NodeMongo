const express = require('express');
const router = express.Router();
let x = 3;

router.get("/",(req, res)=>{
    res.status(200)
    res.type("text/plain");
    res.send("response from router");
});
router.get('/product',(req, res, next)=>{ 
    
    console.log("router get product!");

    next(); // do next /product path 

})

module.exports = router; // ส่งออกให้ index require