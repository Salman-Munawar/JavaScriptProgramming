var passsword = prompt("Enter the password");

var regularExpression =  /^(?=.*[0-9])[A-Za-z]\w{7,}$/;


if(passsword.match(regularExpression))
{    
    document.write("It is a valid password");    
} 
else
{
    passsword = prompt("Enter a valid password");      
}
 