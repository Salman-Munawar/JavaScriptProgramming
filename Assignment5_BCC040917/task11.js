
var vowel = prompt("Enter a character ");

function isVowel(x){    

    switch (x) {
        case "A":           
           return true;
        break;
        case "E":
            return true;
        break;
        case "I":
            return true;
            break;
         case "O":
            return true;
                break;
         case "U":
            return true;                                                                                                                                
                    break;

        default:        
        return false;
    }     
}

document.write(isVowel(vowel.toUpperCase()));
