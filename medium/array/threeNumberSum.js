// Write a function that can takes in a non-empty array and interger representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The number in each triplet should be orderd in ascending order. If no three number sum up to the target sum, return an empty array

function threeNumberSum(array, targetSum) {
  // Time = O(N^2)
  // Space = O(N)
  const sortedArray = array.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < sortedArray.length - 2; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;
    while (left < right) {
      let tempSum = sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (tempSum === targetSum) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left++;
        right--;
      } else if (tempSum < targetSum) {
        left++;
      } else if (tempSum > targetSum) {
        right--;
      }
    }
  }

  return result;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
