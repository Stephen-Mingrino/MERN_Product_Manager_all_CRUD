const mongoose =require("mongoose")

mongoose.connect("mongodb://localhost/product_manager",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("established a connection to the DB!"))
    .catch( err => console.log("Failed to establish a connection to DB"))

require("../models/productModel")