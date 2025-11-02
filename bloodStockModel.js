const mongoose = require("mongoose");

const BloodStockSchema = new mongoose.Schema({
    bloodType: String,
    quantity: Number,
    location: String
});

module.exports = mongoose.model("BloodStock", BloodStockSchema);
