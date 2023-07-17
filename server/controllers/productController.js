const { model } = require("mongoose");
const Product = require("../models/productModel");

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => res.json(allProducts))
        .catch(err => console.log(err));
}

module.exports.findOneProduct = (req, res) => {
    Product.findById({ _id: req.params.id })
        .then(oneProduct => res.json(oneProduct))
        .catch(err => console.log(err))
}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => res.json(newProduct))
        .catch(err => console.log(err))
}

module.exports.updateProduct = (req, res) => {
    console.log("in updaate product");
    Product.findByIdAndUpdate(
        { _id: req.params.id }, req.body,
        { new: true }
    )
        .then(editedProduct => res.json(editedProduct))
        .catch(err => console.log(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => console.log(err));
}
