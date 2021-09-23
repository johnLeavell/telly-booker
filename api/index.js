const express = require('express');
require('dotenv').config();
const app = require('./server');
const port = process.env.PORT || 8000;

async function testConnection() {
    await mongoose
        .connect(process.env.DATABASE)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB Connection Error: ", err));
}

testConnection();
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

