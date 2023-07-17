const express =require("express");
const app= express();
require("./config/mongoose.config.js");
app.use(express.json(), express.urlencoded({extended: true}));
const cors = require("cors")
app.use(cors());

const ProductsRoutes = require("./routes/productRoute");
ProductsRoutes(app)

app.listen(8000, ()=> console.log("the server is fired up on port 8000!"))

