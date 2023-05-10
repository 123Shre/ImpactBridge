const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const bcrypt = require('bcrypt');
const connection = require('./DB/conn');
const app  = express();
app.use(express());
app.use(express.json());
app.use(cors());

port = process.env.PORT || 3000;

connection();

app.listen(3000, () => console.log(`server listening to ${port}`));