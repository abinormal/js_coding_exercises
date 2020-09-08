const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  //Find a number in array, return next number or null

  //for each number 
  for (let i =0; i<nums.length ; i++){
    //Check if it's the one we want
    if (nums[i] == n) {
      //return next - check there is a next
      if (i == nums.length-1){
        // Last array item
        return null;
      } else { 
      return nums[i+1];
      }
    }
  }
  return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  //Count 1s and 0s - return result in object

  let count = {
    0: 0,
    1: 0
  };

  for (let i=0; i<str.length ; i++){
    if (str.substring(i,i+1) == 1 ){
      count[1] += 1;
    } else {
      count[0] += 1;
    }
  }
  return count;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  
  let z = n;
  let reverse = 0;

  while(z > 0)
  {
    let digit = z % 10;
    reverse = (reverse * 10) + digit;
    z = parseInt(z / 10);
  }
  return reverse;

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  let total = 0;

  for (let i=0; i<arrs.length;i++){
    for (let j=0; j<arrs[i].length;j++){
      total += arrs[i][j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  //Save first item in temp
  if (arr.length >= 2){
    let temp = arr[0];

    //save last to first
    arr[0] = arr[arr.length-1];

    //put first into last
    arr[arr.length-1] = temp;
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  
  //console.log("###Start to Search for "+ searchTerm);

  for (let key in haystack) {
      if (Object.prototype.hasOwnProperty.call(haystack, key)) { 
          let val = haystack[key];
          //check for string before .toUpperCase()
          if (typeof val === 'string' || val instanceof String) {            
            let temp = val.toUpperCase();
            val = temp;
          }  
          if (typeof searchTerm === 'string' || searchTerm instanceof String) {  
            let temp1 = searchTerm.toUpperCase();
            searchTerm = temp1;
          }  
          //console.log("Val: "+ val);
          //Compare string
          //TODO: Change this to search val for searchTerm
          if (val == searchTerm)  {
            //console.log("TRUE!!");
            return true;
          } else {
            //console.log("FALSE!");
          }
      }
  }

  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let obj = {};

  //splice string into array 
  let splitString = str.split(" ");
  //count through each
  for (let i=0 ; i<splitString.length ; i++){
    //note words and frequencies
    if (splitString[0]){
      //obj['property_name'] = 'some_value';
      obj[splitString[0]] = 1;
    } else {
      //check obj for property names matching the next item in splitString
      //if found add 1 to existing
      //otherwise 
      //create a new poperty in obj.
    }
    
  }
  return obj;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
