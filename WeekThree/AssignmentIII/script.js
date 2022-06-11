console.log("Assignment three")

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
const scoredEntries = Object.entries(game.scored);
for (const [i, playerName] of scoredEntries) 
{
  console.log(`Goal: ${(+i)+1} ${playerName}`);
}

//2. Use a loop to calculate the average odd and log it to the console
const oddValues = Object.values(game.odds);

var sum = 0;
var average;
for (const odd of oddValues) {
  sum += odd;
  average = sum / oddValues.length;
}
console.log(`The average odd is : ${Math.trunc(average)}`);


//3.Print the 3 odds to the console, but in a nice formatted way,
const oddEntries = Object.entries(game.odds);

for (const [team, oddValue] of oddEntries) {
  const teamName = game[team] ? `victory ${game[team]}` : `draw`;
  console.log(`Odd of ${teamName}: ${oddValue}`);
}


//4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties,
// and the number of goals as the value.

const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++: (scorers[player] = 1);
}
console.log(scorers);