function capitalize(word) {
  if (word === undefined) throw new Error('word is required');
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error('firstName is required');
  if (lastName === undefined) throw new Error('lastName is required');
  return firstName.substring(0, 1) + '.' + lastName.substring(0, 1);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error('originalPrice is requied');
  if (vatRate === undefined) throw new Error('vatRate is required');

  let total = originalPrice + (originalPrice / 100) * vatRate;

  // push string back into a number as test complains about quotation marks
  return parseFloat(total.toFixed(2));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error('originalPrice is required');
  if (reduction === undefined) throw new Error('reduction is required');

  let newPrice = originalPrice - (originalPrice / 100) * reduction;
  return parseFloat(newPrice.toFixed(2));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error('str is required');

  //Get string length and Find the middle value
  let middle = str.length / 2;

  //find even and odd
  if (Number.isInteger(middle)) {
    // if even give two middle letters
    return str.substring(middle - 1, middle + 1);
  } else {
    //if odd give single middle letter
    return str.substring(middle, middle + 1);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error('word is required');
  return word.split('').reverse().join('');
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error('words is required');

  let newWords = [];
  // forEach word in words, reverse and add to new array.
  words.forEach(word => {
    newWords.push(word.split('').reverse().join(''));
  });
  return newWords;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error('users is required');
  let linuxUsers = 0;
  //Get each one, check for type = "linux"
  users.forEach(user => {
    user.type == 'Linux' ? linuxUsers++ : null;
  });

  return linuxUsers;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error('scores is required');
  let total = 0;

  //Add all the scores and get avg
  total += scores.reduce((a, b) => (a += b));
  let average = total / scores.length;

  //truncate the trailing values
  return parseFloat(average.toFixed(2));
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error('n is required');

  // Number divisible by 3 and 5 will always divide by 15
  if (n % 15 == 0) return 'fizzbuzz';
  //if it can be divided by 3 - fizz
  if (n % 3 == 0) return 'fizz';
  //if it can be divided by 5 - buzz
  if (n % 5 == 0) return 'buzz';
  // otherwise return number
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
  simpleFizzBuzz,
};
