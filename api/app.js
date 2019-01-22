const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log("Test ok !!!");
  next();
});

module.exports = app;
