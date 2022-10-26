const express = require('express');

const home = require('./routes/home');

const app = express();

app.use('/', home);

module.exports = app;
