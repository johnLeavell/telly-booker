const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const app = express(); 

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use('/', routes);
app.use(express.static('public'));
module.exports = app;
