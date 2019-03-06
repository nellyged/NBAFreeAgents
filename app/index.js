const express = require('express');
const Router = express();
const db = require('../db/db');
const path = require('path');
const NBA = require('nba');

module.exports = Router;

Router.use(express.static(path.join(__dirname, '..', 'public')));

// Error handling endware
Router.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

Router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//Express app is client side and will be serving up the data that we need to populate the front end with
Router.get('/api/hottopics', (req, res, next) => {
  db.getHotTopics()
    .then(topics => {
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

Router.get('/api/rosters/:id', (req, res, next) => {
  NBA.stats
    .commonTeamRoster({ TeamID: parseInt(req.params.id) })
    .then(teamRoster => {
      res.send({
        teamId: teamRoster.commonTeamRoster[0].teamID,
        headCoach: teamRoster.coaches[0].coachName,
        headCoachId: teamRoster.coaches[0].coachId,
        players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
          const player = {};
          player.id = curr.playerId;
          player.firstName = curr.player.split(' ')[0];
          player.lastName = curr.player.split(' ')[1];
          player.jerseyNumber = curr.num;
          player.height = curr.height;
          player.weight = curr.weight;
          player.college = curr.school;
          player.DOB = curr.birthDate;
          player.age = curr.age;
          player.yearsActive = curr.exp;
          acc.push(player);
          return acc;
        }, []),
      });
    })
    .catch(next);
});

Router.post('/api/rosters/:id', (req, res, next) => {
  NBA.stats
    .commonTeamRoster({ TeamID: parseInt(req.params.id) })
    .then(teamRoster => {
      //Save data for each person on the roster and the coach details
      teamRoster.commonTeamRoster.forEach(person => {
        db.models.PlayerDetail.create({
          playerId: person.playerId,
          jerseyNumber: person.num,
          height: person.height,
          weight: person.weight,
          college: person.school,
          age: person.age,
        });
      });

      db.models.Coach.create({
        teamId: teamRoster.commonTeamRoster[0].teamID,
        name: teamRoster.coaches[0].coachName,
        coachId: teamRoster.coaches[0].coachId,
      });

      res.send({ message: 'Created Player Detail & Coach' });
    })
    .catch(next);
});

Router.get('/api/playerDetail/:id', (req, res, next) => {
  db.models.PlayerDetail.findOne({
    where: {
      playerId: parseInt(req.params.id),
    },
  })
    .then(player => {
      res.send(player);
    })
    .catch(next);
});

Router.put('/api/playerStats/:id', (req, res, next) => {
  NBA.stats.playerInfo({ PlayerID: parseInt(req.params.id) }).then(console.log);
  NBA.stats
    .playerInfo({ PlayerID: parseInt(req.params.id) })
    .then(async player => {
      const [
        numberOfAffectedRows,
        affectedRows,
      ] = await db.models.Player.update(
        {
          position: player.commonPlayerInfo[0].position,
        },
        {
          where: { playerId: parseInt(req.params.id) },
          returning: true,
        }
      );

      console.log(`Returned Rows ${numberOfAffectedRows}`);
      console.log(`Returned Rows ${affectedRows}`);

      if (!numberOfAffectedRows) {
        //The player was not present so we create it
        db.models.Player.create({
          firstName: player.commonPlayerInfo[0].firstName,
          lastName: player.commonPlayerInfo[0].lastName,
          playerId: player.commonPlayerInfo[0].personId,
          teamId: player.commonPlayerInfo[0].teamId,
          position: player.commonPlayerInfo[0].position,
        });
      }

      res.send({
        playerDetails: player.commonPlayerInfo[0],
        playerStats: player.playerHeadlineStats[0],
        message: 'Player Details Saved',
      });
    })
    .catch(next);
});

Router.get('/api/playerStats/:id', (req, res, next) => {
  NBA.stats.playerInfo({ PlayerID: parseInt(req.params.id) }).then(console.log);
  NBA.stats
    .playerInfo({ PlayerID: parseInt(req.params.id) })
    .then(player => {
      res.send({
        playerDetails: player.commonPlayerInfo[0],
        playerStats: player.playerHeadlineStats[0],
      });
    })
    .catch(next);
});

Router.get('/api/sections', (req, res, next) => {
  db.getSections()
    .then(sections => {
      res.send(sections);
    })
    .catch(next);
});
