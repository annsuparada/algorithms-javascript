function plusMinus(arr) {
 
    let positiveNum = 0
    let negativeNum = 0
    let zoro = 0
    let result = []

    for (let i = 0; i < arr.length; i ++){
        if (arr[i] > 0) {
            positiveNum ++
        } else if (arr[i] < 0) {
            negativeNum ++
        } else if (arr[i] === 0) {
            zoro ++
        }
    } 

    console.log(positiveNum / arr.length)
    console.log(negativeNum / arr.length)
    console.log(zoro / arr.length)
}