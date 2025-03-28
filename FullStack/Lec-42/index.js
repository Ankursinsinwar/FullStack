const express = require("express");
const app = express();
const cookie = require('cookie-parser');


const port = 4000;



app.get('/',(req,res)=>{
    res.send('index')
})


app.get('/store',(req,res)=>{
    res.cookie('discount',300, {signed:true});
    res.send("visited")
})
 

app.get('/buy',(req,res)=>{
    let productprice = 400;
    const {discount} = req.signedCookies;
    if(discount){
        productprice-=discount;
        res.send("purchased");
    }
    else{
        res.send("discount not available");
    }
})
  

app.listen(port,()=>{
    console.log('Server running at port 4000')
  })
