var studentsNames = ["Micheal","John","Tony"];
var scores = [320, 230, 480];

for(var i = 0; i < studentsNames.length; i++){
  
 document.write("Score of "+ studentsNames[i] +" is " + scores[i] + ". Percentage: " +  (scores[i]/500) * 100 +"%" +"<br>");
 
 }
