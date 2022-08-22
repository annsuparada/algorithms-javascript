// Write a function that takes in two non-empty arrays of interger, finds the pair of numbers(one from each array) whose absolute differnce is closest to zero, and return an array containing these two numbers, with the number from first array in the first position

function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let result = [];
  let smallestSum = Infinity;
  let current = Infinity;
  let inxOne = 0;
  let inxTwo = 0;

  while (inxOne < arrayOne.length && inxTwo < arrayTwo.length) {
    let numOne = arrayOne[inxOne];
    let numTwo = arrayTwo[inxTwo];
    current = Math.abs(arrayOne[inxOne] - arrayTwo[inxTwo]);

    if (numOne < numTwo) {
      inxOne++;
    } else if (numTwo < numOne) {
      inxTwo++;
    } else {
      return [numOne, numTwo];
    }

    if (smallestSum > current) {
      smallestSum = current;
      result = [numOne, numTwo];
    }
  }

  return result;
}
// time: o(nLog(n) + mLog(m)) | space: o(1)

console.log([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]); //[26, 28]
console.log([-1, 5, 10, 20, 3], [26, 134, 135, 15, 17]); // [20, 17]
