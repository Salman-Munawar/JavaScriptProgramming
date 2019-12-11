
var Vowels = ["a", "e", "i", "o", "u"];

function vowelsCounter(text) {
    // Initialize counter
    var counter = 0;

    // Loop through text to test if each character is a vowel
    for (var letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}

alert(vowelsCounter("apple"));