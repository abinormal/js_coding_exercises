function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // parse array, get square of each number, save to same array location

  let newNums = [];
  nums.forEach(num=>newNums.push(num*num))

  return newNums;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  //for loop skipping the first entry
  let camCase = words[0];
  for (let i = 1 ; i<words.length ; i++) {
    camCase += words[i].substring(0,1).toUpperCase() + words[i].substring(1,words[i].length);
  }
  return camCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let iSubjects = 0;
  // for each person count how many entries in subjects arr
  for (let i = 0; i<people.length ; i++){
    //console.log("Subjects: " + people[i].subjects);
    for (let j = 0 ; j<people[i].subjects.length ; j++) {
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
  let foundIt = false;

  for (let i = 0 ; i<menu.length ; i++){
    for (let j = 0 ; j<menu[i].ingredients.length ; j++) {
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

  let aDuplicates = [];
  let iDupCount = 0;

  for (let i = 0 ; i <arr1.length ; i++){
    for (let j = 0 ; j <arr2.length ; j++){
      // check for duplicate
      if (arr1[i]==arr2[j]){
        // Found - Add to array
        aDuplicates[iDupCount] = arr1[i];
        iDupCount++;
      }  
    }
  }
  // Remove duplicates and sort
  let unique = [...new Set(aDuplicates)]; 
  return unique.sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
