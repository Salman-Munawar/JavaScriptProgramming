var date = new Date();
var date2 = new Date(0);
document.write("Current Date: " + date + "<br/>"); 

 
var currentMonth = date.getMonth();
var milliSeconds = date.getTime();
document.write("Elapsed milliSeconds since January 1, 1970: " + milliSeconds + "<br>");


var minutes = milliSeconds * 60 ;
document.write("Elapsed Minutes since January 1, 1970: " + minutes);  