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
  //console.log("Sum: "+sum);*/
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
const createRange = (start, end, step = 1) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");

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
  users.forEach((user)=>{
    //loop through screentime to find the given date
    for (let f=0 ; f<user.screenTime.length ; f++){
      //add screentime for given date
      if (user.screenTime[f].date == date){
        let total = 0;
        for(var time in user.screenTime[f].usage){
          //console.log(time); // alerts key
          //console.log(users[i].screenTime[0].usage[time]); //alerts key's value
          total += user.screenTime[f].usage[time];
        }     
        
        //is >= 100? add to list
        if (total >= 100){
          array.push(user.username);
        }
      }
    }
  });

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

const isRow = (arr => {
  let ret = null
    
  const isX = (currentValue) => currentValue == 'X';
  const is0 = (currentValue) => currentValue == '0';
  console.log(arr);
  arr.forEach(row => {
    if (row.every(isX)) {
      console.log("Found X!");
      ret = 'X';
    } else if (row.every(is0)) {
      console.log("Found 0!");
      ret = '0';
    }
  })
  return ret;
});
  
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");

  let retVal = null;
    
  retVal = isRow(board);
  
  // Create a new array
  let newArray = Array(3).fill().map(() => Array(3).fill(undefined));
  // Fill with values - putting the board on it's side
  for (let i = 0; i<3 ; i++) {
    for (let j = 0; j<3 ; j++){
      // Save Vertical entries to new array
      newArray[j][i] = board[i][j];
    }
  } 
  retVal = isRow(newArray);
  
  //For each horizontal line in array
  // board.forEach((row)=>{
  //     if (row.every(isX))
  //       retVal = 'X';
  //     if (row.every(is0))
  //       retVal = '0';  
  // })

  // let newArray = Array(3).fill().map(()=>Array(3).fill(undefined));

  // for (let i = 0; i<3 ; i++) {
  //   for (let j = 0; j<3 ; j++){
  //     // Save Vertical entries to new array
  //     newArray[j][i] = board[i][j];
  //   }
  // } 
  // //console.log("NEW ARRAY: ", newArray);
  // newArray.forEach((row)=>{
  //   if (row.every(isX))
  //     retVal = 'X';
  //   if (row.every(is0))
  //     retVal = '0';  
  // })
  
  return retVal; //return null if neither x nor 0 won
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};
