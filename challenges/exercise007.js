/**
 * This function takes a number, e.g. 123 and returns the sum of all its digits, e.g 6 in this example.
 * @param {Number} n
 */
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");

  let sum = 0;
  while(n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  //console.log("Sum: "+sum);
  return sum;
};

/**
 * This function creates a range of numbers as an array. It received a start, an end and a step. 
 * Step is the gap between numbers in the range. For example, if start = 3, end = 11 and step = 2 
 * the resulting range would be: [3, 5, 7, 9, 11]
 * Both the start and the end numbers are inclusive.
 * Step is an optional parameter. If it is not provided, assume the step is 1.
 * @param {Number} start
 * @param {Number} end
 * @param {Number} step - optional
 */
const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

  //Set step to 1 if not defined
  if(step === undefined) { step = 1;}

  let array = [];

  //push start into the array
  array.push(start);
  let temp = start;

  do {
      // add step to start -> temp
    temp += step;
    // push onto array
    array.push(temp);
    // check if it === end
    // if end exit.
  } while (temp !=end)

  return array;
};

/**
 * This function takes an array of user objects and their usage in minutes of various applications. The format of the data should be as follows:
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
 * The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.
 * The date will be provided in the format "2019-05-04" (YYYY-MM-DD)
 * For example, if passed the above users and the date "2019-05-04" the function should return ["beth_1234"] as she used over 100 minutes of screentime on that date.
 * @param {Array} users
 */
const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");

  let array = [];
  
  //for each user
  for (let i = 0; i<users.length; i++){
  // Me getting the info out:
  //  console.log(users[i].screenTime[0]);
  //  console.log(users[i].screenTime[0].date);
  //  console.log(users[i].screenTime[0].usage); 
  
    //loop through screentime to find the given date
    for (let f=0 ; f<users[i].screenTime.length ; f++){
      //add screentime for given date
      if (users[i].screenTime[f].date == date){
        let total = 0;
        for(var time in users[i].screenTime[f].usage){
          //console.log(time); // alerts key
          //console.log(users[i].screenTime[0].usage[time]); //alerts key's value
          total += users[i].screenTime[f].usage[time];
        }     
        
        //console.log("Total: "+ total);
        //is > 100? add to list
        if (total >= 100){
          array.push(users[i].username);
        }
      }
    }
  }
  //console.log("user list: "+ array);
  return array;

};

/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");

  hexStr = hexStr.replace("#","");

  var bigint = parseInt(hexStr, 16);
  var r = (bigint >> 16) & 255;
  var g = (bigint >> 8) & 255;
  var b = bigint & 255;

  return "rgb("+r+","+g+","+b+")";

};

/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
