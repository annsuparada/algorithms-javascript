// You're given an array of integers and an integer. Write a function that moves all instances of that interfer in the array to the end of the array and return the array.
// The function should perform this in place and doesn't need to maintain the order of the other integets

function moveElementToEnd(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let numOne = array[left];
    let numTwo = array[right];
    if (numOne !== toMove) {
      left++;
    } else if (numTwo === toMove) {
      right--;
    } else if (numOne === toMove && numTwo !== toMove) {
      array[left] = numTwo;
      array[right] = numOne;
      left++;
      right--;
    }
  }
  return array;
}

// optimized solotion
function moveElementToEnd2(array, toMove) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    while (left < right && array[right] == toMove) {
      right--;
    }
    if (array[left] === toMove) {
      let numOne = array[left];
      let numTwo = array[right];
      array[left] = numTwo;
      array[right] = numOne;
    }
    left++;
  }
  return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)); //[1,3,4,2,2,2,2,2]
console.log(moveElementToEnd([3, 1, 2, 4, 5], 3)); // [1,2,3,4,5,3]
