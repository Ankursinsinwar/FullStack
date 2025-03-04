const express = require('express');
const app = express();
const blog = require('./mode/blog');
var methodOverride = require('method-override')


app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/CSR')
    .then(()=>{console.log('DB conected!')})
    .catch(()=>{console.log('DB not conected')})
