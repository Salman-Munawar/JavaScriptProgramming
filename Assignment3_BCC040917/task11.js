var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var input = prompt("Welcome to Online Bakery. What do you want to order sir/ma`am?");

if(A.indexOf(input) == -1)
{
    document.write("We are sorry." + input + " is <b>not available</b> in our bakery");
}
else 
{
 document.write(input + " is <b>available</b> at index " + A.indexOf(input) + " in our bakery");
}
