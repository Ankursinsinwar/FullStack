const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const Car = require('./models/car');

const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://localhost:27017/carDB')
    .then(()=>{
        console.log('DB conected!')
      })
      .catch(()=>{
        console.log('DB not conected')
      })


app.get('/',(req, res) => {
    res.send("code chal raha he !.  now navigate to cars")
})

app.get('/cars/new', (req, res) => {
    res.render('cars/new');
});

app.post('/cars', async (req, res) => {
    try {
        const car = new Car(req.body);
        await car.save();
        res.redirect('/cars');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/cars', async (req, res) => {
    try {
        const cars = await Car.find();
        res.render('cars/index', { cars });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/cars/:id', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.render('cars/show', { car });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/cars/:id/edit', async (req, res) => {
    try {
        const car = await Car.findById(req.params.id);
        res.render('cars/edit', { car });
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/cars/:id', async (req, res) => {
    try {
        const { carVIN, ...updates } = req.body;
        await Car.findByIdAndUpdate(req.params.id, updates);
        res.redirect(`/cars/${req.params.id}`);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/cars/:id', async (req, res) => {
    try {
        await Car.findByIdAndDelete(req.params.id);
        res.redirect('/cars');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));