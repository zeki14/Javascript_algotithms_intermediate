// Cash Register
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {

    const currencyUnit = {
        "PENNY": 1,
        "NICKEL": 5,
        "DIME": 10,
        "QUARTER": 25,
        "ONE": 100,
        "FIVE": 500,
        "TEN": 1000,
        "TWENTY": 2000,
        "ONE HUNDRED": 10000
      }
    

    let amountToChange =cash*100 - price*100;
    const changeNotModified = amountToChange;//make a copy of amountToChange to preserve this amount in a variable
    let change= [];//will be a 2d array
    let status= '';
    
    //Calculate the totla amount in cid
    let totalCid = 0;
    let filtedredCid = cid.filter(elem => elem[1] !== 0).reverse();
    
    filtedredCid.forEach(elem => {
        let curr = elem[0];
        let currSum = elem[1]*100;
        totalCid += currSum;//when finish the forEach elem there will be the total amount of the cid
        let amount = 0;
        while(amountToChange >= currencyUnit[curr] && currSum > 0 ){
            amountToChange -= currencyUnit[curr];
            currSum -= currencyUnit[curr];
            amount += currencyUnit[curr];
        }
        if(amount !== 0){
            change.push([curr, amount/100]);
        }
    })

    if (amountToChange > 0) {
        status = 'INSUFFICIENT_FUNDS';
        change = [];
      } else if (amountToChange == 0 && changeNotModified == totalCid) {
        status = 'CLOSED';
        change = cid;
      } else {
        status = 'OPEN';
      }
      return { 'status': status, 'change': change };
    }
  
  console.log(checkCashRegister(19.5,25, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));