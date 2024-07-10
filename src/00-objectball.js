function gameObject() {
  let object = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          playerName: "Alan_Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_Dunks: 1,
        },
        {
          playerName: "Reggie_Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_Dunks: 7,
        },
        {
          playerName: "Brook_Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_Dunks: 15,
        },
        {
          playerName: "Mason_Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_Dunks: 5,
        },
        {
          playerName: "Jason_Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_Dunks: 1,
        },
      ],
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          playerName: "Jeff_Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_Dunks: 2,
        },

        {
          playerName: "Bismak_Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_Dunks: 10,
        },

        {
          playerName: "DeSgna_Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_Dunks: 5,
        },

        {
          playerName: "Ben_Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_Dunks: 0,
        },

        {
          playerName: "Brendan_Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_Dunks: 12,
        },
      ],
    },
  };
  return object;
}
console.log(gameObject());

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());

// ! here we take the name of the players in the object objectTeam
const players = () => [
  ...gameObject()["home"]["players"],
  ...gameObject()["away"]["players"],
];

//Here we found a player by his name
const getPlayerByName = (name) => { // More descriptive name
    const allPlayers = players(); // Call players() once
    return allPlayers.find((player) => player.playerName === name);
};

//This function found the point of the player by his name
const numPointsScored = (name) => {
    const foundPlayer = getPlayerByName(name);
    if (foundPlayer) {
      return foundPlayer.points;
    } else {
      return 0; // Or handle the case where the player is not found (e.g., return undefined)
    }
  };
 console.log(numPointsScored("DeSgna_Diop"));

  const playersStat = (name) => {
    const player = getPlayerByName(name);
    return player
  }

  console.log(playersStat("DeSgna_Diop"))
 //This function return the size of the player when we enter his name
 const shoeSize = (namePlayer) => {
   const foundSizePlayer = getPlayerByName(namePlayer);
   if (foundSizePlayer) {
    return foundSizePlayer.shoe;
   }else{
    return 0;
   }
 }

console.log(shoeSize("DeSgna_Diop"));

// ! The function bellow return the number of the player when we enter his name
const playerNumbers = () => {
  let number = [];
  let numbersPlayer = [...gameObject()["away"]["players"], ...gameObject()["home"]["players"]];
  numbersPlayer.find((number) => number.number);
    return number.push(numbersPlayer);
}
console.log(playerNumbers());


 // ! this function take the all teamName in the object objectTeam
const teamNames = () => {
 const teamName = [[...gameObject()["away"]["teamName"]],[...gameObject()["home"]["teamName"]]];
  return teamName;
};

console.log(teamNames());
// ! this function return the color our teams
const teamColors = () => {
  let colorTeam = [[...gameObject()["away"]["colors"]], [...gameObject()["home"]["colors"]]];
  return colorTeam
}
console.log( 'The colors for the teams is: ', teamColors());