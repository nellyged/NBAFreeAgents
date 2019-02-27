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

const Trend = conn.define('trend', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

Trend.belongsTo(Player);
Player.hasMany(Trend);

//Could pull in the faker npm package to get some fake data, to test tons of data

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(async () => {
    await Promise.all([
      Section.create({
        name: 'Free Agents',
      }),
      Section.create({
        name: 'Trends',
      }),
      Section.create({
        name: 'Analystics',
      }),
    ]);

    const [khawi, jimmy, kevin] = await Promise.all([
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

    await Promise.all([
      Trend.create({
        title: 'Khawi Loves The 6',
        description:
          'Reports have Khawi seriously considering resigning with Toronto this summer',
        playerId: khawi.id,
      }),
      Trend.create({
        title: 'Is Jimmy The Key To A Philly Title?',
        description:
          'After making strong additons before the trade deadline Philly is primed to compete for an Eastern Conference title. Many beleive Jimmy will have to play the biggest role in getting them over the hump',
        playerId: jimmy.id,
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

const getTrends = async () => {
  const trends = await Trend.findAll({
    include: [Player],
  }).then(trends => {
    const stories = [];
    Object.keys(trends).forEach(key => {
      stories.push(trends[key].get());
    });
    return stories;
  });
  return trends;
};

//I like to export mehtods only, and not give access to the Models
module.exports = { syncAndSeed, getSections, getPlayers, getTrends };
