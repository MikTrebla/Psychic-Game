var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var wins = 0; //wins
    var losses = 0; //losses
    var guesses = 9; //guesses left
    var userGuesses= []; //empty array to push userinput


    //need to create a function(?) to initialize random letter on game start up...
        // var computerGuess() {
        //     Math.floor(Math.random()*letterArray.length)};
    //need to take that function and put it into my if statements to reset letter on win/lose condition?
        //current game is resetting random letter on each key stroke user inputs
    


document.onkeyup = function(event) {
    var key = event.key

    var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)];

    var playerGuess = key;
        userGuesses.push(playerGuess);

    var win = document.getElementById("wins");
        win.innerHTML = wins;

    var lose = document.getElementById("losses");
        lose.innerHTML = losses;

    var guess = document.getElementById("guessLeft");
        guess.innerHTML = guesses;
    
    var guessedLetters = document.getElementById('guesses');
        guessedLetters.innerHTML = userGuesses.join(', ');
    
  

    if (computerGuess === playerGuess) {
        wins++;
        guesses = 10;
        alert('You\'re psychic!');
        userGuesses = [];
        //reset();
    } else if (guesses === 0) {
        losses ++;
        guesses = 10;
        alert('You lose!');
        userGuesses = [];
        //reset();
    } else if (computerGuess !== playerGuess) {
        guesses--;
    }
    console.log(computerGuess);
};


