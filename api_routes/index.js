const express = require('express');
const apiRouter = express();
const db = require('../db');
module.exports = apiRouter;

apiRouter.get('/', (req, res, next) => {
  db.getSections()
    .then(sections => {
      console.log(sections);
      res.send(sections);
    })
    .catch(next);
});
