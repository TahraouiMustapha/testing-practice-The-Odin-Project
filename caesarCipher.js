
const alphabet = "abcdefghijklmnopqrstuvwxyz"

const alphabetLength = alphabet.length;
  

export const caesarCipher = function(string, key) {
    let result = string.split('')
        .map((char) => {
        if(alphabet.includes(char.toLowerCase())) { // check if the char is alphabetical or not
            return shiftChar(char, key);
        } 
        return char;
    })

    return result.join('');
}



function shiftChar(char, key) {
    let index = alphabet.indexOf(char.toLowerCase());
    index = wrappedIndex(index, key, alphabetLength);

    if(char.charCodeAt(0) < 97) { // check the letter case
        return alphabet[index].toUpperCase() ;
    } else {
        return alphabet[index] ;
    }
}

// function to return a new index in wrapping cases
function wrappedIndex(index, key, arrayLength) {
    if((index + key) >= arrayLength) return (index + key) % arrayLength;
    else if((index + key) < 0) return arrayLength - (Math.abs(index + key) % arrayLength);
    else return index+ key;
}



