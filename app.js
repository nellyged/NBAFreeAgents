const express = require('express');
const app = express();
const morgan = require('morgan');
const Router = require('./app/index');
module.exports = app;

//Track HTTP calls to the server
app.use(morgan('dev'));

app.use(express.static('public'));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json());

app.use('/', Router);
