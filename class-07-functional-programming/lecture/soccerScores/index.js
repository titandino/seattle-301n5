'use strict'

const inputString = `Lions 3, Snakes 3\nTarantulas 1, Aardvarks 0\nLions 1, Aardvarks 1\nTarantulas 3, Snakes 1\nLions 4, Grouches 0`

// TODO: turn the input string into an array of game objects that look like
// {
//   teamA: 'Lions',
//   scoreA: 3,
//   teamB: 'Grouches',
//   scoreB: 3
// }
// hint: string.split() returns an array of strings

const parseGames = function(input) {
  var gameObjects = [];
  input.split('\n').forEach(function(gameString) {
    gameObjects.push(gameObj(gameString.replace(',', '')));
  });
  return gameObjects;
}


// once you have broken the string into individual values,
// use a helper function that takes the values from the input string and returns a game object

const gameObj = function(input) {
  var details = input.split(' ');
  return {
    teamA: details[0],
    scoreA: parseInt(details[1]),
    teamB: details[2],
    scoreB: parseInt(details[3])
  }
}

console.log(parseGames(inputString));
