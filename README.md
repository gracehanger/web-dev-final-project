This is my capstone project for the 2026 January Cohort of the Code:You Web Development Pathway. I decided to create something that used my previous illustration skills combined with my newly learned web development skills into making a fun, interactive minecraft-themed 2D jumping game. While this project meets the requirements, there are a few functionalities I intend to change in the future to make it more seamless, noted at the bottom of this page.

WARNING: There are sound effects in the "Select Your Character" page. 

### Instructions
1. Clone the project using Git. 
2. From the first screen, select new player, type in your name and enter it. If your name contains any numbers or special characters, it will not allow you to continue until you have typed in a name with letters-only.
3. Select your character from the 8 icons available. Each icon has a fun sound effect for when you hover over it. *See ***functionality notes*** at bottom.*
4. Once you select your character, the game will immediately start. Use the spacebar to jump over the obstacles. Once you collide with an obstacle, the game ends and your high score will be saved attached to your name. 

### Required Dependencies
1. Node.js v24.14.0

### Fonts and Illustrations

**The Illustrations**

* I used the Procreate app on my iPad with my Apple Pencil to create the illustrations. I drew 8 minecraft characters by hand in an intentional "doodle-style" to emulate a kid's game. I organized the different illustrations (faces, still images, dead images) into proper folders with consistent file naming and formats. 

**The Typography**
* I downloaded the pixelated Minecraft font and saved the .ttf folder in the fonts folder for the project so that when it's cloned, other users can see the Minecraft font in their web browser.

### Project Requirements

**1. Validate user input and either prevent the invalid input or inform the user about it (in all cases prevent invalid input from being stored or saved).**
* The user is prompted to enter their name when they create a new player. An error message will pop up if the user types a name that contains any special characters or numbers. The user won't be allowed to proceed to the next page until they type a name that meets the requirements. The valid name will be stored locally and displayed on the next page. The invalid name will not be stored or saved.

**2. Analyze data that is stored in arrays, objects, or maps and display information about it in your app.**
* **Objects:** Information for each minecraft character is stored in a large nested object called ```character```. This information includes relative paths to character illustrations, character heights, and character widths. When the specific character is selected, the variable ```selectedChar``` is assigned to the specific character using dot notation (example: ```selectedChar = character.enderman```) assigns the selected character to the enderman. After this, an object ```char``` is made that has variable specs in reference to the selected Character. This allows for a simpler object that can flexibly change depending on which character is selected. This data is displayed on the app in the form of an image and proper scaling dimensions via accessing and analyzing the data stored in the objects. 
* **Arrays:** The clouds and obstacles are stored in arrays, ```cloudArray``` and ```obstacleArray```, respectively. These clouds and obstacles are generated onto the game randomly based on using a ```Math.random()``` generator. The generator picks a random number and selects an obstacle and/or cloud based on the chance it would be picked. Once it's selected, it will appear on the canvas. 50% of the time, obstacles and/or clouds will not be placed at all. The function for randomly selecting an obstacle is called once per second. The clouds are generated every 3 seconds and move at a much slower pace. 

**3. Persist important data to the user to local storage and make the stored data accessible in your app.**
* **Name Greeting:** When the user types in a name that is valid, it is stored to local Storage and then is received on the "Choose Your Character" page using ```.getItem```. The name appears in a greeting (example: "Choose Your Character, Grace") using the ```.textContent``` attribute to modify the text displayed. 
* **Player Selection:** When the user clicks on the character icon in the "Choose Your Character" page, an ID  ```clickedButton``` is made and saved to local Storage and sent to the game page. This is then accessed under the const ```playerSelection``` when ```localStorage.getItem``` command is used to retrieve which character was selected. From here, the image & character data for the selected character will be what is displayed on the game screen (i.e. enderman, witch, sheep, etc.).

**4. Create a node.js web server using Express.js.**
* Node.js server was created using Express. This server allows for player name and high scores to be saved to the server. 

**5. Create an API that implements HTTP requests for GET and POST. Data can be stored in a JSON file on the back-end.**
* Player name and scores are stored in a JSON file on the back-end

### Other Requirements

**1. Have at least two pages/routes:**
* There are 4 different pages in this project: the enter your name page, choose your character, returning player, and the game page. Each of them are routed to each other as the user proceeds through the game.

**2. Use a media query to adjust the screen size**
* I used media queries in CSS to adjust the screen size on the Enter Your Name and Choose Your Character pages that adjusts the grid layout when the screen size is a mobile screen.


### Functionality Notes:
* The sound effects currently don't begin until the user interacts with the page. I need to change it to have the name and character selection be on the same page, with the character selection hidden until a valid name is entered. That way, the user has interacted with the screen and the sound effects and animations will work normally.  

* Currently, the name and scores do not post to the JSON file. I'm still trying to iron that part out. 







