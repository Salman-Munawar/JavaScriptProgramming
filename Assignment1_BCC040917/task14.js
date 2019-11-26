var a = 2, b = 1;

document.write("a is "+ a +"<br>");
document.write("b is " + b +"<br>")

var result = --a - --b + ++b + b--;

/* Explaination
--a;  means 2-1 = 1
--a - --b; means (2-1) - (1-1) = 1 - 0 = 1
--a - --b + ++b; means (2-1) - (1-1) + (1+1) = 1 - 0 + 2 = 3
--a - --b + ++b + b--; means (2-1) - (1-1) + (1+1) + (1-1) = 1 - 0 + 2 + 0 = 3
*/
document.write("result is " + result);