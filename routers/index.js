const productIdRouter = require('./productsRouter');
const usersRouter = require('./userRouter');
const express = require('express');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    app.use('/products', productIdRouter);
    app.use('/users', usersRouter);
}

module.exports = routerApi;