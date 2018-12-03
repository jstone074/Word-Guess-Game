//start with zero wins and loses
var wins = 0;
var loses = 0;

//Sets the max guesses to 5
var maxGuessAttempts = 5;



//Valid input
var validKeys = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];


//Creating game with the words to guess from
function game () {
    this.wordList =[

                        "harry",
                        "ron",
                        "hermione",
                        "broom",
                        "wand",
                        "quidditch",
                        "dumbledore",
                        "snape",
                        "muggle",
                        "hagrid",
                        "snitch"
                    ]
     this.currentWord = this.wordList[Math.floor(Math.random() * this.wordList.length)];               
     this.guessedLetters=[];
     this.errors = 0;
     this.visibleLetters = [];
     this.end = false;
     for (var i = 0; i < this.word.length; i++){
         this.visibleLetters[i] = (false);
     }

}

document.onkeyup = function(event){
    var userGuess = event;
console.log(event)
}

//     if(!game.end){
//         if(validKeys.includes(userGuess) && !game.guessedLetters.includes(userGuess))
//     }
// }