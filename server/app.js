const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

module.exports = app;
