const mongoose = require('mongoose');
const Product = require('./models/post')

mongoose.connect('mongodb://127.0.0.1:27017/extra-assinment')
    .then(() => { console.log('DB conected!') })
    .catch(() => { console.log('DB not conected') })


const posts = [
    {
        title: 'Post 1',
        content: 'content1',
        comment: 'comment1',
        tag: 'tag1'
    },
    {
        title: 'Post 2',
        content: 'content2',
        comment: 'comment2',
        tag: 'tag2'
    },
    {
        title: 'Post 3',
        content: 'content3',
        comment: 'comment3',
        tag: 'tag3'
    }
];


Product.create(posts)
    .then(() => { console.log('posts created !') })