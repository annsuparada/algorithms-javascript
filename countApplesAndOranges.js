// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right.

// Given the value of  for  apples and  oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range )?

// For example, Sam's house is between  and . The apple tree is located at  and the orange at . There are  apples and  oranges. Apples are thrown  units distance from , and  units distance. Adding each apple distance to the position of the tree, they land at . Oranges land at . One apple and two oranges land in the inclusive range  so we print

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let countApples = 0 
    let countOranges = 0

    //iterate apples
        //sum with a
        // if apples[i] >= s && apples[i] <= t
            // increment countApple
    
    for (let i = 0; i < apples.length; i++) {
        let sumApple = apples[i] + a

        if (sumApple >= s && sumApple <= t){
            countApples ++
        }
    }
    //repeat with oranges
    
    for (let i = 0; i < oranges.length; i++){
        let sumOrange = oranges[i] + b

        if (sumOrange >= s && sumOrange <= t){
            countOranges ++
        }
    }
    
    console.log(countApples)
    console.log(countOranges)

}

console.log(countApplesAndOranges(7,10,4,12,[2,3,-4], [3,-2,-4]))

// console.log(countApplesAndOranges())

// console.log(countApplesAndOranges())