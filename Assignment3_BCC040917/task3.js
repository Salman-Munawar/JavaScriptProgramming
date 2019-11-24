var colorNames = ["Red", "Yellow", "Green"];
document.write("Original array: " + colorNames + "<br><br>");

// A
var addColor = prompt("what color you want to add to the beginning?")
colorNames.unshift(addColor); 
document.write(addColor +  " added to the beginning<br>");
document.write("Updated array: " + colorNames + "<br><br>");

//B 
var endColor = prompt("what color you wants to add to the end?");
colorNames.push(endColor);
document.write(endColor +  " added to the end<br>");
document.write("Updated array: " + colorNames + "<br><br>");
 
//C
document.write("Blue and Purple added to the beginning<br>");
colorNames.unshift("Blue", "Purple");
document.write("Added two more colors to the beginning of the array: " + colorNames + "<br><br>");

//D
colorNames.shift();
document.write("Deleted the first color in the array: " + colorNames + "<br><br>");

//E
colorNames.pop();
document.write("Deleted the last color in the array: " + colorNames + "<br><br>");

//F
var index = prompt("At which index you want to add a color?");
var choice = prompt("What color you want to add?");
index = parseInt(index);
colorNames[index] = choice;
document.write("At index " + index + " user wants to add a color & color name is: " + choice + "<br>");
document.write("Updated array: " + colorNames + "<br><br>");


//G
var num = prompt("At which index you want to delete color(s)?");
var delCount = prompt("How many colors you want to delete?");
colorNames.splice(num,delCount);
document.write("At index " + num + " user wants to delete color(s) and " + delCount + " colors user wants to delete<br>" );
document.write("Updated array: " + colorNames);

 