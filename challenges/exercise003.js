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
  // given menu (array) check for ingredient
  var foundIt = false;

  for (var i = 0 ; i<menu.length ; i++){
    for (var j = 0 ; j<menu[i].ingredients.length ; j++) {
      if (menu[i].ingredients[j] == ingredient)
        foundIt = true;
    }
  }
  return foundIt;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Return array of duplicate numbers found in an array

  var aDuplicates = [];
  var iDupCount = 0;

  for (var i = 0 ; i <arr1.length ; i++){
    for (var j = 0 ; j <arr2.length ; j++){
      // check for duplicate
      if (arr1[i]==arr2[j]){
        console.log("a Match!");
        // Check if it's the first entry in the array.
        if (iDupCount == 0){
          aDuplicates[iDupCount] = arr1[i];
          iDupCount++;
        } else {
          for (var k = 0; k < aDuplicates.length ; k++){
            console.log("checking for duplicates in aDupe");
            if (aDuplicates[k]==arr1[i]) {
              continue;
            } else {
              aDuplicates[iDupCount] = arr1[i];
              iDupCount++;
            }
          }
        }
      }  
    }
  }

  return aDuplicates.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
