//test with super test to test the spin up before we even run a server
// - first db.js
// - second api.js
// - third app.js
const api = require('supertest')(require('./api'));
//app it as an object for future use
const { expect } = require('chai');
const db = require('./db/db');

// //api test
// describe('api', () => {
//   let pageMap = {
//     Home: 1,
//     Trends: 2,
//     News: 3,
//   };
//   describe('GET /', () => {
//     let sectionsDB;
//     beforeEach(() => {
//       //async code that will return a promise of data from the db that we will test against. Must return or it will time out
//       return db.syncAndSeed().then(_sections => (sectionsDB = _sections));
//     });
//     it('brings up all the sectons from the db', () => {
//       console.log(sectionsDB);
//       return api.get('/').then(response => {
//         expect(response.text).contain('Home');
//         expect(response.text).contain('Trends');
//         expect(response.text).contain('News');
//       });
//     });
//   });
// });

// //db test
// describe('db', () => {
//   describe('Sync & Seed DB', () => {
//     it('Connects To The DB & Grabs Main Tabs', () => {
//       return db.syncAndSeed().then(response => {
//         expect(response['Home']).to.equal(1);
//         expect(response['Trends']).to.equal(2);
//         expect(response['News']).to.equal(3);
//       });
//     });
//   });
// });

// //ap test
// describe('app', () => {
//   let pageMap = {
//     Home: 1,
//     Trends: 2,
//     News: 3,
//   };
//   describe('GET /', () => {
//     let sectionsDB;
//     beforeEach(() => {
//       //async code that will return a promise of data from the db that we will test against. Must return or it will time out
//       return db.syncAndSeed().then(_sections => (sectionsDB = _sections));
//     });
//     it('brings up all the sectons from the db', () => {
//       console.log(sectionsDB);
//       return api
//         .get('/')
//         .expect(200)
//         .then(response => {
//           expect(response.text).contain('Home');
//           expect(response.text).contain('Trends');
//           expect(response.text).contain('News');
//         });
//     });
//   });
// });
