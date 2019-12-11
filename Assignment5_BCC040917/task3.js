
var str = prompt("Enter palindrome  word, phrase, or sequence");

function palindrome(str) {
    var expression = /[\W_]/g;
    var FwdStr = str.toLowerCase().replace(expression, '');
    var reverseStr = FwdStr.split('').reverse().join(''); 
    return reverseStr === FwdStr;
  }

  if(palindrome(str))
  {
    document.write(str + ": A passed string is a palindrome");
  }
  else
    document.write(str + ": A passed string is not a palindrome");

   