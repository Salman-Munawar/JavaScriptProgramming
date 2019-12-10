
var num = Number(prompt("Enter a Number"));
var decimalPlace = parseInt(prompt("Enter a decimal place"));

document.write("Number: " + num + " , Decimal Place:  " + decimalPlace + "<br/>");
document.write(num.toFixed(decimalPlace)); 

