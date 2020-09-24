/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  
  let total = 0;
  // for each number in array
  arr.forEach(num =>{
    // check is multiple of 3 or 5
    if (!(num % 3))
      total += num;
    else if (!(num % 5))
      total += num;
  })
  return total;
};

/**
 * This function will receive a string of characters and should return true/false 
 * depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  let isFalse = true;
  let DNAString = str.split("");

  //for each item in DNAstring
  DNAString.forEach(letter => {
    if (! ((letter === "A")||(letter === "G")
        || (letter === "T")||(letter === "C") )){
      //console.log("False Letter: "+letter);    
      isFalse = false;  
    } 
  });
  return isFalse;
};

/**
 * This function will receive a valid DNA string (see above) and should return 
 * a string of the complementary base pairs. In DNA, T always pairs with A, and 
 * C always pairs with G. So a string of "ACTG" would have a complementary DNA 
 * string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  
  //Use regex and .replace on the string
  return str.replace( /[ATCG]/g, function( c ){ return { 'A': 'T', 'T': 'A','C':'G','G': 'C' }[ c ] } )

};

/**
 * This function should receive a number and return true/false depending on 
 * whether it is a prime number or not. A prime number is a number that can 
 * only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");

  let d = n-1;

  // Check each possible number to divide n by
  while (d > 1){
    // if it can be divided by another number not prime
    if ((n % d) == 0){ 
      return false;
    }  
    d--;
  }
  return true;  

};

/**
 * This function should receive a number and return an array of n arrays, 
 * each filled with n items. The parameter "fill" should be used as the 
 * filler of the arrays. For example, given parameters 3 and "foo" the 
 * resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  return Array(n).fill().map(()=>Array(n).fill(fill));

};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;
  
  // loop through rota and count day
  staff.forEach((staff)=>{
    if (staff.rota.find(element => element === day ))
      count++;
  })

  // if 3 or more then there are enough staff available for that day
  return (count >= 3);

};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
