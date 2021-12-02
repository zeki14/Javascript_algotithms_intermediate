// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
    let index = str.indexOf(before);
    if(str[index].toUpperCase() === str[index]){
         after = after[0].toUpperCase() + after.slice(1);
         console.log(after)
    }
    else{
        after = after[0].toLowerCase() + after.slice(1);
    }
    return str.replace(before, after);

}

//Using Regulr Expressions and substring():
function myReplace(str, before, after) {
    
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    return str.replace(before, after);
  }
  
  
    console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));