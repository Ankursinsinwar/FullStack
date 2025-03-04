const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    
    carVIN: {
         type: String,
         required: true,
         trim: true,
         unique: true },

    carModel: {
         type: String,
         required: true,
         trim: true },

    manufacturer: {
         type: String,
         required: true },

    yearOfManufacture: {
         type: Number,
         required: true },

    mileage: {
         type: Number,
         required: true },

    isElectric: {
         type: Boolean,
         required: true },

    color: {
         type: String,
         required: true },

    price: {
         type: Number,
         required: true }
});

module.exports = mongoose.model('Car',
     carSchema);