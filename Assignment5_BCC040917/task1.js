
var num = Number(prompt("Enter a Number"));

function factorial(n) {    
    return n ? n * factorial(n - 1) : 1;
  }
  
  document.write( factorial(num));