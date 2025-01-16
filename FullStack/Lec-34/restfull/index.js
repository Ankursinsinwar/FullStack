const express = require('express');
const app = express();

const Users = require('./data/user');
const e = require('express');

app.set('view engine','ejs');

app.use(express.urlencoded({ extended: true }));


app.get('/',(req,res)=>{
    res.send('home page')
});


app.get('/users',(req,res)=>{
    res.render('user',{Users})
});


app.get('/user/new',(req,res)=>{
    res.render('new',{Users})
});

app.post('/users',(req,res)=>{
    const {name,password,email,city} = req.body;
    let user = {name,password,email,city};
    Users.push(user);
    res.redirect('/users')
});


const port = 4000;
app.listen(port,()=>{
    console.log('Server is running on port', port);
})