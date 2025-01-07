const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send('<h1>OK!</h1>')
});


app.get('/about',(req,res)=>{
    res.send('This is about page!')
});

app.get('/projects',(req,res)=>{
    res.send('This is project page!')
});


app.get('/login',(req,res)=>{
    res.send('Login')
});

app.get('/signup/:username/:password',(req,res)=>{
    console.log(req.params)
    res.send('This is signup page!')
});



app.get('/*',(req,res)=>{
    res.send('<h1>404 page not found</h1>')
}); app.listen(4000);