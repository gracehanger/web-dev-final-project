const express = require('express');  //importing the express library 
const fs = require('fs'); //allows us to read and write files 
const path = require('path'); //save file path
const app = express(); 

//control + C closes the server

const cors = require('cors');


const corsOptions = {
  origin: 'http://127.0.0.1:5500'
};

app.use("/", express.static("./public"));
app.use(cors(corsOptions));
app.use(express.json());

const PLAYERS_FILE = path.join(__dirname, 'players.json'); //points the code to the players.json file 

function readPlayers() {
  const data = fs.readFileSync(PLAYERS_FILE, 'utf8'); //in the folder fs, use method readFileSync, reads the data in the players.json file
  return JSON.parse(data);
};

function writePlayers(players) {
  fs.writeFileSync(PLAYERS_FILE, JSON.stringify(players, null, 2));  //allows you to save the new player permanently 
}

//going into players.json and reading what's in there
app.get('/players', (req, res) => {     
  const players = readPlayers();
  res.json(players);
});

//creating/adding a new player
app.post('/players', (req, res) => {      
  const { storedName, character } = req.body;
  const players = readPlayers();
  const newPlayer = { name: storedName, character: character, score: 0 }; //need to send a combined name and character, score is automatically zero
  players.push(newPlayer);
  writePlayers(players);
  res.json(newPlayer);
});

//reading and updating a player
app.post('/players/update', (req, res) => {    //when the code goes to this route, it will update the high score 
  const { name, newScore } = req.body;         //need some code in the front end to trigger this route when the game ends 
  const players = readPlayers();
  const player = players.find(player => player.name === name);
  if (newScore > player.score) {
    player.score = newScore;
    writePlayers(players);

  }
  res.json(player);
});

async function fetchPlayers() {
    const endpoint = '/players';
    try {
        const response = await fetch(endpoint);
        const returningPlayers = await response.json();
        const receivedPlayers = returningPlayers.name; //accessing the name in the player object in json
        return receivedPlayers;
    } catch(error) {
        console.error(error);
    }
};

app.use("/players", async (request, response) => {
    response.status(200).json({
        status: 200,
        data: await fetchPlayers(),
    });
});

app.listen(3000, () => {
  console.log('Server Running');
  console.log('Navigate to http://localhost:3000 in your browser');
});

