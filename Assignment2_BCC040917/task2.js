var signalColor = prompt("What is the color of road traffic signal ?").toUpperCase();
var message;

if(signalColor == "RED")
{
    message = "Must Stop";    
}

else if (signalColor == "YELLOW")
{
    message = "Ready to move";     
}
else if (signalColor == "GREEN")
{
    message = "Move now";     
}
else
{
    message = "Color of road traffic signal is wrong";     
}

document.write(message);