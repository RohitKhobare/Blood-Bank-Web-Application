const express = require("express");
const User = require("./models/userModel");
const BloodStock = require("./models/bloodStockModel");

const router = express.Router();

// Register User
router.post("/register", async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({ message: "User Registered!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get Blood Stock
router.get("/blood-stock", async (req, res) => {
    try {
        const stock = await BloodStock.find();
        res.json(stock);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
