const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Castle = require('./schema/castle');

const app = express();

mongoose
  .connect(
    'mongodb://localhost:27017/Castle', { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  next();
});

app.get("/api/name", (req, res, next) => {
  Castle.find({starred: true}).sort({name: 1}).then(documents => {
    res.status(200).json({
      message: 'succes',
      castles: documents
    });
  });
});

module.exports = app;
