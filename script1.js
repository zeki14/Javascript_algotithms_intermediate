// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    let sortArr = arr.sort((a,b)=> a-b)
    console.log(sortArr)
    let sum = 0;
    for(let i = sortArr[0]; i <= sortArr[1]; i++){
        sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));