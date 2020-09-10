const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
  } = require("../challenges/exercise006");

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
  describe("sumMultiples", () => {
    test("reverses the digits of a number", () => {
      expect(sumMultiples([3, 5, 6])).toBe(14);
      expect(sumMultiples([1, 2, 3, 6, 3, 1, 9, 10, 12,])).toBe(43);
      expect(sumMultiples([])).toBe(0); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });

/**
 * This function will receive a string of characters and should return 
 * true/false depending on whether it is a valid DNA string. A valid DNA 
 * string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
  describe("isValidDNA", () => {
    test("reverses the digits of a number", () => {
      expect(isValidDNA("CGTCAACGTAAATGCGTA")).toBe(true);
      expect(isValidDNA("CCTTGACTAGTHGCTAGC")).toBe(false);
      expect(isValidDNA("agctcgatcg")).toBe(true); //unless we do case about case
      expect(isValidDNA("Hello")).toBe(false);
    });
  });

/**
 * This function will receive a valid DNA string (see above) and should 
 * return a string of the complementary base pairs. In DNA, T always pairs 
 * with A, and C always pairs with G. So a string of "ACTG" would have a 
 * complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
  describe("getComplementaryDNA", () => {
    test("reverses the digits of a number", () => {
      expect(getComplementaryDNA("TCGA")).toBe("AGCT");
      expect(getComplementaryDNA("TTCCGGAA")).toBe("AAGGCCTT");
      expect(getComplementaryDNA("TGACTCGATC")).toBe("ACTGAGCTAG"); //fill this in
      expect(getComplementaryDNA("")).toBe(""); //Empty returns empty 
    });
  });

/**
 * This function should receive a number and return true/false depending on whether 
 * it is a prime number or not. A prime number is a number that can only be divided 
 * evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
  describe("isItPrime", () => {
    test("reverses the digits of a number", () => {
      expect(isItPrime(7)).toBe(true);
      expect(isItPrime(3)).toBe(true);
      expect(isItPrime(19)).toBe(true);
      expect(isItPrime(6911)).toBe(true);
      expect(isItPrime(6912)).toBe(false);
      expect(isItPrime(12)).toBe(false); 
      expect(isItPrime(1)).toBe(false); // 1 isn't thought of as a prime number
    });
  });

/**
 * This function should receive a number and return an array of n arrays, each filled 
 * with n items. The parameter "fill" should be used as the filler of the arrays. For 
 * example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
  describe("createMatrix", () => {
    test("reverses the digits of a number", () => {
      expect(createMatrix(3, "foo")).toBe([["foo", "foo", "foo"],["foo", "foo", "foo"],["foo", "foo", "foo"]]);
      expect(createMatrix(2, 34)).toBe([[34,34][34,34]]);
      expect(createMatrix(6,"Eureka!")).toBe([["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"],["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"],["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"],["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"],["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"],["Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!", "Eureka!"]]);
      expect(createMatrix(3,["do","be","do"])).toBe([["do","be","do"], ["do","be","do"], ["do","be","do"]],[["do","be","do"], ["do","be","do"], ["do","be","do"]],[["do","be","do"], ["do","be","do"], ["do","be","do"]]); 
    });
  });

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
let rota = [
    { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
    { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
    { name: "Pedro", rota: ["Saturday", "Wednesday", "Thursday", "Sunday"] },
    { name: "Pedro", rota: ["Friday", "Monday", "Wednesday", "Tuesday"] },
    { name: "Pedro", rota: ["Thursday", "Saturday", "Friday", "Sunday"] },
   ]

  describe("areWeCovered", () => {
    test("reverses the digits of a number", () => {
      expect(areWeCovered(rota,"Monday")).toBe(false);
      expect(areWeCovered(rota,"Tuesday")).toBe(true);
      expect(areWeCovered(rota,"Wednesday")).toBe(true);
      expect(areWeCovered(rota,"Thursday")).toBe(false);
      expect(areWeCovered(rota,"Friday")).toBe(true);
      expect(areWeCovered(rota,"Saturday")).toBe(true);
      expect(areWeCovered(rota,"Sunday")).toBe(true);
    });
  });

  