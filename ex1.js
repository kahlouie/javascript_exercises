var word = ["E", "N", "T", "E", "R"];
var guess = ["_", "_", "_", "_", "_"];
var correctLetters = 0;

var guessLetter = function(letter) {
    for (var i = 0; i < word.length; i++) {
        letter = letter.toUpperCase();
        if (word[i] === letter) {
            guess[i] = letter;
            console.log("Congratulations, you found a '" + letter + "'! So far this is what the word looks like: " + guess.join(" ") + ".");
            correctLetters++;
            continue;
        } else if (i === word.length - 1) {
            console.log("You guessed a '" + letter + "'. There are none. Try again.");
        } else {
            continue;
        }
    }
};

guessLetter("e");