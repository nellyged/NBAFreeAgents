const express = require('express');
const Router = express();
const db = require('../db/db');
const path = require('path');

//My Sports Feed Isnt Working, Maybe Becasue its not non commerical yet
// const MySportsFeeds = require('mysportsfeeds-node');
// const msf = new MySportsFeeds('2.0', true, null);

// msf.authenticate('3ef26792-2aec-48e6-89d3-918095', 'MYSPORTSFEEDS');

// const data = msf.getData(
//   'nba',
//   '2016-2017-regular',
//   'seasonal_player_gamelogs',
//   'json',
//   { player: 'stephen-curry' }
// );

const NBA = require('nba');
const curry = NBA.findPlayer('Stephen Curry');

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

//Direct all traffic to the index.html that we will manipulate. Prof does it differently, lets see which works best and why. Prof way is more direct, in my way app.js and index.js are both sending data. Could cause problems later on. I will learn the Prof way
// Router.get('/app.js', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../dist', 'main.js'));
// });

Router.use(express.static(path.join(__dirname, '..', 'public')));

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Express app is client side and will be serving up the data that we need to populate the front end with
Router.get('/api/hottopics', (req, res, next) => {
  db.getHotTopics()
    .then(topics => {
      topics.curry = curry;
      res.send(topics);
    })
    .catch(next);
});

Router.get('/api/takes', (req, res, next) => {
  db.getTakes()
    .then(takes => {
      res.send(takes);
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
