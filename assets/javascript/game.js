// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i" ,"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

    //this will add the user guess to the array guessesSoFar
    guesses.push(userGuess);


    // Randomly chooses a choice from the options array. This is what the computer is "thinking of"
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    //game rules 
    if(userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z"){
        if(userGuess === computerGuess){
            wins++;
            guesses = [];
            guessesLeft = 9;
        }else{
            guessesLeft--;
            if(guessesLeft < 1){
                losses++;
                guesses = [];
                guessesLeft = 9;
            }
        }
    }else{
        alert("Stop being an idiot!");
        guesses.splice(guesses.length -1,1);
    }

    //write the wins, losses, guesses left and what has been guessed to teh page for teh user to view
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("guesses").innerHTML = guesses;



};