const app = require('./server');
require('dotenv').config();
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

//db connect
mongoose
.connect(process.env.DATABASE)
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));

app.listen(port, () => console.log(`Server is running on port ${port}`));