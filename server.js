const db = require('./db');
//const api = require('./api');
const app = require('./app');
//const apiPort = process.env.PORT || 3001;
const appPort = process.env.PORT || 1337;
//api.listen(apiPort, () => console.log(`api listening on port ${apiPort}`));
app.listen(appPort, () => console.log(`api listening on port ${appPort}`));
db.syncAndSeed();
