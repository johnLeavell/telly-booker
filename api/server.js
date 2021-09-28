const express = require('express');
require('dotenv').config();
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

//db connect
mongoose
.connect(process.env.DATABASE)
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));

//middlewares
app.use(cors());
app.use('/', routes);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`))
 