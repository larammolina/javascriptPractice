const team = {
  _players:[{fristName: 'Pablo',
        lastName: 'Sanchez',
        age: 11}, {
        fristName: 'Juan',
        lastName: 'Valdez',
        age: 18}, { 
        fristName: 'Emiliano',
        lastName: 'Rodriguez',
        age: 30}],
  _games: [{
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 27
        }],
  get players() {
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
    this.players.push(player);
  },
  addGame(opponentName, teamPoints, opponentPoints){
    const game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
      };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
console.log(team.players);