const express = require('express');
const app = express();

const Users = require('./data/user');

app.set('view engine','ejs');


app.get('/',(req,res)=>{
    res.send('home page')
});


app.get('/user',(req,res)=>{
    res.render('user',{Users})
});


app.get('/user/new',(req,res)=>{
    res.render('new',{Users})
});


const port = 4000;
app.listen(port,()=>{
    console.log('Server is running on port', {port});
})