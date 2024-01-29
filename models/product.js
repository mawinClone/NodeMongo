//ใช้งาน mongoose
const mongoose = require('mongoose'); 
const dbUrl = 'mongodb://localhost:27017/productDB'; // เอามาจาก mongoDB compass


//เชื่อม mongodb
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>console.log(err));
    
// schema design
let productSchema =  mongoose.Schema({
    name: String,
    price: Number,
    desciption: String
});

// create model 
let Product =  mongoose.model("products", productSchema); // เป็นการผูกกับ collection "products"

// export model
module.exports = Product;

module.exports.saveProduct=function(model,data){
    model.save(data)
}
