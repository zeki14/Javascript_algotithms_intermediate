// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  
    let arg = str
    .toLowerCase()// 1) Lowercase the input
    .match(/[a-z0-9]/g);// 2) Strip out non-alphanumeric characters
  
    let newStr = arg.join("");
  
    let reverse= arg.reverse().join("");
    
    if(newStr === reverse){
      return true;
    }
    return false;
  }
  
  palindrome("2_A3*3#A2");