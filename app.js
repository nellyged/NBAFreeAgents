const express = require('express');
const app = express();
const appRouter = require('./app_routes/index');
module.exports = app;

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json());

app.use('/', appRouter);
