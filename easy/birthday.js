// Given a chocolate bar, two children, Lily and Ron, are determining how to share it. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// You must determine how many ways she can divide the chocolate.

// Consider the chocolate bar as an array of squares, . She wants to find segments summing to Ron's birth day,  with a length equalling his birth month, . In this case, there are two segments meeting her criteria:  and .

// Function Description

// Complete the birthday function in the editor below. It should return an integer denoting the number of ways Lily can divide the chocolate bar.

// birthday has the following parameter(s):

// s: an array of integers, the numbers on each of the squares of chocolate
// d: an integer, Ron's birth day
// m: an integer, Ron's birth month

function birthday(s, d, m) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let tempSum = 0;
    let tempLength = 0;

    for (let j = i; j < i + m; j++) {
      tempSum += s[j];
      tempLength++;

      if (tempSum === d && tempLength === m) {
        answer++;
      }
    }
  }

  return answer;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2)); //2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)); //0
console.log(birthday([4], 4, 1)); //1
