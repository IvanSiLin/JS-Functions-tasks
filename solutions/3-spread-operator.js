// BEGIN
export const convert = (...dates) => {
  
    return dates.map(item => new Date(...item).toDateString());
  };  

  export default convert;
// END