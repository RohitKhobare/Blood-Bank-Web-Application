const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    role: String,  // donor, recipient, hospital, admin
    bloodType: String,
    location: String,
    email: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);
