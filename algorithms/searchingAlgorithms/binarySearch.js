function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.round((left + right) / 2);

    if (arr[mid] > val) {
      right = mid;
    }
    if (arr[mid] < val) {
      left = mid;
    }
    if (arr[mid] === val) {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
console.log(binarySearch([1, 2, 3, 4, 5], 3)); //2
console.log(binarySearch([1, 2, 3, 4, 5], 5)); //4
console.log(binarySearch([1, 2, 3, 4, 5], 6)); //-1
