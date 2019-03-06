const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
});
const NBA = require('nba');

const Section = conn.define('section', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Team = conn.define('team', {
  teamId: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
  abr: {
    type: Sequelize.STRING,
  },
  location: {
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

const Coach = conn.define('coach', {
  teamId: Sequelize.INTEGER,
  name: Sequelize.STRING,
  coachId: Sequelize.STRING,
});

const Player = conn.define('player', {
  playerId: {
    type: Sequelize.INTEGER,
  },
  teamId: {
    type: Sequelize.INTEGER,
  },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  position: {
    type: Sequelize.STRING,
  },
});

const PlayerDetail = conn.define('playerDetail', {
  playerId: Sequelize.INTEGER,
  height: Sequelize.STRING,
  weight: Sequelize.STRING,
  age: Sequelize.STRING,
  college: Sequelize.STRING,
  jerseyNumber: Sequelize.STRING,
});

const Take = conn.define('take', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

//Set the relationships now
Take.belongsTo(User);
User.hasMany(Take);

const syncAndSeed = () => {
  return conn.sync({ force: true }).then(async () => {
    Promise.all([
      Section.create({
        name: 'Hot Topics',
      }),
      Section.create({
        name: 'Takes',
      }),
      Section.create({
        name: 'Analytics',
      }),
      Section.create({
        name: 'Wagers',
      }),
    ]);

    //Create Bare Bone Teams
    NBA.teams.forEach(team => {
      Team.create({
        teamId: team.teamId,
        name: team.teamName,
        abr: team.abbreviation,
        location: team.location,
      });
    });

    //Create Bare Bone Players
    NBA.players.forEach(player => {
      Player.create({
        firstName: player.firstName,
        lastName: player.lastName,
        playerId: player.playerId,
        teamId: player.teamId,
      });
    });

    //The nba package doesnt seem to have rookie bare bones data

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
        favTeams: [],
      }),
      User.create({
        name: 'Justin',
        favTeams: [],
      }),
      User.create({
        name: 'Ernst',
        favTeams: [],
      }),
      User.create({
        name: 'Jerry',
        favTeams: [],
      }),
      User.create({
        name: 'Bernard',
        favTeams: [],
      }),
      User.create({
        name: 'Damon',
        favTeams: [],
      }),
      User.create({
        name: 'Mike',
        favTeams: [],
      }),
      User.create({
        name: 'Nelson',
        favTeams: [],
      }),
    ]);

    await Promise.all([
      Take.create({
        title: 'Khawi Loves The 6',
        description:
          'Reports have Khawi seriously considering resigning with Toronto this summer',
        userId: 1,
      }),
      Take.create({
        title: 'Is Jimmy The Key To A Philly Title?',
        description:
          'After making strong additons before the trade deadline Philly is primed to compete for an Eastern Conference title. Many beleive Jimmy will have to play the biggest role in getting them over the hump',
        userId: 2,
      }),
      Take.create({
        title: 'KD Coming To The Big Apple',
        description:
          'All signs point to KD shocking the league once again and signing with the Knicks to jump start a franchise that has been a bottom dweller for 2 decades',
        userId: 3,
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
  const Op = Sequelize.Op;
  //Grab freeAgents, Teams on the move, GM News etc
  const topics = {};
  const freeAgents = await Player.findAll({
    where: {
      playerId: {
        [Op.in]: [
          201142,
          202695,
          202681,
          202710,
          202689,
          202691,
          202326,
          202696,
          202699,
          204001,
          203114,
          1626156,
          201188,
          203944,
        ],
      },
    },
  }).then(players => {
    const freeAgents = [];
    Object.keys(players).forEach(key => {
      freeAgents.push(players[key].get());
    });
    return freeAgents;
  });

  const mvpCandidates = await Player.findAll({
    where: {
      playerId: {
        [Op.in]: [201935, 203507, 202331],
      },
    },
  }).then(players => {
    const mvpCandidates = [];
    Object.keys(players).forEach(key => {
      mvpCandidates.push(players[key].get());
    });
    return mvpCandidates;
  });

  const royCandidates = await Player.findAll({
    where: {
      playerId: {
        [Op.in]: [201935, 203507, 202331],
      },
    },
  }).then(players => {
    const mvpCandidates = [];
    Object.keys(players).forEach(key => {
      mvpCandidates.push(players[key].get());
    });
    return mvpCandidates;
  });

  topics.freeAgents = freeAgents;
  topics.mvpRace = mvpCandidates;
  return topics;
};

const getTakes = async () => {
  const takes = await Take.findAll({
    include: [User],
  }).then(takes => {
    const stories = [];
    Object.keys(takes).forEach(key => {
      stories.push(takes[key].get());
    });
    return stories;
  });
  return takes;
};

const setTeams = () => {};

//I like to export mehtods only, and not give access to the Models
module.exports = {
  syncAndSeed,
  getSections,
  getHotTopics,
  getTakes,
  setTeams,
  models: {
    Team,
    Coach,
    Player,
    PlayerDetail,
  },
};
