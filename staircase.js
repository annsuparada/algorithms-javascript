//Observe that its base and height are both equal to , 
//and the image is drawn using # symbols and spaces. 
//The last line is not preceded by any spaces.

//Write a program that prints a staircase of size .

//Function Description

//Complete the staircase function in the editor below. 
//It should print a staircase as described above.

function staircase(n) {
    let space = ' '
    let hash = "#"

    for (let i = 1; i <= n; i++){
        console.log(space.repeat(n-i) + hash.repeat(i))
    }
}

console.log(staircase(20))