
var w = Number(prompt("Enter width"));
var h = Number(prompt("Enter height"));

function area(width, height)
{
    w = 5;
    h = 10;
    return width * height;
}

document.write("Area of a rectangle: " + area(w,h) + "<br/>");
document.write("Inside function calling: " + w +" , "+ h);