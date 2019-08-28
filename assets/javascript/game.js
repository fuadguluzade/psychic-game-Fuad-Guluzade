// Declaring variables. Their names are pretty self explaining :) 

var wins = 0;
var loses = 0;
var guessCount = 8;

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var compGuess = letterArray[Math.floor((Math.random() * 26))];
console.log(compGuess); // for debugging purposes  
var userGuess;

var winCountText = document.getElementById("winsCount");
var loseCountText = document.getElementById("loseCount");
var guessesLefttext = document.getElementById("guessesLeft");
var guessesText = document.getElementById("guesses");

// end of declairing variables


beginGame(); // start game


function beginGame() {
    document.onkeyup = function (event) { // when key is pressed
        userGuess = event.key; //get the key 
        if (userGuess === compGuess) { // and first check win case  
            wins++;
            winCountText.textContent = wins;
            restartGame(); 
        }
        else if (userGuess !== compGuess) { // then check not guessed case
            if (!(letterArray.includes(userGuess))) { // if pressed key is not letter
                guessesText.textContent += ""; // do nothing
            } else { // else, 
                guessesText.textContent += event.key + ', '; // do  
                guessCount--;                                // required
                guessesLefttext.textContent = guessCount;    // bla
                if (guessCount == 0) {                       // bla
                    loses++;                                 // bla
                    loseCountText.textContent = loses;       // bla
                    restartGame();
                }
            }
        }
    }
}


function restartGame() {  // this function does variable resetting and begins the game
    compGuess = letterArray[Math.floor((Math.random() * 26))];
    console.log(compGuess);
    guessesText.textContent = "";
    guessCount = 8;
    guessesLefttext.textContent = guessCount;
    beginGame();
}



