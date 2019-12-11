
var rad = Number(prompt("Enter Radius"));

function calcCircumference(radius){
    return (2 * Math.PI * radius).toFixed(3) ;
}

function calcArea(radius)
{
   return (Math.PI * radius * radius).toFixed(3);
}

document.write("The circumference is: " + calcCircumference(rad) + "<br/><br/>");

document.write("The area is: " + calcArea(rad));