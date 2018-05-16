// pick random letter for guessing game to start
    var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var wins = 0; //wins
    var losses = 0; //losses
    var guesses = 10; //guesses left
    var userGuesses= []; //empty array to push userinput


// Your guesses so far : display letters input from user
    // if (input)
        // add to new array guesses 
        // display : input + ', '


// Losses  l=0; l++ on each loss
    // if (guesses left === 0) 
        // then l++
        //refresh game

//Wins  w =0; w++ on each win
    // if (input === randomLetter && guesses left >0)
        //then w++
        //refresh game



//Guesses left  g = 10; g-- on each attempt
    // if (input !== randomLetter)
        // then g--
       //if g = 0
            //then you lose
            // losses l++

document.onkeyup = function(event) {
    var key = event.key

    var playerGuess = key;
        userGuesses.push(playerGuess);

    var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)];

    

    if (computerGuess === playerGuess) {
        wins++;
        guesses = 10;
        userGuesses = [];
        alert('You\'re psychic!');
    } else if (guesses === 0) {
        losses ++;
        guesses = 10;
        userGuesses = [];
        alert('You lose!');
    } else if (computerGuess !== playerGuess) {
        guesses--;
    
    }


     win = document.getElementById("wins");
     win.innerHTML = wins;

     lose= document.getElementById("losses");
     lose.innerHTML = losses;

     guess = document.getElementById("guessLeft");
     guess.innerHTML = guesses;
    
     guessedLetters = document.getElementById('guesses');
     guessedLetters.innerHTML = userGuesses.join(', ');
};

