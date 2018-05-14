const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv').config();
const router = require('./routes/index.js');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Connected to port: ${port}`);
});
