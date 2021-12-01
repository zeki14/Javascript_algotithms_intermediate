// Diff Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// (Declarative solution)

// function diffArray(arr1, arr2) {
//     return [...diff(arr1, arr2), ...diff(arr2, arr1)];
  
//     function diff(a, b) {
//      return a.filter(item => b.indexOf(item) === -1);
//     }
//   }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

  //Imperative solution

  function diffArray(arr1, arr2) {
    var newArr = [];
  
    function onlyInFirst(first, second) {
      // Looping through an array to find elements that don't exist in another array
      for (var i = 0; i < first.length; i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }
  
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
  
    return newArr;
  }