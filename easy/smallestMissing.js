//using binary search
// o(log n) runtime


const smallestMissing = (arr) => {
    var start = arr[0]
    var end = arr.length -1
    var midpoint = Math.floor((start + end )/ 2)
    var current = arr.length
    if (start !== 0) {
        return 0
    }
    if (arr.length){
        for (let i = 0; i <= arr.length; i++){
         
            if (current === midpoint +1) {
                return midpoint +1
            }
            if (arr[midpoint] !== midpoint){
                end = midpoint 
            } else if (arr[midpoint] === midpoint) {
                start = midpoint + 1
               
            } 
            else if (current === midpoint +1) {
                return midpoint +1
            }
            
            midpoint = Math.floor((start + end )/ 2)
        }
        return midpoint
        
    }
    return current
}


// console.log('3 == ',smallestMissing([0, 1, 2, 6, 9, 11, 15])) //3
// console.log('0 == ',smallestMissing([1, 2, 3, 4, 6, 9, 11, 15])) //0
// console.log('5 == ',smallestMissing([0,1, 2, 3, 4, 6, 9, 11, 15])) //5
// console.log('7 == ',smallestMissing([0, 1, 2, 3, 4, 5, 6])) // 7
// console.log('0 == ',smallestMissing([])) // 0


