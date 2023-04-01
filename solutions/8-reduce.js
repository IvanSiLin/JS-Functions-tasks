// BEGIN
export default (data, key) => {

    return data.reduce((acc, obj) => {

      const group = obj[key];
      if (!acc[group]) {
        
        acc[group] = [];
      }
      acc[group].push(obj);
      
      return acc;
    }, {});
  };
  
// END