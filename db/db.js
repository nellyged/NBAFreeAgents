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

const Team = conn.define('team', {
  name: {
    type: Sequelize.STRING,
  },
  headCoach: {
    type: Sequelize.STRING,
  },
});

const User = conn.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  favTeams: {
    defaultValue: [],
    type: Sequelize.ARRAY(Sequelize.INTEGER),
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

const Take = conn.define('take', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

Take.belongsTo(Player);
Take.belongsTo(User);
Player.hasMany(Take);
User.hasMany(Take);

Player.belongsTo(Team);
Team.hasMany(Player);

//Could pull in the faker npm package to get some fake data, to test tons of data

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(async () => {
    await Promise.all([
      Section.create({
        name: 'Hot Topics',
      }),
      Section.create({
        name: 'Takes',
      }),
      Section.create({
        name: 'Analytics',
      }),
    ]);

    const [knicks, lakers, gsw] = await Promise.all([
      Team.create({
        name: 'New York Knicks',
      }),
      Team.create({
        name: 'Los Angeles Lakers',
      }),
      Team.create({
        name: 'Golden State Warriors',
      }),
    ]);

    const [
      alvin,
      justin,
      ernst,
      jerry,
      bernard,
      damon,
      mike,
      nelson,
    ] = await Promise.all([
      User.create({
        name: 'Alvin',
        favTeams: [knicks.id],
      }),
      User.create({
        name: 'Justin',
        favTeams: [knicks.id],
      }),
      User.create({
        name: 'Ernst',
        favTeams: [knicks.id],
      }),
      User.create({
        name: 'Jerry',
        favTeams: [knicks.id],
      }),
      User.create({
        name: 'Bernard',
        favTeams: [knicks.id],
      }),
      User.create({
        name: 'Damon',
        favTeams: [gsw.id],
      }),
      User.create({
        name: 'Mike',
        favTeams: [gsw.id],
      }),
      User.create({
        name: 'Nelson',
        favTeams: [lakers.id],
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
      Take.create({
        title: 'Khawi Loves The 6',
        description:
          'Reports have Khawi seriously considering resigning with Toronto this summer',
        playerId: khawi.id,
        userId: bernard.id,
      }),
      Take.create({
        title: 'Is Jimmy The Key To A Philly Title?',
        description:
          'After making strong additons before the trade deadline Philly is primed to compete for an Eastern Conference title. Many beleive Jimmy will have to play the biggest role in getting them over the hump',
        playerId: jimmy.id,
        userId: ernst.id,
      }),
      Take.create({
        title: 'KD Coming To The Big Apple',
        description:
          'All signs point to KD shocking the league once again and signing with the Knicks to jump start a franchise that has been a bottom dweller for 2 decades',
        playerId: kevin.id,
        userId: justin.id,
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

const getHotTopics = async () => {
  //Grab freeAgents, Teams on the move, GM News etc
  const topics = {};
  const freeAgents = await Player.findAll({}).then(players => {
    const freeAgents = [];
    Object.keys(players).forEach(key => {
      freeAgents.push(players[key].get());
    });
    return freeAgents;
  });
  topics.freeAgents = freeAgents;
  return topics;
};

const getTakes = async () => {
  const takes = await Take.findAll({
    include: [Player, User],
  }).then(takes => {
    const stories = [];
    Object.keys(takes).forEach(key => {
      stories.push(takes[key].get());
    });
    return stories;
  });
  return takes;
};

//I like to export mehtods only, and not give access to the Models
module.exports = { syncAndSeed, getSections, getHotTopics, getTakes };
