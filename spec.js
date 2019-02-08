//test with super test to test the spin up before we even run a server
// - first db.js
// - second api.js
// - third app.js
//const app = require('supertest')(require('./app'));
//app it as an object for future use
const { expect } = require('chai');
const db = require('./db');

//Uncommit This Later
// describe('app', () => {
//   let pageMap = {
//     Home: {
//       id: 1,
//     },
//   };
//   describe('GET /', () => {
//     beforeEach(() => {
//       //async code that will return a promise of data from the db that we will test against
//       db.syncAndSeed();
//     });
//     it('redirect to the home page', () => {
//       return app
//         .get('/')
//         .expect(302)
//         .then(response => {
//           expect(response.headers.location).to.equal(
//             `/pages/${pageMap.Home.id}`
//           );
//         });
//     });
//   });
// });

describe('db', () => {
  describe('Sync & Seed DB', () => {
    it('Connects To The DB & Grabs Main Tabs', () => {
      return db.syncAndSeed().then(response => {
        expect(response['Home']).to.equal(1);
        expect(response['Trends']).to.equal(2);
        expect(response['News']).to.equal(3);
      });
    });
  });
});
