// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    let flatArr= [];
    for(let i=0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            let subArray = steamrollArray(arr[i]);
            flatArr = flatArr.concat(subArray);
        } else{
             flatArr.push(arr[i]);
        }
    }
    return flatArr
  }
  
  console.log(steamrollArray([[['a']], [['d'], 5]]) );