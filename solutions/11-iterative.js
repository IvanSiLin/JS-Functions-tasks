const smallestDivisor = (number) => {
    // BEGIN
  
      if (number === 1) {

        return 1;
      }
    
      let second = 2;
    
      while (number % second !== 0) {
        
        second = second + 1;
      }
    
      return second;
    // END
  };
  
export default smallestDivisor;
  