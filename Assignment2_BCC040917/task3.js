
var alertCounter = 0;
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
document.write("given condition for variable a is true"+"<br>");
alertCounter ++;
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
document.write("given condition for variable b is true"+"<br>");
alertCounter ++;
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
document.write("condition 1 is true"+"<br>");
alertCounter ++;
}
if (c === 13){
alert("condition 2 is true");
document.write("condition 2 is true"+"<br>");
alertCounter ++;
}
if (++c < 14){
alert("condition 3 is true");
document.write("condition 3 is true"+"<br>");
alertCounter ++;
}
if(c === 14){
alert("condition 4 is true");
document.write("condition 4 is true"+"<br>");
alertCounter ++;
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
document.write("The cost equals"+"<br>");
alertCounter ++;
}

if (true){
    alert("True");
    document.write("True"+"<br>");
    alertCounter ++;
    }
    if (false){
    alert("False");
    document.write("False"+"<br>");
    alertCounter ++;
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        document.write("car is smaller than cat"+"<br>"+"<br>");
        alertCounter ++;
        }

        document.write("Number of alerts is: " + alertCounter);