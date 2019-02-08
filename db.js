const { Client } = require('pg');
const client = new Client(process.env.DATABASE_URL);

client.connect();

//query to seed the DB with the needed test data
const SEED = `
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS players;
  CREATE TABLE sections(
    id SERIAL PRIMARY KEY,
    name varchar(100)
  );
  CREATE TABLE players(
    id SERIAL PRIMARY KEY,
    position varchar(100),
    player varchar(100),
    team varchar(100),
    status varchar(100)
  );
  INSERT INTO sections(name) values('Home');
  INSERT INTO sections(name) values('Trends');
  INSERT INTO sections(name) values('News');

  INSERT INTO players(position,player,team,status) values ('PF','Anthony Davis','Pelicans','Under Contract');
  INSERT INTO players(position,player,team,status) values ('SF','Khawi Leonard','Raptors','Unrestricted Free Agent');
  INSERT INTO players(position,player,team,status) values ('PG','Kyrie Irving','Pelicans','Unrestricted Free Agent');
  `;

const getSections = () => {
  return client.query('SELECT * FROM sections').then(response => response.rows);
};

const getPlayers = () => {
  return client.query('SELECT * FROM players').then(response => response.rows);
};

const syncAndSeed = () => {
  //seed then run a query to get all the tabs in an object to test successful connection
  return client
    .query(SEED)
    .then(() => getSections())
    .then(sections => {
      return sections.reduce((acc, section) => {
        acc[section.name] = section.id;
        return acc;
      }, {});
    });
};

module.exports = { syncAndSeed, getSections, getPlayers };
