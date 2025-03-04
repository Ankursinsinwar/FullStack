const express = require('express');
const app = express();
const mongoose = require('mongoose');
const post = require('./models/post');
var methodOverride = require('method-override')
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
mongoose.connect('mongodb://127.0.0.1:27017/extra-assinment')
.then(()=>{
  console.log('DB conected!')
})
.catch(()=>{
  console.log('DB not conected')
})

app.get('/posts',async (req,res)=>{
  const posts = await post.find({})
  res.render('post',{posts})
})

app.get('/post/new',(req,res)=>{
  res.render('new')
})

app.post('/posts',async (req,res)=>{
    const {title,content,comment,tag} = req.body;
    await post.create({title,content,comment,tag})
    res.redirect('/posts')
  })
  
  app.get('/posts/:id',async (req,res)=>{
    const {id} = req.params;
    const postItem = await post.findById(id);
    res.render('show',{post:postItem})
  })
  
  app.get('/posts/:id/edit',async (req,res)=>{
    const {id} = req.params;
    const postItem = await post.findById(id);
    res.render('edit',{post:postItem})
  })
  
  app.put('/posts/:id',async (req,res)=>{
    const {id} = req.params;
    const {title,content,comment,tag} = req.body;
    await post.updateOne({_id:id},{title,content,comment,tag});
    res.redirect('/posts')
  })
  
  app.delete('/posts/:id',async (req,res)=>{
    const {id} = req.params;
    await post.deleteOne({_id:id})
    res.redirect('back')
  })
  
  app.listen(4000,()=>{
    console.log('Server running at port 4000')
  })
  