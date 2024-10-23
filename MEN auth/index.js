require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/");

const express = require('express');
const app = express();
app.use(express.static('public'));

const port = process.env.SERVER_PORT | 3000;

app.listen(port, ()=>{
    console.log("server is running on Port: "+port);
});