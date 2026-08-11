//board
let board; //references canvas tag
let boardWidth = 750;
let boardHeight = 400;
let context;


//characters
let charWidth = 50; //width of character image 
let charDeadWidth = 80; //placeholder for dead enderman width
let charHeight = 130; //height of character image
let charDeadHeight = 137; //placeholder for dead enderman height
let charX = 50; 
let charY;
let deadCharY = boardHeight - charDeadHeight;
let charImg;
let char;

//character images 
let character = {
    enderman: {
        name: 'enderman',
        img: "images/still/enderman_still.png",
        dead: "images/jump/enderman_jump2.png",
        charWidth: 50,
        charDeadWidth: 80, 
        charHeight: 130, 
        charDeadHeight: 137   
    },

    villager: {
        name: 'villager',
        img: "images/still/villager_still.png",
        dead: "images/jump/villager_jump.png",
        charWidth: 50,
        charDeadWidth: 60,
        charHeight: 130,
        charDeadHeight: 140
    },

    steve: {
        name: 'steve',
        img: "images/still/steve_still.png",
        dead: "images/jump/steve_jump.png",
        charWidth: 65,
        charDeadWidth: 95,
        charHeight: 130,
        charDeadHeight: 142
        },

    witch: {
        name: 'witch',
        img: "images/still/witch_still.png",
        dead: "images/jump/witch_jump.png",
        charWidth: 60,
        charDeadWidth: 95,
        charHeight: 142,
        charDeadHeight: 142
    },

    skeletor: {
        name: 'skeletor',
        img: "images/still/skeletor_still.png",
        dead: "images/jump/skeletor_jump.png",
        charWidth: 50,
        charDeadWidth: 80, 
        charHeight: 130, 
        charDeadHeight: 137 //placeholder dimensions
    },

    creeper: {
        name: 'creeper',
        img: "images/still/creeper_still.png",
        dead: "images/still/creeper_still.png", //no dead image for creeper
        charWidth: 50,
        charDeadWidth: 80, 
        charHeight: 130, 
        charDeadHeight: 137 //placeholder dimensions
    },

    sheep: {
        name: 'sheep',
        img: "images/still/sheep_still.png",
        dead: "images/still/sheep_still.png", //no dead image for sheep
        charWidth: 50,
        charDeadWidth: 80, 
        charHeight: 130, 
        charDeadHeight: 137 //placeholder dimensions
    },

    cow: {
        name: 'cow',
        img: "images/still/cow_still.png",
        dead: "images/still/cow_still.png", //no dead image for cow
        charWidth: 50,
        charDeadWidth: 80, 
        charHeight: 130, 
        charDeadHeight: 137 //placeholder dimensions
    }

};

//tnt blocks, cacti, bushes
let obstacleArray = [];

let tntWidth = 60;
let tntHeight = 60;
let largeCactusWidth = 90;
let largeCactusHeight = 90;
let miniCactusWidth = 60;
let miniCactusHeight = 60;



let obstaclesX = 700;
//let obstaclesY = boardHeight - cactiHeight; //come back later and try to make it for varying object heights 

let tntImg;
let largeCactusImg;
let miniCactusImg;


//clouds
let cloudArray = [];

let cloud1Width = 100;
let cloud1Height = 50;
let cloud2Width = 100;
let cloud2Height = 100;
let cloud3Width = 150;
let cloud3Height = 90;
let cloud4Width = 300;
let cloud4Height = 120;
let cloud5Width = 150;
let cloud5Height = 50;
let cloudsX = 750;

let cloud1Img;
let cloud2Img;
let cloud3Img;
let cloud4Img;
let cloud5Img;

let cloudVelocityX = -0.5;

//moving
let velocityX = -8; //obstacle moving left 
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

let selectedChar;

//player selection (in progress)

window.addEventListener('DOMContentLoaded', function() {
    const playerSelection = localStorage.getItem('clickedButton');

    if (playerSelection) {
        console.log('The player selected was: ' + playerSelection);
    };

    // making sure the selected character image generates (WIP) not working at the moment
    if (playerSelection === 'enderman-trigger') {
        selectedChar = character.enderman;
    }
    else if (playerSelection === 'villager-trigger') {
        selectedChar = character.villager;
    }
    else if (playerSelection ==='steve-trigger') {
        selectedChar = character.steve;
    }
    else if (playerSelection === 'witch-trigger') {
        selectedChar = character.witch;
    }
    else if (playerSelection === 'skeletor-trigger') {
        selectedChar = character.skeletor;
    }
    else if (playerSelection === 'creeper-trigger') {
        selectedChar = character.witch;
    }
    else if (playerSelection === 'sheep-trigger') {
        selectedChar = character.sheep;
    }
    else if (playerSelection === 'cow-trigger') {
        selectedChar = character.cow;
    }
    console.log(selectedChar.name);
});


setInterval(placeClouds, 3000);


window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board
    
    charY = boardHeight - selectedChar.charHeight; //how to get the character to not go through the bottom border of the canvas?

    char = {
        x : charX, //need to make an dead.x for off centering
        deadX: charX - 15,
        y : boardHeight - selectedChar.charHeight,
        deadY: deadCharY,
        width : selectedChar.charWidth,
        deadWidth: selectedChar.charDeadWidth,
        height : selectedChar.charHeight,
        deadHeight: selectedChar.charDeadHeight
    }

    charImg = new Image(); //new Image object
    charImg.src = selectedChar.img;
    charImg.onload = function() {
        context.drawImage(charImg, char.x, char.y, char.width, char.height); //trying to get the images dimensions to vary based on the character
    };


    tntImg = new Image();
    tntImg.src = "images/obstacles/tnt.png"; 

    largeCactusImg = new Image();
    largeCactusImg.src = "images/obstacles/large_cactus.png"; 

    miniCactusImg = new Image();
    miniCactusImg.src = "images/obstacles/mini_cactus.png"; 

    cloud1Img = new Image();
    cloud1Img.src = "images/clouds/cloud1.png"; 

    cloud2Img = new Image();
    cloud2Img.src = "images/clouds/cloud2.png"; 

    cloud3Img = new Image();
    cloud3Img.src = "images/clouds/cloud3.png"; 

    cloud4Img = new Image();
    cloud4Img.src = "images/clouds/cloud4.png"; 

    cloud5Img = new Image();
    cloud5Img.src = "images/clouds/cloud5.png"; 


    
    requestAnimationFrame(update);
    setInterval(placeObstacle, 1000); 
    document.addEventListener("keydown", moveCharacter); 
    requestAnimationFrame(moveClouds); //need to fix this
     
}

function update() { //used for drawing frames for our game
    requestAnimationFrame(update);

    context.clearRect(0, 0, board.width, board.height);

    //character drawing 
    if (!gameOver) {
        velocityY += gravity;
        char.y = Math.min(char.y + velocityY, charY); //apply gravity to current character
    }

    if (gameOver) {
        context.drawImage(charImg, char.deadX, char.y, char.deadWidth, char.deadHeight); 
    } else {
        context.drawImage(charImg, char.x, char.y, char.width, char.height);
    };

    //obstacle drawing 
    for (let i = 0; i < obstacleArray.length; i++) {
        let obstacle = obstacleArray[i];

        if (!gameOver) {
        obstacle.x += velocityX;
        }
        context.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if (!gameOver && detectCollision(char, obstacle)) {
            gameOver = true;
            charImg.src = selectedChar.dead; 
            }
        }
    
    if (!gameOver) {
        score++;
    }

    context.fillStyle = "maroon";
   
    context.font = "30px minecraft"
    context.fillText(score, 5, 30);

};

  //cloud drawing
function moveClouds() {
    for (let i = 0; i < cloudArray.length; i++) {
        let cloud = cloudArray[i];
        cloud.x += cloudVelocityX;
        context.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    }
   requestAnimationFrame(moveClouds); 
}


function moveCharacter(event) {
    if (gameOver) {
        return;
    }

    if ((event.code == "Space" || event.code == "ArrowUp") && char.y == charY) {
        //jump
        velocityY = -10;

        //duck + crawl function??
    }
}

function placeObstacle() {
if (gameOver) {
        return;
    }

    let obstacle = {
        img: null, //varies based on which obstacle is coming
        x: obstaclesX,
        y: null,
        width: null,
        height: largeCactusHeight //placeholder until I can make it variable 
    }

    let placeObstacleChance = Math.random();

    if (placeObstacleChance > 0.9) {
        obstacle.img = tntImg;
        obstacle.width = tntWidth;
        obstacle.height = tntHeight;
        obstacle.y = boardHeight - tntHeight;
        obstacleArray.push(obstacle);
    }
    else if (placeObstacleChance > 0.7) {
        obstacle.img = largeCactusImg;
        obstacle.width = largeCactusWidth;
        obstacle.height = largeCactusHeight;
        obstacle.y = boardHeight - largeCactusHeight;
        obstacleArray.push(obstacle);
    }

    else if (placeObstacleChance > 0.5) {
        obstacle.img = miniCactusImg;
        obstacle.width = miniCactusWidth;
        obstacle.height = miniCactusHeight;
        obstacle.y = boardHeight - miniCactusHeight;
        obstacleArray.push(obstacle);
    }

    if (obstacleArray.length > 5) {
        obstacleArray.shift();
    }

}

//CLOUD FUNCTION HERE

function placeClouds() {
    let cloud = {
        img: null,
        x: cloudsX,
        y: 50,
        width: null,
       // height: 50
    }

    let placeCloudChance = Math.random();

    if (placeCloudChance > 0.9) {
        cloud.img = cloud1Img;
        cloud.width = cloud1Width;
       // cloud.height = cloud1Height;
       // cloud.y = boardHeight - cloud1Height;
        cloudArray.push(cloud);
    }

    else if (placeCloudChance > 0.8) {
        cloud.img = cloud2Img;
        cloud.width = cloud2Width;
        //cloud.height = cloud2Height;
        cloudArray.push(cloud);
    }

    else if (placeCloudChance > 0.7) {
        cloud.img = cloud3Img;
        cloud.width = cloud3Width;
        cloud.height = cloud3Height;
        cloudArray.push(cloud);
    }

    else if (placeCloudChance > 0.6) {
        cloud.img = cloud4Img;
        cloud.width = cloud4Width;
        cloud.height = cloud4Height;
        cloudArray.push(cloud);
    }

    else if (placeCloudChance > 0.5) {
        cloud.img = cloud5Img;
        cloud.width = cloud5Width;
        cloud.height = cloud5Height;
        cloudArray.push(cloud);
    }

    

    if (cloudArray.length > 50) {
        cloudArray.shift();
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y 
}

//set timeout page and then go to a page where it says you died, show high scores, and then ranks you amongst your high scores