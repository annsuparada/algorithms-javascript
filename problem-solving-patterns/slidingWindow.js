//Ginven an array of intergers and a number, writer a function, which finds the maximum sum of a subarray with the length of the number passed the the function.
// Note that a subarray must consit of consecutive elements from the original array.
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null
