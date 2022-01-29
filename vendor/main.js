const myGuess = Math.floor(Math.random() * 20) + 1;
let guesses = 0;
let guess;

while (guess !==myGuess) {
    guess = parseInt(prompt("What Number Am I Thinking of ?"), 10);
    guesses++;
    if (guess < myGuess) {
        alert("Higher!")
    
    } else if (guess > myGuess) {
            alert("Lower !");

        
    }
}
alert (`YOU WIN! You got it in ${guesses} trys! BUM `);