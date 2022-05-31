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


// Write a function called minSubArrayLen which accepts two parameters - an array of positive interger and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. if there isn't one, return 0 instead.

function minSubArrayLen(arr, num) {
  // create maxSum 
  // create tempSumLen
  // create tempIdex

  // iterate through the given array 
  // sum the subarray until  maxSum >= num and then update tempIdex, break the loop
  // iterate through the same array but start at tempIdex
  // firs pointer at index 1 and second pointer at tempIdex + i
  // subtract maxSum by arr[firstPointer] and add arr[tempIdex + i]
  // repeat 
  // if tempSum > maxSum then update tempSum

}

// console.log(minSubArrayLen([2,3,1,2,4,3],7)) // 2 
// console.log(minSubArrayLen([2,1,6,5,4],9)) // 2 
// console.log(minSubArrayLen([3,1,7,112,9,8,21,62,33,19], 52)) // 1
// console.log(minSubArrayLen([1,4,16,22,5,7,88,9,10], 39)) // 3
// console.log(minSubArrayLen([1,4,16,22,5,7,88,9,10], 55)) // 5
// console.log(minSubArrayLen([4,3,3,8,1,2,3], 11)) // 2
// console.log(minSubArrayLen([], 95)) // 0


function binarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle = Math.round((left + right) / 2);
  while (array[middle] !== value && left <= right) {
    middle = Math.round((left + right) / 2);
      if (array[middle] > value) {
          right = middle - 1;
      } else {
          left = middle + 1;
      } 
  }
  
  if (array[middle] === value) {
    return middle
  }

  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 1));