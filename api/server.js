const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const cors = require('cors');
const app = express();

//middlewares
app.use(cors());
app.use('/', routes);
module.exports = app;