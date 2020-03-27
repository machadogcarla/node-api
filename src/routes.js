const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get('/products', ProductController.index);

//select (para visualizar todos os registros)
routes.get('/products/:id', ProductController.show);

//criando algo no servidor usa post
routes.post('/products', ProductController.store);

//metodo de alteração, update e altera pela id
routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;