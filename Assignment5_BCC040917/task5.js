var amount = parseInt(prompt("Enter amount to withdraw!!"));

function currencyNotes(amount){
    document.write("You will have " + parseInt(amount/100) + " hundred note(s) ");     
    document.write(parseInt((amount % 100) / 50) + " fifty note(s) ");
    document.write(parseInt((((amount % 100) % 50) / 10)) + " ten note(s). ");
}

currencyNotes(amount);