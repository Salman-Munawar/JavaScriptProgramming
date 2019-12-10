  var value = Number(prompt("Enter a Number"));
  var digitsCount =  value.toString().split('').length;  
 

var mean = value
    .toString()
    .split('')
    .map(Number)
    .reduce(function (a, b) {
        return (a + b) 
    }, 0);

mean = mean / digitsCount;
document.write(mean);

 

    
