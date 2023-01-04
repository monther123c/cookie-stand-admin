export function TotalCol(table) {
    const result = table.reduce(function (r, a) {
      a.hourlySales.forEach(function (b, i) {
        r[i] = (r[i] || 0) + b;
      });
      return r;
    }, []);
    return result;
  }
  
  export function Cookie_admin(data, location) {
    const Cookie = data.reduce((acc, item) => {
      if (item[location]) acc = item[location];
      return acc;
    }, "");
    return Cookie;
  }
  
  export function removeDuplicates(arr) {
    const uniqueLocations = [];
  
    const unique = arr.filter((element) => {
      const isDuplicate = uniqueLocations.includes(element._location);
  
      if (!isDuplicate) {
        uniqueLocations.push(element._location);
  
        return true;
      }
  
      return false;
    });
    return unique;
  }