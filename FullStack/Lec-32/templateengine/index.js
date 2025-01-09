const express = require("express");
const path = require('path');

const app = express();

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')))

const PORT = 5000;

app.get('/',(req,res)=>{
    res.send('<h1>OK!</h1>')
});



let todos = ['gamming','sleeping','eating']
app.get('/todos',(req,res)=>{
    // res.send('This is about page!')
    res.render('todos',{todos})
});


app.get('/about',(req,res)=>{
    // res.send('This is about page!')
    res.render('about')
});

app.get('/login',(req,res)=>{
    // res.send('This is about page!')
    res.render('login')
});

app.listen(PORT,()=>{
    console.log("server is running on port", PORT)
    console.log("For stop press 'Ctrl+c'")
});
