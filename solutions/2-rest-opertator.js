import _ from 'lodash';

// BEGIN
export const average = (...args) => {

    if (args.length === 0) {
      
      return null;
    }
  
    const sum = args.reduce((total, amount) => total + amount, 0);

    return sum / args.length;
  }

  export default average;
// END