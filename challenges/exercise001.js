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
  return parseFloat(newPrice.toFixed(2));
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
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  
  //For each word in words
  for (var i = 0 ; i < words.length ; i++) {
    //Pull out the string
    var string = words[i];
    //Edit and save to array
    words[i] = string.split("").reverse().join("");
  }
  return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  var linuxUsers = 0;
  //Get each one check for type = "linux"
  for (var i = 0 ; i<users.length; i++) {
   //console.log("Get type: ", users[i].type);
    if (users[i].type == "Linux") {
      linuxUsers++;
    }  
  }
  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  var total = 0; 

  //Add all the scores.
  for (var i = 0 ; i<scores.length; i++) {
    total+=scores[i];
  }

  var average = total / scores.length;

  //truncate the trailing values
  return parseFloat(average.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  var fizz = false;
  var buzz = false;
  //if it can be divided by 3 - fizz
  if (Number.isInteger(n/3))
    fizz = true;

  //if it can be divided by 5 - buzz
  if (Number.isInteger(n/5))
    buzz = true;

  //both - fizzbuzz    
  if (fizz & buzz)
    return "fizzbuzz";  
  if (fizz)
    return "fizz";
  if (buzz)
    return "buzz";
  
  //neither - return number
  return n;
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
