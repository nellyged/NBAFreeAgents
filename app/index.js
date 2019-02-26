const express = require('express');
const Router = express();
const db = require('../db/db');
module.exports = Router;

// const renderPage = sections => {
//   return `
//       <html>
//       <head>
//         <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css' />
//       </head>
//       <body>

//         <div class='container'>
//         <h1>Summer 2019 Free Agents</h1>
//         <ul class='nav nav-tabs'>
//           ${sections
//             .map(section => {
//               return `
//               <li class='nav-item'>
//                 <a href='/pages/${section.id}' class='nav-link'>
//                 ${section.name}
//                 </a>
//               </li>
//             `;
//             })
//             .join('')}
//         </ul>
//         <div id = 'tabContent'>
//         </div>
//       </div>
//       </body>
//       </html>
//     `;
// };

// Router.use((req, res, next) => {
//   //Loads the sections but I probably dont need this once I incoporate React and server up one HTML page
//   db.getSections()
//     .then(response => {
//       req.sections = response;
//       next();
//     })
//     .catch(next);
// });

// Router.get('/', (req, res, next) => {
//   res.redirect(`/pages/${req.sections[0].id}`);
// });

// Router.get('/pages/:id', (req, res, next) => {
//   let section = req.sections.filter(element => {
//     return element.id === req.params.id + 0;
//   }).name;
//   res.send(renderPage(req.sections));
// });

//Direct all traffic to the index.html that we will manipulate
Router.use(express.static('public'));

//Express app is client side and will be serving up the data that we need to populate the front end with
Router.get('/api/freeagents', (req, res, next) => {
  db.getPlayers()
    .then(players => {
      res.send(players);
    })
    .catch(next);
});

Router.get('/api/sections', (req, res, next) => {
  //Loads the sections but I probably dont need this once I incoporate React and server up one HTML page
  db.getSections()
    .then(sections => {
      res.send(sections);
    })
    .catch(next);
});

//Add handling for unfound routes entered in the URL
