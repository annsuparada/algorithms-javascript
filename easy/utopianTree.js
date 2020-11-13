// The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter.

// A Utopian Tree sapling with a height of 1 meter is planted at the onset of spring. How tall will the tree be after  growth cycles?

// For example, if the number of growth cycles is , the calculations are as follows:
// Period  Height
// 0          1
// 1          2
// 2          3
// 3          6
// 4          7
// 5          14

// Function Description

// Complete the utopianTree function in the editor below.

// utopianTree has the following parameter(s):

// int n: the number of growth cycles to simulate
// Returns

// int: the height of the tree after the given number of cycles

function utopianTree(n) {
  let growh = 1;
  if (n === 0) return growh;
  for (let i = 1; i < n + 1; i++) {
    //ood num
    if (i % 2 === 1) {
      growh *= 2;
    }

    //even num
    if (i % 2 === 0) {
      growh += 1;
    }
  }
  return growh;
}

console.log(utopianTree(4)); //7
console.log(utopianTree(3)); //6
console.log(utopianTree(1)); //6
