document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("<br>");
var marksObtained = prompt("Enter marks obtained in three subjects");
var totalMarks = prompt("Enter Total Marks");

var percentage = (marksObtained/totalMarks) * 100;
var grade, remakrs;

if(percentage >= 80){
 grade = "A-one";
 remakrs = "Excellent";
}
else if(percentage >= 70){
    grade = "A";
    remakrs = "Good";
}
else if(percentage >= 60){
    grade = "B";
    remakrs = "You need to improve";
}
else {
    grade = "Fail";
 remakrs = "Sorry";
}