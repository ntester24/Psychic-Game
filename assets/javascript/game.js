// Available selections (Array)
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrayLength = letters.length

// Set variables - allow 9 guesses
var wins = 0;
var losses = 0;
var guessesTotal = 9;
var guessesLeft = 9;
var guessesMade = [];
var lettersLeft = null;

// Computer's random selection
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// Then use innerHTML to show user their new number of guesses remaining (0-9)
function guessesLeftNew() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

};

function lettersLeftNew() {
    this.lettersLeft = this.letters[Math.floor(Math.random() * this.letters.length)];

};

function guessesMadeNew() {
    document.querySelector("#guessesMade").innerHTML = "Your Guesses So Far: " + guessedLetters + ", ";

};

// Once the 'Guesses Left' hits 0, we reset everything
var reset = function() {
    totalGuessesAllowed = 9;
    guessesLeft = 9;
    guessesMade = [];

    guessesLeftNew();
    lettersLeftNew();
    guessesMadeNew();

}

guessesLeftNew();
guessesLeftNew();

// Function run on key press
document.onkeyup = function(event) {
    // Determine which key was pressed by user
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase;
    var check = letters.includes(userGuess);

    if (check === false) {
        alert("Oops! That guess doesn't count. Please select a letter a-z.");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessesMade.push(userGuess);
        guessesLeftNew();
        guessesMadeNew();

    };

        if (guessesLeft > 0) {
            if (userGuess == lettersLeft) {
                wins++;
                document.querySelector(".wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();

        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector(".losses").innerHTML = "Losses: " + losses;
            reset();
    }
    return false;
};
};