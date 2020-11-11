// Lily likes to play games with integers. She has created a new game where she determines the difference between a number and its reverse. For instance, given the number , its reverse is . Their difference is . The number  reversed is , and their difference is .

// She decides to apply her game to decision making. She will look at a numbered range of days and will only go to a movie on a beautiful day.

// Given a range of numbered days,  and a number , determine the number of days in the range that are beautiful. Beautiful numbers are defined as numbers where  is evenly divisible by . If a day's value is a beautiful number, it is a beautiful day. Print the number of beautiful days in the range.

// Function Description

// Complete the beautifulDays function in the editor below. It must return the number of beautiful days in the range.

// beautifulDays has the following parameter(s):

// i: the starting day number
// j: the ending day number
// k: the divisor
// Input Format

// A single line of three space-separated integers describing the respective values of , , and .

// Output Format

// Print the number of beautiful days in the inclusive range between i and k .

function beautifulDays(i, j, k) {
  let days = 0;
  let start = i;
  let end = j + 1;
  for (let i = start; i < end; i++) {
    let reverse = i.toString().split("").reverse().join("");
    let deviedNum = (i - reverse) / k;

    if (Number.isInteger(deviedNum)) {
      days++;
    }
  }
  return days;
}
console.log(beautifulDays(20, 23, 6)); //2
