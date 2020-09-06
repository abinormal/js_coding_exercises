function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // parse array, get square of each number, save to same array location
  for (var i = 0; i<nums.length ; i++){
    var square = nums[i]*nums[i];
    nums[i] = square;
  }
  return nums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  //for loop skipping the first entry
  var camCase = words[0];
  for (var i = 1 ; i<words.length ; i++) {
    camCase += words[i].substring(0,1).toUpperCase() + words[i].substring(1,words[i].length);
  }
  return camCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  var iSubjects = 0;
  // for each person count how many entries in subjects arr
  for (var i = 0; i<people.length ; i++){
    //console.log("Subjects: " + people[i].subjects);
    for (var j = 0 ; j<people[i].subjects.length ; j++) {
      //if array not empty then ++
      iSubjects++;
    }
  }
return iSubjects;
//console.log("Subjects: " + iSubjects);
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
