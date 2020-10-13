//implement a function which accepts a sorted array, and count the uniqe values in the array

function countUniqueValues(arr) {
  let i = 0;
  let pointer = i + 1;

  if (arr.length === 0) return 0;
  while (pointer < arr.length) {
    if (arr[i] !== arr[pointer]) {
      i++;
      arr[i] = arr[pointer];
    }
    pointer++;
    if (pointer === arr.length) {
      return i + 1;
    }
  }
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
// console.log(countUniqueValues([])); //0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4

// Given a sorted array of intergers and a targer average, determine if there is a pair if values in the array where the average of the pair eguals the target average. There may be more then one pair that matches the average target.

function averagePair(arr, targetAverage) {
  let targetNum = targetAverage * 2;
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let tempSum = left + right;
    if (tempSum > targetNum) {
      right--;
    } else if (tempSum < targetNum) {
      left++;
    } else if (tempSum === targetNum) {
      return true;
    }
  }

  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false
