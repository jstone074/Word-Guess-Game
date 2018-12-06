//start with zero wins and loses
var wins = 0;
var loses = 0;
var foundInWord;
var currentWord;
var gameOver;
var lettersUsed = document.getElementById("guessed-letters");
var selectedWord = document.getElementById("selected-word");
var guessRemaining = document.getElementById("guesses-remaining");
var displayedWord = [];
var hiddenWord = [];
var displayedWordStr;
var hiddenWordStr;

//Sets the max guesses to 10
var maxGuessAttempts;
var lettersGuessed = [];

//Valid input
var validKeys = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Wordlist to pick from
var wordList = ["harry", "ron", "hermione", "broom", "wand", "quidditch", "dumbledore", "snape", "muggle", "hagrid", "snitch"]

//Creating game with the words 
function createGame() {

    //Reset varriables when a new game starts
    gameOver = false;
    maxGuessAttempts = 10;
    lettersGuessed = [];
    displayedWord = [];
    hiddenWord = [];
    document.getElementById("myImg").src = "";
    guessRemaining.textContent = ("Guesses Remaining: " + maxGuessAttempts + " ");
    lettersUsed.textContent = ("Letters Guessed: " + lettersGuessed)
    selectedWord.textContent = hiddenWord;

    //picking a randomg word to start the game
    currentWord = wordList[Math.floor(Math.random() * wordList.length)];

    //Console Log to see how the word is writting out
    console.log(currentWord);
    // console.log(currentWord.length);
    for (var x = 0; x < currentWord.length; x++) {

        //pushing to displayed word array 
        displayedWord.push(currentWord[x]);

        //using another var to replace the characters with blank spaces
        hiddenWord.push("_");

        //console log to make sure that this function is working
        // console.log(currentWord[x]);
    }


    //Using the splice function to replace the words in displayed word with the blank values
    // displayedWord.splice(0, displayedWord.length, hiddenWord);



    //Using join function to remove commas
    selectedWord.textContent = hiddenWord.join(" ");
    // console.log(hiddenWord);
    // console.log(displayedWord);
}

function setImage() {
    if (currentWord === "snitch") {
        document.getElementById("myImg").src = "assets/images/snitch.png";
    } if (currentWord === "harry") {
        document.getElementById("myImg").src = "assets/images/harry.jpg";
    } if (currentWord === "ron") {
        document.getElementById("myImg").src = "assets/images/ron.jpeg";
    } if (currentWord === "hermione") {
        document.getElementById("myImg").src = "assets/images/hermione.jpg";
    } if (currentWord === "dumbledore") {
        document.getElementById("myImg").src = "assets/images/dumbledore.jpg";
    } if (currentWord === "quidditch") {
        document.getElementById("myImg").src = "assets/images/quidditch.jpg";
    } if (currentWord === "wand") {
        document.getElementById("myImg").src = "assets/images/wand.jpg";
    } if (currentWord === "muggle") {
        document.getElementById("myImg").src = "assets/images/muggle.jpeg";
    } if (currentWord === "snape") {
        document.getElementById("myImg").src = "assets/images/snape.jpg";
    } if (currentWord === "hagrid") {
        document.getElementById("myImg").src = "assets/images/hagrid.jpg";
    }if (currentWord === "broom") {
        document.getElementById("myImg").src = "assets/images/broom.jpg";
    }
}

function checkUserGuess(checkedGuess) {

    foundInWord = false;
    for (var j = 0; j < currentWord.length; j++) {
        if (currentWord[j] === checkedGuess) {
            displayedWord.push(checkedGuess);
            // selectedWord.textContent = displayedWord;
            hiddenWord.splice(j, 1, checkedGuess);
            selectedWord.textContent = hiddenWord.join(" ");
            // console.log(hiddenWord);
            foundInWord = true;
        }
    }
}


document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(gameOver);
    //if game is not over continuing to guess letters
    if (gameOver === false) {

        //Verifying that the keys pressed are valid
        if (validKeys.includes(userGuess)) {

            //Verifying Letters guessed
            if (lettersGuessed.indexOf(userGuess) === -1) {
                lettersGuessed.push(userGuess);
                lettersUsed.textContent = ("Letters Guessed: " + lettersGuessed);
                checkUserGuess(userGuess);
                // console.log(userGuess);
                // console.log(foundInWord);
            } else {
                console.log("not a valid guess");

            }

        } if (foundInWord === false) {
            (maxGuessAttempts--);
            guessRemaining.textContent = ("Guesses Remaining: " + maxGuessAttempts);
            // console.log(maxGuessAttempts);                    
        }


        //Using for debugging to verify valid keys
    } if (maxGuessAttempts === 0) {
        gameOver = true;

        lettersUsed.textContent = "Better";
        selectedWord.textContent = "Luck";
        guessRemaining.textContent = "Next Time";
        document.getElementById("myImg").src = "assets/images/voldermort.jpg";


    } if (hiddenWord.includes("_") === false) {
        lettersUsed.textContent = "CONGRATS!!"
        selectedWord.textContent = "You guessed the correct word " + currentWord;
        guessRemaining.textContent = "You WIN!!";
        setImage();
    }
}
