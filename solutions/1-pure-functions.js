// BEGIN
export const sayPrimeOrNot = (number) => {

    if (number <= 1) {

      console.log("no");
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {

      if (number % i === 0) {

        console.log("no");
        return true;
      }
    }
  
    console.log("yes");
  }

  export default sayPrimeOrNot;

// END