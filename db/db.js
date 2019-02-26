const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});

const Section = conn.define('section', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Player = conn.define('player', {
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
  height: {
    type: Sequelize.STRING,
  },
  weight: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.STRING,
  },
  college: {
    type: Sequelize.STRING,
  },
  jerseyNumber: {
    type: Sequelize.STRING,
  },
});

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(async () => {
    const [home, trends, analytics] = await Promise.all([
      Section.create({
        name: 'Home',
      }),
      Section.create({
        name: 'Trends',
      }),
      Section.create({
        name: 'Analystics',
      }),
    ]);

    await Promise.all([
      Player.create({
        firstName: 'Khawi',
        lastName: 'Leonard',
        position: 'SF',
        height: `6'7`,
        weight: '230',
        age: '27',
        college: 'San Diego State University',
        jerseyNumber: '2',
      }),
      Player.create({
        firstName: 'Jimmy',
        lastName: 'Butler',
        position: 'SF',
        height: `6'8`,
        weight: '232',
        age: '29',
        college: 'Marquette University',
        jerseyNumber: '23',
      }),
      Player.create({
        firstName: 'Kevin',
        lastName: 'Durant',
        position: 'SF',
        height: `6'9`,
        weight: '240',
        age: '30',
        college: 'University Of Texas At Austin',
        jerseyNumber: '35',
      }),
    ]);
  });
};

const getSections = async () => {
  const sections = await Section.findAll({}).then(sections => {
    const tabs = [];
    Object.keys(sections).forEach(key => {
      tabs.push(sections[key].get());
    });
    return tabs;
  });
  return sections;
};

const getPlayers = async () => {
  const players = await Player.findAll({}).then(players => {
    const freeAgents = [];
    Object.keys(players).forEach(key => {
      freeAgents.push(players[key].get());
    });
    return freeAgents;
  });
  return players;
};

//I like to export mehtods only, and not give access to the Models
module.exports = { syncAndSeed, getSections, getPlayers };
