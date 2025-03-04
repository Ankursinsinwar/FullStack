const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product');
const path = require('path')
const ejsMate = require('ejs-mate')
var methodOverride = require('method-override')


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))



app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/Lec-41-Ecommerce')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected')})

app.get('/products',async (req,res)=>{
    const products = await Product.find({})
    res.render('product',{products})
})


app.get('/product/index',(req,res)=>{
    res.render('index')
})


app.listen(5000,()=>{
    console.log("server running on 5000");
})