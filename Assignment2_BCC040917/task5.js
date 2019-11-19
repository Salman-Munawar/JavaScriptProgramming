// random value 
var secretNumber = Math.floor(Math.random() * 10 + 1); 

var guessSecretNumber = Number(prompt("Guess the secret number")); 

if(guessSecretNumber == secretNumber)
{
    document.write("Bingo! Correct answer");
}

else if (guessSecretNumber == (secretNumber + 1))
{
    document.write("Close enough to the correct answer");
}
else {
    document.write("answer is not correct");
}