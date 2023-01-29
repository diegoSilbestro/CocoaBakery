const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require ('dotenv').config();

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');
const cartRouter = require ('./routes/cart')
const {dbProductsConnection} = require('./db/dbProducts')
const {dbCartConnection} = require('./db/dbCart')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

dbProductsConnection();
dbCartConnection();

module.exports = app;
