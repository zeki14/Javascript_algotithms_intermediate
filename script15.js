// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

var lookup = {
    'A': 'N',
    'B': 'O',
    'C': 'P',
    'D': 'Q',
    'E': 'R',
    'F': 'S',
    'G': 'T',
    'H': 'U',
    'I': 'V',
    'J': 'W',
    'K': 'X',
    'L': 'Y',
    'M': 'Z',
    'N': 'A',
    'O': 'B',
    'P': 'C',
    'Q': 'D',
    'R': 'E',
    'S': 'F',
    'T': 'G',
    'U': 'H',
    'V': 'I',
    'W': 'J',
    'X': 'K',
    'Y': 'L',
    'Z': 'M'
  };
  
  function rot13(encodedStr) {
    var codeArr = encodedStr.split("");  // String to Array
    var decodedArr = []; // Your Result goes here
   
  
    decodedArr = codeArr.map(function(letter) {
      if(lookup.hasOwnProperty(letter)) {
        letter = lookup[letter];
      }
      return letter;
    });
  
    return decodedArr.join(""); // Array to String
  }

  //Other solution:

  function rot13(str) {
    var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];//the alphabet + 13 more letters
    var decodedArr = [];
    for (let i = 0; i < str.length; i++) {
      var newArr = abc.indexOf(str[i]) + 13;
      if(abc.indexOf(str[i]) == -1) {
      decodedArr.push(str[i]);
    } else {
      decodedArr.push(abc[newArr]);
     }
    }
    return decodedArr.join("");
    }
    
    rot13("SERR PBQR PNZC");