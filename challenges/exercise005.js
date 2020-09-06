const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  //Find a number in array, return next number or null

  //for each number 
  for (var i =0; i<nums.length ; i++){
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

  var count = {
    0: 0,
    1: 0
  };

  for (var i=0; i<str.length ; i++){
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
  
  var z = n;
  var reverse = 0;

  while(z > 0)
  {
      var digit = z % 10;
      reverse = (reverse * 10) + digit;
      z = parseInt(z / 10);
  }
  return reverse;

};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  
  var total = 0;

  for (var i=0; i<arrs.length;i++){
    for (var j=0; j<arrs[i].length;j++){
      total += arrs[i].[j];
    }
  }
  return total;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  //Save first item in temp
  if (arr.length >= 2){
    var temp = arr[0];

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
  // Treat it as two arrays. non case sensitive string search.
  for (var i = 0; i<haystack.length; i++){
    for (var j=0; j<haystack[i].length ; j++){
      if (haystack[i].[j].toLowerCase().includes(searchTerm) )
        return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
