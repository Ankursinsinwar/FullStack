const express = require('express');
const app = express();

app.set('view engine','ejs');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Restfull')
  .then(() => console.log('DB Connected!'))
  .catch(()=>{console.log('DB not conected')})


const Product = require('./model/Product');


Product.create({
  Product :'apple',
  quantity:4
}).then(()=>{console.log('Document Created')})


app.get('/products', async (req, res) => {
    const products = await Product.find({});
    console.log(products); 
    res.render('product', { products });
  });
  

// User.findOne({username:'rahul'})
//     .then((x)=>{console.log(x)});


// User.find({})
//     .then((x)=>{console.log(x)});

// ======  UPDATE

// User.updateOne({username:'rahul'},{age:60})
//     .then((x)=>{console.log(x)});

// User.updateMany({},{city:'Banglore'})
//     .then((x)=>{console.log(x)});

// ======= DELETE

// User.deleteOne({city:'Banglore'})
//     .then((x)=>{console.log(x)})


// User.deleteMany({})
//     .then((x)=>{console.log(x)})

app.listen(4000,()=>{
    console.log('server run at port 4000')
})