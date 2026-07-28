//board
let board; //references canvas tag
let boardWidth = 750;
let boardHeight = 400;
let context;

//characters
let charWidth = 40; //width of character image 
let charHeight = 94; //height of character image
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
    img: "images/images.png"
}

//tnt blocks, cacti, bushes
let obstacleArray = [];

let tntWidth = 34;
let tntHeight = 34;
let cactiWidth = 34;
let cactiHeight = 78
let bushWidth = 34;
let bushHeight = 50;



let obstaclesX = 700;
//let obstaclesY = boardHeight - cactiHeight; //come back later and try to make it for varying object heights 

let tntImg;
let cactiImg;
let bushImg;


//clouds
let cloudArray = [];

let cloud1Width = 200;
let cloudsX = 700;

let cloud1Img;

let cloudVelocityX = -0.1;

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
    tntImg.src = "images/images.png"; //placeholders

    cactiImg = new Image();
    cactiImg.src = "images/images.png"; //placeholders

    bushImg = new Image();
    bushImg.src = "images/images.png"; //placeholders

    cloud1Img = new Image();
    cloud1Img.src = "images/images.png"; //placeholders
    
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
            charImg.src = "images/images.png" //placeholder 
            charImg.onload = function() {
                context.drawings(charImg, char.x, char.y, char.width, char.height)
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
        height: cactiHeight //placeholder until I can make it variable 
    }

    let placeObstacleChance = Math.random();

    if (placeObstacleChance > 0.9) {
        obstacle.img = tntImg;
        obstacle.width = tntWidth;
        obstacle.y = boardHeight - tntHeight;
        obstacleArray.push(obstacle);
    }
    else if (placeObstacleChance > 0.7) {
        obstacle.img = cactiImg;
        obstacle.width = cactiWidth;
        obstacle.y = boardHeight - cactiHeight;
        obstacleArray.push(obstacle);
    }

    else if (placeObstacleChance > 0.5) {
        obstacle.img = bushImg;
        obstacle.width = bushWidth;
        obstacle.y = boardHeight - bushWidth;
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
        y: (boardHeight - 50),
        width: null,
        height: 50
    }

    cloud.img = cloud1Img;
    cloud.width = cloud1Width;
    cloud.y = 50, 
    cloudArray.push(cloud);

     if (cloudArray.length > 10) {
        cloudArray.shift();
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y 
}