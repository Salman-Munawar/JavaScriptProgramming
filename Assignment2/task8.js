var num;
num = parseInt(prompt("Enter a number"));

if(num > 0)
{
 document.write("number is positive"); 
}
else if (num < 0)
{
    document.write("number is negative");
}
else if (num == 0)
{
    document.write("number is zero");
}
else
{
    document.write("NaN");
}