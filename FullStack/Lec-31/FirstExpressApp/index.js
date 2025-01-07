const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>OK!</h1>')
})


app.get('/about',(req,res)=>{
    res.send('This is about page!')
})

app.get('/projects',(req,res)=>{
    res.send('This is project page!')
})


app.listen(4000)