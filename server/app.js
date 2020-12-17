const fs = require('fs');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(bodyParser.json());

app.get('/wishlist', (req, res) => {
  res.status(200).send({
    message: 'Hello!',
  });
});

app.get('/wishlist/:id', (req, res) => {
  res.status(200).send({
    message: `Hello! Your request id is:${req.params.id}`,
  });
});

app.post('/wishlist', (req, res) => {
  res.status(201).send({ message: 'Your wishlist has been created!' });
});

app.delete('/wishlist/:id', (req, res) => {
  res
    .status(200)
    .send({ message: `request ${req.params.id} has been deleted` });
});

app.put('/wishlist/:id', (req, res) => {
  res
    .status(200)
    .send({ message: `request ${req.params.id} has been updated` });
});

module.exports = app;
