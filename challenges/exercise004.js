function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // find and return array of number less than 1;
  let aSmallNums = [];
  let iArrCount = 0;

  for (let i=0; i<nums.length ; i++){
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
  
  let aNames = [];
  let iArrCount = 0;

  for (let i=0; i<names.length ; i++){
    if (names[i].substring(0,1)== char ){
      aNames[iArrCount] = names[i];
      iArrCount++;
    }
  }  
  return aNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbID = "to ";
  let aVerbs = [];
  let iArrCount = 0;

  for(let i =0; i<words.length ; i++){
    if (words[i].substring(0,3) == verbID){
      aVerbs[iArrCount] = words[i];
      iArrCount++;
    }  
  }
  return aVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  let aIntegers = [];
  let index =0;

  for(let i=0; i<nums.length; i++){
    if (Number.isInteger(nums[i])){
      aIntegers[index] = nums[i];
      index++;
    }
  }
  return aIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let iArrCount =0;
  let aCities = [];
  //console.log("Get city "+ users[0].data.city.displayName);

  for(let i =0; i < users.length ; i++){
      aCities[iArrCount] = users[i].data.city.displayName;
      iArrCount++;
  }  
  return aCities;  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let aSquares = [];
  let index =0;

  for(let i = 0; i<nums.length ; i++){
    //console.log("count: "+ i);
    aSquares[index] = Math.sqrt(nums);
    index++;
  }
  return aSquares;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  //for each sentence find string within and return whole sentence.

  let aSent = [];
  let index = 0;

  for (let i=0;i<sentences.length;i++){
    if (sentences[i].toLowerCase().includes(str) ) {
      //console.log("Found text: "+ str + " in " + sentences[i]);
      aSent[index] = sentences[i];
      index++;
    }
  }
  return aSent;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let aLong =[];
  
  for (let i = 0; i<triangles.length ; i++){
    let largest = 0;
    for (let j =0; j<triangles[i].length ; j++){
      if (triangles[j]>largest)
        largest = triangles[j];
    }
    //OMG I only just saw that- I knew there must be a better way.
    //I have so much to learn!! 
    //TODO - edit out the embarrassment later
    aLong.push(largest);
  }
  return aLong;
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
