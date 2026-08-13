//script
"use strict"



async function fetchPlayers() {
    const endpoint = '/players';
    try {
        const response = await fetch(endpoint);
        const playersContainer = document.getElementById("players-container");
        const returningPlayers = await response.json();
        console.log(returningPlayers);
        const receivedPlayers = returningPlayers;

    
    receivedPlayers.forEach(player => { //what is this param supposed to be?
        const returningPlayer = document.createElement('div');
        returningPlayer.className = 'player-name';
        returningPlayer.textContent = `Name: ${player.name} _____ Score: ${player.score}` 
        playersContainer.appendChild(returningPlayer);
});

    } catch(error) {
        console.error(error);
    }


};

fetchPlayers();

//it prints the names to the screen, but how do I get the updated scores/names to print?