
var password = "abcd1234";

var userpassword; 

if(userpassword == null || userpassword == "")
{
    userpassword = prompt("Please enter your password");     
}

  if (userpassword === password)
{
    alert("Correct! The password you entered matches the original password");
    document.write("Correct! The password you entered matches the original password");    
}
else if (userpassword != password)
{
    alert("Incorrect password");
    document.write("Incorrect password");
}