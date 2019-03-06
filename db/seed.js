const { models } = require('./db');
const NBA = require('nba');
console.log('Enriching Data For Each Team');
NBA.stats.commonTeamRoster({ TeamID: 1610612737 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612741 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612738 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612766 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612751 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612743 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612742 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612765 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612739 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612744 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612745 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612754 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612746 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612747 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612763 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612748 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612749 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612750 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612740 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612752 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612760 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612753 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612755 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612756 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612757 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612758 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612759 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612761 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612764 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});

NBA.stats.commonTeamRoster({ TeamID: 1610612762 }).then(async teamRoster => {
  console.log({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    headCoach: teamRoster.coaches[0].coachName,
    headCoachId: teamRoster.coaches[0].coachId,
    players: teamRoster.commonTeamRoster.reduce((acc, curr) => {
      const player = {};
      player.playerId = curr.playerId;
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

  //Create Coaches Data
  models.Coach.create({
    teamId: teamRoster.commonTeamRoster[0].teamID,
    name: teamRoster.coaches[0].coachName,
    coachId: teamRoster.coaches[0].coachId,
  });

  //Create Detailed Player Data
  teamRoster.commonTeamRoster.forEach(person => {
    models.PlayerDetail.create({
      playerId: person.playerId,
      jerseyNumber: person.num,
      height: person.height,
      weight: person.weight,
      college: person.school,
      age: person.age,
    });
  });
});
