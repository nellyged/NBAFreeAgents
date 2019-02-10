const express = require('express');
const api = express();
const apiRouter = require('./api_routes/index');
module.exports = api;

// parses url-encoded bodies
api.use(express.urlencoded({ extended: false }));

// parses json bodies
api.use(express.json());

api.use('/', apiRouter);
