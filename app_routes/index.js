const express = require('express');
const appRouter = express();
const db = require('../db');
module.exports = appRouter;

const renderPage = sections => {
  return `
      <html>
      <head>
        <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' />
      </head>
      <body>

        <div class='container'>
        <h1>Summer 2019 Free Agents</h1>
        <ul class='nav nav-tabs'>
          ${sections
            .map(section => {
              return `
              <li class='nav-item'>
                <a href='/pages/${section.id}' class='nav-link'>
                ${section.name}
                </a>
              </li>
            `;
            })
            .join('')}
        </ul>
        <div id = 'tabContent'>
        </div>
      </div>
      </body>
      </html>
    `;
};

appRouter.use((req, res, next) => {
  db.getSections()
    .then(response => {
      req.sections = response;
      next();
    })
    .catch(next);
});

appRouter.get('/', (req, res, next) => {
  res.redirect(`/pages/${req.sections[0].id}`);
});

appRouter.get('/pages/:id', (req, res, next) => {
  let section = req.sections.filter(element => {
    return element.id === req.params.id + 0;
  }).name;
  res.send(renderPage(req.sections));
});
