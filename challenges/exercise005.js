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
  
  str.split("").forEach(num=>{num == 1 ? count[1] += 1 : count[0] += 1 });
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
  // Iterate over array, use .reduce on each array to add contents
  arrs.forEach(arr => {
    total += arr.reduce((a,b) => a+=b) 
  })
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
  
  let search = searchTerm.toLowerCase();
  let isFound = false;
  
  Object.values(haystack).forEach((value)=>{
    
    value = value.toString().toLowerCase();
    // Find string in string and check return value
    // returns the position the string was found or -1
    if (value.search(search) >= 0)  
      isFound = true;
  });

  return isFound;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let obj = {};

  //splice string into array removing junk
  let splitString = str.toLowerCase().replace('!','').replace('?','').replace(',','').split(" ");

  //count through each, checking for a match
  splitString.forEach((word)=>{(word in obj) ? obj[word] += 1 : obj[word] = 1; });

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
