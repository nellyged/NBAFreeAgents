const db = require('./db/db');
const app = require('./app');
const port = process.env.PORT || 3000;
db.syncAndSeed().then(() => {
  console.log('Seeded Done');
  app.listen(port, () => console.log(`api listening on port ${port}`));
});
