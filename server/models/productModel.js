const { text } = require("express");
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
}, {timestamps: true}
);

module.exports = (mongoose.model("Products", ProductSchema))