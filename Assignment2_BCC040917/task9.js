
var vowel = prompt("Enter a character ");
var result;
if (vowel == 'a'|| vowel =='e'|| vowel =='i'|| vowel =='o'|| vowel =='u') {
    result =  true;
    document.write("The character is a Vowel " + result );
    //"The character is a Vowel";
}
else {
result = false;
document.write("The character is a Consonant " + result);
//"The character is a Consonant";
}