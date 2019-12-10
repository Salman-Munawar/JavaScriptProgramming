var date = new Date();

 
document.write("current date: " + date +"<br/>"); 
date.setHours(date.getHours() - 1);
document.write("1 hour ago,it was " + date);
