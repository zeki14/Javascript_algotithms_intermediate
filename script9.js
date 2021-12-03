// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// function sumPrimes(num) {
//     let primesArr=[];
   
//     for(let i=2;i<=num;i++){
//         let sumOfPrimes = 0;
//         if(isPrime(i)){
//             primesArr.push(i);
//         }
//     }
  
//     sumOfPrimes = primesArr.reduce(function(acc,val){
//         return acc+val;
//     });
  
//     return sumOfPrimes;
// }

// function isPrime(number){
//     var counter = 0;
  
//     for(var i=1;i<=number;i++){
//      if(number%i===0){
//          counter++;
//         }
//     }
//     if(counter==2){
//         return true;
//     }else{
//         return false;
//     } 
// }
  
  console.log(sumPrimes(10));
  
  // Other solution:   * An integer is prime if it is not divisible by any prime less than or equal to its square root 

  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }
  