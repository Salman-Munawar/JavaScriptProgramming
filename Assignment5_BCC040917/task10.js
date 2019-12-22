
var str = prompt("Enter a string ");

function vowelCount(str) {
    return str.replace(/[^aeiou]/gi, "").length;
  };
  

 document.write("Number of vowels: " + vowelCount(str.toLowerCase()));