//trying to get usernames to be submitted and error message if it's already been taken
document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('savedName');
    const chooseCharacterMessage = document.getElementById('chooseCharacterMessage');
    
    if (storedName) {
        chooseCharacterMessage.textContent = `CHOOSE YOUR CHARACTER, ${storedName}:`;
    };


});

//attempt at getting the name to store to the api, doesn't let you click on a player, it says storedName isn't 
//identified but it is above?
// fetch('http://localhost:3000/players', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({name: storedName})
// })
// .then(response => response.json())
// .then(data => console.log('success: ', data))
// .catch(error => console.error('error: ', error));

//^ the above prevents the buttons for characters to work

//Sound Effects
//enderman
const hoverElementEnderman = document.getElementById('enderman-trigger');
const triggerSoundEnderman = document.getElementById('enderman-noise');

hoverElementEnderman.addEventListener('mouseenter', () => {
    hoverElementEnderman.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundEnderman.currentTime = 0;
    triggerSoundEnderman.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementEnderman.addEventListener('mouseleave', () => {
    hoverElementEnderman.style.transform = 'scale(1.0)';
    triggerSoundEnderman.pause();
});


//villager
const hoverElementVillager = document.getElementById('villager-trigger');
const triggerSoundVillager = document.getElementById('villager-noise');

hoverElementVillager.addEventListener('mouseenter', () => {
    hoverElementVillager.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundVillager.currentTime = 0;
    triggerSoundVillager.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementVillager.addEventListener('mouseleave', () => {
    hoverElementVillager.style.transform = 'scale(1.0)';
    triggerSoundVillager.pause();
});

//steve
const hoverElementSteve = document.getElementById('steve-trigger');
const triggerSoundSteve = document.getElementById('steve-noise');

hoverElementSteve.addEventListener('mouseenter', () => {
    hoverElementSteve.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundSteve.currentTime = 0;
    triggerSoundSteve.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementSteve.addEventListener('mouseleave', () => {
    hoverElementSteve.style.transform = 'scale(1.0)';
    triggerSoundSteve.pause();
});

//witch
const hoverElementWitch = document.getElementById('witch-trigger');
const triggerSoundWitch = document.getElementById('witch-noise');

hoverElementWitch.addEventListener('mouseenter', () => {
    hoverElementWitch.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundWitch.currentTime = 0;
    triggerSoundWitch.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementWitch.addEventListener('mouseleave', () => {
    hoverElementWitch.style.transform = 'scale(1.0)';
    triggerSoundWitch.pause();
});

//skeletor
const hoverElementSkeletor = document.getElementById('skeletor-trigger');
const triggerSoundSkeletor = document.getElementById('skeletor-noise');

hoverElementSkeletor.addEventListener('mouseenter', () => {
    hoverElementSkeletor.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundSkeletor.currentTime = 0;
    triggerSoundSkeletor.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementSkeletor.addEventListener('mouseleave', () => {
    hoverElementSkeletor.style.transform = 'scale(1.0)';
    triggerSoundSkeletor.pause();
});

//creeper
const hoverElementCreeper = document.getElementById('creeper-trigger');
const triggerSoundCreeper = document.getElementById('creeper-noise');

hoverElementCreeper.addEventListener('mouseenter', () => {
    hoverElementCreeper.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundCreeper.currentTime = 0;
    triggerSoundCreeper.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementCreeper.addEventListener('mouseleave', () => {
    hoverElementCreeper.style.transform = 'scale(1.0)';
    triggerSoundCreeper.pause();
});

//sheep
const hoverElementSheep = document.getElementById('sheep-trigger');
const triggerSoundSheep = document.getElementById('sheep-noise');

hoverElementSheep.addEventListener('mouseenter', () => {
    hoverElementSheep.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundSheep.currentTime = 0;
    triggerSoundSheep.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementSheep.addEventListener('mouseleave', () => {
    hoverElementSheep.style.transform = 'scale(1.0)';
    triggerSoundSheep.pause();
});

//cow
const hoverElementCow = document.getElementById('cow-trigger');
const triggerSoundCow = document.getElementById('cow-noise');

hoverElementCow.addEventListener('mouseenter', () => {
    hoverElementCow.style.transform = 'scale(1.1) rotate(10deg)';
    triggerSoundCow.currentTime = 0;
    triggerSoundCow.play().catch(error => {
        console.log("Playback prevented until user interacts with screen")
    });
});

hoverElementCow.addEventListener('mouseleave', () => {
    hoverElementCow.style.transform = 'scale(1.0)';
    triggerSoundCow.pause();
});


//player selection
const endermanButton = document.getElementById('enderman-trigger');
endermanButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'enderman-trigger');
    window.location.href = './game.html';
});

const villagerButton = document.getElementById('villager-trigger');
villagerButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'villager-trigger');
    window.location.href = './game.html';
});

const steveButton = document.getElementById('steve-trigger');
steveButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'steve-trigger');
    window.location.href = './game.html';
});

const witchButton = document.getElementById('witch-trigger');
witchButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'witch-trigger');
    window.location.href = './game.html';
});

const skeletorButton = document.getElementById('skeletor-trigger');
skeletorButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'skeletor-trigger');
    window.location.href = './game.html';
});

const creeperButton = document.getElementById('creeper-trigger');
creeperButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'creeper-trigger');
    window.location.href = './game.html';
});

const sheepButton = document.getElementById('sheep-trigger');
sheepButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'sheep-trigger');
    window.location.href = './game.html';
});

const cowButton = document.getElementById('cow-trigger');
cowButton.addEventListener('click', function() {
    localStorage.setItem('clickedButton', 'cow-trigger');
    window.location.href = './game.html';
});
