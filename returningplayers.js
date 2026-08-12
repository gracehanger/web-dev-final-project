//script
async function fetchPlayers() {
    const playersContainer = document.getElementById("players-container");
    const endpoint = '/players';
    try {
        const response = await fetch(endpoint);
        const returningPlayers = await response.json();
        const receivedPlayers = returningPlayers.data;
    } catch(error) {
        console.error(error);
    }
}

receivedPlayers.forEach(user => {
    const returningPlayer = document.getElementById('div');
    returningPlayer.className = 'player-name';
    playersContainer.appendChild(receivedPlayers);
})

fetchPlayers();

