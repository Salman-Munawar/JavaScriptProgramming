function guessNumber() {
    // Get a random integer from 1 to 10 inclusive
    // random value generated 
    var randomNum = Math.floor(Math.random() * 10 + 1); 
    var counter = 0;
    var attempts = 3;
   // var guess = prompt('Guess the number between 1 and 10');

    var guess;    
   
    
    while (guess != randomNum) {
      guess = prompt('Guess the number between 1 and 10');
      counter ++ ;
      
      if(counter > attempts){
        
        document.write("You Lose. Press F5 to play  again");
        break;
      }

      if(guess == randomNum){
        document.write('Congratulations! You are right, You won\nThe Correct Number was ' + randomNum);
        document.write("<p> It Took you " + counter + " Attempts  to get  the Correct Number</p>");      

      }      
    }  
}
  guessNumber();

  // var play = prompt("Are you want to play again");
  //     if(play.toLowerCase() == "yes" || play.toLowerCase() == "y" )
  //     {
  //        guessNumber();
  //     }
  //     else
  //     {
  //        document.write("Thank you for playing with us today");
  //     }


 
  
 
 