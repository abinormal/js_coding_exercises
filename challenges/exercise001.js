function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  return firstName.substring(0,1) + '.' + lastName.substring(0,1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
  var vat = (originalPrice/100)*vatRate;
  var total = originalPrice + vat;

  // push string back into a number as test complains about quotation marks
  return parseFloat(total.toFixed(2));  
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  var percentage = (originalPrice/100)*reduction;
  var newPrice = originalPrice - percentage;
  return parseFloat(newPrice.toFixed(2));;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  //Get string length
  var len = str.length;

  //Find the middle value
  var middle = len/2;
  
  //find even and odd
  if (Number.isInteger(middle) ) {
    // if even give two middle letters
     return str.substring(middle-1,middle+1);
  } else {
    //if odd give single middle letter
    return str.substring(middle,middle+1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
