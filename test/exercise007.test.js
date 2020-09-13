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
      expect(sumDigits(123)).toBe(6);
      expect(sumDigits(345)).toBe(12);
      expect(sumDigits(12345)).toBe(15); //Given an empty array
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
 * @param {Number} step - Optional
 */
  describe("createRange", () => {
    test("Returns a range of numbers between two given numbers", () => {
      expect(createRange(3, 5)).toMatchObject([3, 4, 5]);
      expect(createRange(1, 7, 2)).toMatchObject([1, 3, 5, 7]);
      expect(createRange(4, 16, 4)).toMatchObject([4 ,8, 12, 16]); 
    });
  });

/*
 * @param {Array} users
 */
  describe("getScreentimeAlertList", () => {
    test("Returns users who have screentime > 100 mins for a given date", () => {
      const users = [
        {
          username: "beth_1234",
          name: "Beth Smith",
          screenTime: [
             { date: "2019-06-12", usage: { twitter: 34, instagram: 22, facebook: 40} },
             { date: "2019-06-13", usage: { twitter: 56, instagram: 40, facebook: 31} },
             { date: "2019-06-14", usage: { twitter: 12, instagram: 15, facebook: 19} },
             { date: "2019-06-15", usage: { twitter: 10, instagram: 56, facebook: 61} },
             ]
         },
         {
          username: "sam_j_1989",
          name: "Sam Jones",
          screenTime: [
             { date: "2019-06-12", usage: { mapMyRun: 12, whatsApp: 45, facebook: 0, safari: 10} },
             { date: "2019-06-13", usage: { mapMyRun: 45, whatsApp: 10, facebook: 0, safari: 16} },
             { date: "2019-06-14", usage: { mapMyRun: 56, whatsApp: 34, facebook: 0, safari: 31} },
             { date: "2019-06-15", usage: { mapMyRun: 34, whatsApp: 36, facebook: 0, safari: 31} },
             ]
         },
         {
          username: "asid_2020",
          name: "A Siddy",
          screenTime: [
             { date: "2019-06-12", usage: { polytopia: 24, whatsApp: 45, facebook: 0, safari: 37} },
             { date: "2019-06-13", usage: { polytopia: 56, whatsApp: 23, facebook: 0, safari: 16} },
             { date: "2019-06-14", usage: { polytopia: 45, whatsApp: 24, facebook: 0, safari: 31} },
             { date: "2019-06-15", usage: { polytopia: 34, whatsApp: 13, facebook: 0, safari: 23} },
             ]
         },
       ];

      expect(getScreentimeAlertList(users, "2019-06-12")).toMatchObject(["asid_2020"]);
      expect(getScreentimeAlertList(users, "2019-06-13")).toMatchObject(["beth_1234"]);
      expect(getScreentimeAlertList(users, "2019-06-14")).toMatchObject(["sam_j_1989","asid_2020"]);
      expect(getScreentimeAlertList(users, "2019-06-15")).toMatchObject(["beth_1234","sam_j_1989"]);
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
      expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
      expect(hexToRGB("#00CCFF")).toBe("rgb(0,204,255)");
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