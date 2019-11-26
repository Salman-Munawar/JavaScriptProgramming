var celsiusTemp, fahrenheitTemp;
celsiusTemp = 25;
fahrenheitTemp = 70;
var celsisusToFahrenheit = (celsiusTemp * 9 / 5) + 32; 
var fahrenheitToCelsius = (fahrenheitTemp - 32) * 5 / 9 ;
 
document.write(celsiusTemp + "&#8451 is " + celsisusToFahrenheit + "&#8457" + "<br>");
document.write(fahrenheitTemp + "&#8457 is " + fahrenheitToCelsius + "&#8451" );