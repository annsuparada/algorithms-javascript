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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
