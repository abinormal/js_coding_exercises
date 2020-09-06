function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city == "Manchester")
    return true;
  else
    return false;
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // A bus can hold 40 people. This function should return how many buses are required for the number of people
  // Divide and round up
  return Math.ceil(people/40);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // const arr = ["dog", "badger", "dog", "dog", "chicken"];
  var iSheep = 0;
  for (var i = 0; i<arr.length ; i++){
    if (arr[i] == "sheep")
      iSheep++;
  }
  return iSheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Note to self: remember to check the Case and the nesting!
  if ((person.address.postCode.substring(0,1) == "M") && (person.address.city == "Manchester") ) {
    return true;
  } else {
    return false;
  }  
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
