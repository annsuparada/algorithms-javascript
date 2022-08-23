// Write a function that takes in an array of integers and returns a boolean representing whether the array is monotonic

function isMonotonic1(array) {
  for (let idx = 0; idx < array.length; idx++) {
    let firstIdx = array[idx];
    let secondIdx = array[idx + 1];
    let i = idx;
    let j = idx + 1;
    if (array.length <= 2) return true;
    if (firstIdx > secondIdx && firstIdx !== secondIdx) {
      while (j < array.length) {
        if (array[j] > array[i]) {
          return false;
        }
        i++;
        j++;
      }
      return true;
    } else if (firstIdx < secondIdx && firstIdx !== secondIdx) {
      while (j < array.length) {
        if (array[i] > array[j]) {
          return false;
        }
        i++;
        j++;
      }
      return true;
    }
  }
  return true;
}

// optimized solution
function isMonotonic(array) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      isNonDecreasing = false;
    }
    if (array[i] > array[i - 1]) {
      isNonIncreasing = false;
    }
  }

  return isNonDecreasing || isNonIncreasing;
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])); // true
console.log(isMonotonic([])); // true
console.log(isMonotonic([1, 2])); // true
console.log(isMonotonic([-1, -1, -1, -1, -1, -1])); // true
console.log(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])); // false
console.log(isMonotonic([-1, -1, -1, 2, -1, -1])); // false
