
var password = "abcd1234";

var userpassword = prompt("Please enter password");

if(userpassword == null || userpassword == "")
{
    userpassword = prompt("Please enter your password");     
}

  if (userpassword === password)
{    
    document.write("Correct! The password you entered matches the original password");    
}
else if (userpassword != password)
{   
    document.write("Incorrect password");
}