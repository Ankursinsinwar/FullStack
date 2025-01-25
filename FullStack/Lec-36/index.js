const express = require('express');
const app = express();
const mongoose = require('mongoose');

//  mongoose express ko mongo db ko connect karna hai 


mongoose.connect('mongodb://127.0.0.1:27017/SEC-AA')
// mongoose ek promise hai iisliye .then lagaye hai
// uper test databse ka name hai 
    .then(() => console.log('DB connected'))
    .catch(()=>{console.log('DB not connected !')})

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    city:String
})

// schemma ek structrue hai data ka kya kya hoga like that 

const User = mongoose.model('User',userSchema)

// User.create({
//     username :'Sam',
//     password:'yoyo',
//     age:32,
//     city:'delhi'

// }).then(()=>{console.log('Document Created')})

// secAA DB name | User collection hai | uske andar doument hai 

// READ ke liye 

// User.find({username:'Sam'})
//     .then((data)=> {console.log(data)})

// find se saare find kar dega | findone se ek find karega 

// UPDATE KE LIYE 

// User.updateOne({username:'Sam'},{age:60})
//     .then((data)=>{console.log(data)}) || agar update ke andar phele argument nhi de toh wo sbaka update kar dega 


// User.updateMany({},{city:'A'})
//     .then((data)=>{console.log(data)})

// User.deleteOne({age:60})
//     .then((data)=>{console.log(data)})

// delete many se us conditon ke acc. sbko delte kar dega || koi condition nhi toh sb delete 
app.listen(4000);