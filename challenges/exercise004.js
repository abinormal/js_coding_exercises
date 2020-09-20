function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // filter array of number less than 1;
  return nums.filter(num => num < 1);
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  
  let aNames = [];
  // Check leading letter of name against char
  names.forEach((name)=>{name.substring(0,1)==char ? aNames.push(name) : null})
  return aNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbID = "to ";
  let aVerbs = [];

  words.forEach((word)=>{word.substring(0,3) == verbID ? aVerbs.push(word) : null})

  return aVerbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  
  let aIntegers = [];
  nums.forEach((num)=>{Number.isInteger(num) ? aIntegers.push(num) : null})
  return aIntegers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  let aCities = [];
  users.forEach((user)=>{aCities.push(user.data.city.displayName)})
  return aCities;  
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let aSquares = [];

  nums.forEach(num=>{
    let temp = Math.sqrt(num);
    // Truncate to two decimal places
    aSquares.push(parseFloat(temp.toFixed(2)));
  })

  return aSquares;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  //for each sentence find string within and return whole sentence.
  let aSent = [];
  
  sentences.forEach(sentence => {
    if (sentence.toLowerCase().includes(str) ) {
      aSent.push(sentence) ;
    }
  })
  return aSent;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let longSides =[];
  // Math max gets largest in an array
  triangles.forEach(triangle=>{longSides.push(Math.max(...triangle));})

  return longSides;
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
