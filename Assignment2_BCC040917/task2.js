var signalColor = prompt("What is the color of road traffic signal ?")
var message;

if(signalColor == "Red")
{
    message = "Must Stop";
    document.write(message);
}

else if (signalColor == "Yellow")
{
    message = "Ready to move";
    document.write(message);
}
else if (signalColor == "Green")
{
    message = "Move now";
    document.write(message);
}
else
{
    message = "Color of road traffic signal is wrong";
    document.write(message);
}