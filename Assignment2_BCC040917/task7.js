
var Firstnumber = Number(prompt("Enter First number"));
var Secondnumber = Number(prompt("Enter Second number"));
var Operation =   prompt("Enter one mathematical operator like (+, -, *, /, %)"); 

if(Operation == "+")
{
    var sum = Firstnumber + Secondnumber;
    document.write("Addition");
    document.write("<br>");
    document.write("First Number is: " + Firstnumber);
    document.write("<br>");
    document.write("Second Number is: " + Secondnumber);
    document.write("<br>");
    document.write(Firstnumber + Operation + Secondnumber +" is " + sum);    
}
else if (Operation == "-")
{
    var sub = Firstnumber - Secondnumber;
    document.write("Subtraction");
    document.write("<br>");
    document.write("First Number is: " + Firstnumber);
    document.write("<br>");
    document.write("Second Number is: " + Secondnumber);
    document.write("<br>");
    document.write(Firstnumber + Operation + Secondnumber +" is " + sub);   
     
}
else if(Operation == "*")
{
    var mul =  Firstnumber * Secondnumber;
    document.write("Multiplication");
    document.write("<br>");
    document.write("First Number is: " + Firstnumber);
    document.write("<br>");
    document.write("Second Number is: " + Secondnumber);
    document.write("<br>");
    document.write(Firstnumber + Operation + Secondnumber +" is " + mul); 
    
}
else if(Operation == "/")
{
    var divide =  Firstnumber / Secondnumber;
    document.writeln("Division");
    document.write("<br>");
    document.writeln("First Number is: " + Firstnumber);
    document.write("<br>");
    document.writeln("Second Number is: " + Secondnumber);
    document.write("<br>");
    document.writeln(Firstnumber + Operation + Secondnumber +" is " + divide);        
}
else if(Operation == "%")
{
    var mod =  Firstnumber % Secondnumber;
    document.write("Modulus");
    document.write("<br>");
    document.write("First Number is: " + Firstnumber);
    document.write("<br>");
    document.write("Second Number is: " + Secondnumber);
    document.write("<br>");
    document.write(Firstnumber + Operation + Secondnumber +" is " + mod);        
}
else
{
    document.write("Mathematical operation is not valid!");
}