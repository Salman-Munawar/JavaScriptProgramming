
var alertCounter = 0;
var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
alertCounter ++;
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
alertCounter ++;
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
alertCounter ++;
}
if (c === 13){
alert("condition 2 is true");
alertCounter ++;
}
if (++c < 14){
alert("condition 3 is true");
alertCounter ++;
}
if(c === 14){
alert("condition 4 is true");
alertCounter ++;
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
alertCounter ++;
}

if (true){
    alert("True");
    alertCounter ++;
    }
    if (false){
    alert("False");
    alertCounter ++;
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        alertCounter ++;
        }

        document.write("Number of alerts is: " + alertCounter);