const ProductsController = require("../controllers/productController");

module.exports = app => {
    app.get('/api/product',ProductsController.findAllProducts);
    app.get('/api/product/:id',ProductsController.findOneProduct);
    app.post('/api/product',ProductsController.createProduct);
    app.patch('/api/product/:id',ProductsController.updateProduct);
    app.delete('/api/product/:id',ProductsController.deleteProduct);
}


