// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // return arr;
    let argsToDestroy = [...arguments].slice(1);
    console.log(argsToDestroy)
    return arr.filter(item => argsToDestroy.indexOf(item) === -1)
}
 console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));