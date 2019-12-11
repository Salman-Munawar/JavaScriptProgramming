var string = "The quick brown fox jumps over the lazy dog";

var count = (string.match(/the/gi)).length; 

document.write("Text: " + string + "<br/>");
document.write("There are " + count + " occurrence(s) of the word 'the'");
 


 

 