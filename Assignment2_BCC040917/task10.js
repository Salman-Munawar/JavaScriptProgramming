
var password = "abcd1234";

var userpassword; 

if(userpassword == null)
{
    userpassword = prompt("Please enter your password");
}
else if (userpassword == password)
{
    document.write("Correct!");    
}
else if (userpassword != password)
{
    document.write("Incorrect password");
}