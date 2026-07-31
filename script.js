//board
let board; //references canvas tag
let boardWidth = 750;
let boardHeight = 400;
let context;

//characters
let charWidth = 50; //width of character image 
let charHeight = 130; //height of character image
let charX = 50; //starting position of character
let charY = boardHeight - charHeight;
let charImg;

let char = {
    x : charX,
    y : charY,
    width : charWidth,
    height : charHeight
}

let enderman = {
    img: "images/still/enderman_still.png",
    dead: "images/jump/enderman_jump2.png"
}

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
let cloudsX = 700;

let cloud1Img;
let cloud2Img;
let cloud3Img;
let cloud4Img;
let cloud5Img;

let cloudVelocityX = -1;

//moving
let velocityX = -8; //obstacle moving left 
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;


let selectedChar = enderman;





window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial character
    //context.fillStyle = "green";
    //context.fillRect(char.x, char.y, char.width, char.height);

    charImg = new Image(); //new Image object
    charImg.src = selectedChar.img;
    charImg.onload = function() {
        context.drawImage(charImg, char.x, char.y, char.width, char.height);
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
    setInterval(placeClouds, 3000);
    document.addEventListener("keydown", moveCharacter); 
    requestAnimationFrame(moveClouds);
    
}

function update() { //used for drawing frames for our game
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }

    context.clearRect(0, 0, board.width, board.height);

    //character drawing 
    velocityY += gravity;
    char.y = Math.min(char.y + velocityY, charY); //apply gravity to current character
    context.drawImage(charImg, char.x, char.y, char.width, char.height); //every frame, the char will be drawn over and over again

    //obstacle drawing 
    for (let i = 0; i < obstacleArray.length; i++) {
        let obstacle = obstacleArray[i];
        obstacle.x += velocityX;
        context.drawImage(obstacle.img, obstacle.x, obstacle.y, obstacle.width, obstacle.height);

        if (detectCollision(char, obstacle)) {
            gameOver = true;
            charImg.src = selectedChar.dead; //how to remove the image underneath?? 
            charImg.onload = function() {
                context.drawImage(charImg, char.x, char.y, char.width, char.height) 
            }
        }
    }

    context.fillStyle = "maroon";
    score++;
    context.font = "30px minecraft"
    context.fillText(score, 5, 30);

}

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