const express = require('express');
const app = express();
exports.app = app;

app.set('view engine', 'ejs');


// User.findOne({username:'rahul'})
//     .then((x)=>{console.log(x)});


// User.find({})
//     .then((x)=>{console.log(x)});

// ======  UPDATE

// User.updateOne({username:'rahul'},{age:60})
//     .then((x)=>{console.log(x)});

// User.updateMany({},{city:'Banglore'})
//     .then((x)=>{console.log(x)});

// ======= DELETE

// User.deleteOne({city:'Banglore'})
//     .then((x)=>{console.log(x)})


// User.deleteMany({})
//     .then((x)=>{console.log(x)})

app.listen(4000, () => {
    console.log('server run at port 4000')
})