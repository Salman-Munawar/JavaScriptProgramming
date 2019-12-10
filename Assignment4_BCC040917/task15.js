 var age = parseInt(prompt("Enter your age"));
 var date = new Date();
 
date.setFullYear(date.getFullYear() - age);
 
document.write("Your age is " + age + "<br/>");
document.write("Your birth year is " +  date.getUTCFullYear());

 