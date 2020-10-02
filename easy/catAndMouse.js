// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of , , and  representing the respective positions for cats  and , and for mouse . Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// Example

// The cats are at positions  (Cat A) and  (Cat B), and the mouse is at position . Cat B, at position  will arrive first since it is only  unit away while the other is  units away. Return 'Cat B'.

// Function Description

// Complete the catAndMouse function in the editor below.

// catAndMouse has the following parameter(s):

// int x: Cat 's position
// int y: Cat 's position
// int z: Mouse 's position
// Returns

// string: Either 'Cat A', 'Cat B', or 'Mouse C'

function catAndMouse(x, y, z) {
  let catA = Math.abs(x - z);
  let catB = Math.abs(y - z);

  if (catA < catB) return "Cat A";
  if (catB < catA) return "Cat B";
  if (catA === catB) return "Mouse C";
}

console.log("test 1:", catAndMouse(1, 2, 3)); // 'Cat B'
console.log("test 2:", catAndMouse(1, 3, 2)); // 'Mouse C'
