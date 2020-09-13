const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
  } = require("../challenges/exercise007");

/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
  describe("sumDigits", () => {
    test("Returns the sum all digits in a number", () => {
      expect(sumMultiples(123)).toBe(6);
      expect(sumMultiples(345)).toBe(12);
      expect(sumMultiples(12345)).toBe(15); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * 
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step
 */
  describe("createRange", () => {
    test("Returns a range of numbers between two given numbers", () => {
      expect(sumMultiples([3, 5, 6])).toBe(14);
      expect(sumMultiples([1, 2, 3, 6, 3, 1, 9, 10, 12,])).toBe(43);
      expect(sumMultiples([])).toBe(0); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });

/**
 * This function takes an array of user objects and their usage in minutes of various applications. 
 * The format of the data should be as follows:
 * [
 *  {
 *    username: "beth_1234",
 *    name: "Beth Smith",
 *    screenTime: [
 *                 { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
 *                 { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
 *                 { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
 *                 { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
 *                ]
 *   },
 *   {
 *    username: "sam_j_1989",
 *    name: "Sam Jones",
 *    screenTime: [
 *                 { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
 *                 { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
 *                 { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
 *                ]
 *   },
 * ]
 *
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime 
 * for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as 
 * she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
  describe("getScreentimeAlertList", () => {
    test("Returns users who have screentime > 100 mins for a given date", () => {
      expect(sumMultiples([3, 5, 6])).toBe(14);
      expect(sumMultiples([1, 2, 3, 6, 3, 1, 9, 10, 12,])).toBe(43);
      expect(sumMultiples([])).toBe(0); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written 
 * in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent 
 * the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
  describe("hexToRGB", () => {
    test("Given a Hex number function returns RGB", () => {
      expect(sumMultiples([3, 5, 6])).toBe(14);
      expect(sumMultiples([1, 2, 3, 6, 3, 1, 9, 10, 12,])).toBe(43);
      expect(sumMultiples([])).toBe(0); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });


/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented 
 * with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently
 *  no winner.
 * @param {Array} board
 */
  describe("findWinner", () => {
    test("Given an array determines if player x or 0 has won or if no one has won.", () => {
      expect(sumMultiples([3, 5, 6])).toBe(14);
      expect(sumMultiples([1, 2, 3, 6, 3, 1, 9, 10, 12,])).toBe(43);
      expect(sumMultiples([])).toBe(0); //Given an empty array
      //Could give array of strings to really mess it up.
    });
  });