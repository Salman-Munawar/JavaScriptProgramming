var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];

for (var i = 0; i<= aCities.length-2; i ++){
   document.write((i+1) + o[i + 1] +" choice is " + aCities[i]+"<br>");
}