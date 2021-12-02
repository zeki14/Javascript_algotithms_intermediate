// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

//Using Switch-Case

function pairElement(str) {
    let pairs= [];

    function search(char){
        switch (char){
            case "A":
                pairs.push(["A", "T"]);
                break;
            case "T":
                pairs.push(["T", "A"]);
                break;
            case "C":
                pairs.push(["C", "G"]);
                break;
            case "G":
                pairs.push(["G", "C"]);
                break;
        }
    };

    for(let i =0; i <str.length; i++){
         search(str[i]);
    }
    return pairs;
  }
  
 console.log(pairElement("GCG"));

 //Usin map():
 function pairElement(str) {
    let pairs= {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    };
let arr= str.split("");
return arr.map(x => [x, pairs[x]]);

  }
  
 console.log(pairElement("GCG"));