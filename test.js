// Given an array of integers where each element represents the maximum number of steps 
//that can be made forward from that element, 
//write a function to return the minimum number of jumps to reach the end of the array, 
//starting from the first element. If an element is 0, then we cannot move through that element.
// Example:
        //0   1  2  3  4  5  6  7  8  9  10
// Input: [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3   // going from 1 -> 3 -> 8 -> 9
// Analyze the time and space complexity of your solution.

const minJumps = (arr) =>{
    let jumpCounter = 0

    //for loop
    for (let i = 0; i < arr.length; i++){
        i = i + arr[i]
        jumpCounter ++
    }
    return jumpCounter
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]))
console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9]));  // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  // should print 4