const run = (text) => {
    // BEGIN
    function takeLast(str, n) {

      if ( str.length === 0 || str.length < n){

        return null;
      }
      
      return str.slice(str.length - n).split('').reverse().join('');
    }

    // END
  
    return takeLast(text, 4);
  };
  
export default run;