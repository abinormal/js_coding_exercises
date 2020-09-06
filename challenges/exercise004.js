function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // find and return array of number less than 1;
  var aSmallNums = [];
  var iArrCount = 0;

  for (var i=0; i<nums.length ; i++){
    if (nums[i] < 1){
      aSmallNums[iArrCount] = nums[i];
      iArrCount++;
    }
  }
  return aSmallNums;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  var aNames = [];
  var iArrCount = 0;

  for (var i=0; i<names.length ; i++){
    if (names[i].substring(0,1)== char ){
      aNames[iArrCount] = names[i];
      iArrCount++;
    }
  }  
  return aNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  var verbID = "to ";
  var aVerbs = [];
  var iArrCount = 0;

  for(var i =0; i<words.length ; i++){
    if (words[i].substring(0,3) == verbID){
      aVerbs[iArrCount] = words[i];
      iArrCount++;
    }  
  }
  return aVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  var iArrCount =0;
  var aCities = [];
  //console.log("Get city "+ users[0].data.city.displayName);

  for(var i =0; i < users.length ; i++){
      aCities[iArrCount] = users[i].data.city.displayName;
      iArrCount++;
  }  
  return aCities;  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
