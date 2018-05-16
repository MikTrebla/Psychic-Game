// pick random letter for guessing game to start
    var letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wins = 0; //wins
    var losses = 0; //losses
    var guesses = 10; //guesses left
    // var randomLetter = letterArray[Math.floor(Math.random()*letterAray.length)];
    var userGuesses= [];


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

    var userGuess = document.getElementById('userGuesses');
    userGuess.innerHTML = event.key;
    var player = userGuess.textContent;

    var computerGuess = letterArray[Math.floor(Math.random()*letterArray.length)];


    if (computerGuess === player) {
        wins++;
        guesses = 10;
        alert('You\'re psychic!');
    } else if (guesses === 0) {
        losses ++;
        guesses = 10;
        alert('You lose!');
    } else if (computerGuess !== player) {
        guesses--;
    
    }


     win = document.getElementById("wins");
     win.innerHTML = wins;
     lose= document.getElementById("losses");
     lose.innerHTML = losses;
     guess = document.getElementById("guesses");
     guess.innerHTML = guesses;
     
};

console.log(wins)
console.log(losses)
console.log(guesses);
console.log(userGuesses);