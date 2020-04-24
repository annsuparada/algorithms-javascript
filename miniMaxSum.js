//Given five positive integers, find the minimum and maximum values that can be calculated by 
//summing exactly four of the five integers. Then print the respective minimum and maximum values
// as a single line of two space-separated long integers.



function miniMaxSum(arr) {
    const sortedArr = arr.sort((a,b)=> {return a - b})
    let minSum = 0
    let maxSum = 0 

    for (let i = 0; i < arr.length; i++){
        minSum += arr[i]
        maxSum += arr[i]
    }
    
    minSum = minSum - sortedArr[4]
    maxSum = maxSum - sortedArr[0]

    console.log(minSum, maxSum)

}

console.log(miniMaxSum([1,2,3,4,5])) //10, 14