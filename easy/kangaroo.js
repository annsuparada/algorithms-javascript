// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo  starts at  with a jump distance  and kangaroo  starts at  with a jump distance of . After one jump, they are both at , (, ), so our answer is YES.

// Function Description

// Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

// kangaroo has the following parameter(s):

// x1, v1: integers, starting position and jump distance for kangaroo 1
// x2, v2: integers, starting position and jump distance for kangaroo 2

function kangaroo(x1, v1, x2, v2) {
    let jump1 = x1
    let jump2 = x2
    let i = 0

    while (i < 10000){
        jump1 += v1
        jump2 += v2
        if (jump1 === jump2) {
            return "YES"
        }

        i++
    }

    return "NO"
}

console.log(kangaroo(0, 3, 4, 2)) // YES
console.log(kangaroo(0, 2, 5, 3)) // NO
console.log(kangaroo(14, 4, 98, 2)) // YES
console.log(kangaroo(4523, 8092, 9419, 8076)) // YES