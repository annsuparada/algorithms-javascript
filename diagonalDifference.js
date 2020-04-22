//Given a square matrix, calculate the absolute difference between 
//the sums of its diagonals.


//It must return an integer representing the absolute diagonal difference.

function diagonalDifference(arr) {
    let leftToRightSum = 0;
    let rightToleftSum = 0;
    let result = 0

        //row start from left, col start from right
    for (let row = 0, col = arr.length - 1; 
            row < arr.length, col > -1; 
            row++, col--)
        {
          leftToRightSum += arr[row][row]
          rightToleftSum += arr[row][col]  

    }
    // find the different
    result = leftToRightSum - rightToleftSum

    //return absolute diff
    return Math.abs(result)
 
}

console.log(diagonalDifference([[1, 2, 3],
                                [4, 5, 6],
                                [9, 8, 9]])) // return 2
                    //1+5+9 = 15 , 3+5+9 = 17, 15 - 17 = absolute diff is 2 

