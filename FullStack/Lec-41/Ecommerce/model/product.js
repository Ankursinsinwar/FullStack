const mongoose = require('mongoose');
const { type } = require('os');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    },
    image:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    desc:{
        
        type:String,
        require:true,
        trim:true
            
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;