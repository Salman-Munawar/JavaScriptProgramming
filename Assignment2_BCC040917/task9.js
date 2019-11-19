
var vowel = prompt("Enter a character ");
var result;

if (vowel == 'a'|| vowel =='e'|| vowel =='i'|| vowel =='o'|| vowel =='u') {
    result =  true;
    document.write("The character is a Vowel "+"<br>");  
    document.write(result);   
}
else {
result = false;
document.write("The character is a Consonant "+"<br>");
document.write(result);
}