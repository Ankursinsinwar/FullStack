const express = require("express");
const path = require('path');

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

const PORT = 5000;

app.get('/',(req,res)=>{
    res.render('home')
});



app.get('/todos',(req,res)=>{
    console.log(req.query)
    res.render('todos')
});


app.get('/signup',(req,res)=>{
    // res.send('This is about page!')
    res.render('signup')
});

app.get('/login',(req,res)=>{
    console.log(req.body)
    res.render('login')
});

app.post('/login',(req,res)=>{

    res.render('login')
});

app.listen(PORT,()=>{
    console.log("server is running on port", PORT)
    console.log("For stop press 'Ctrl+c'")
});
