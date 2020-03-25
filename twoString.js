// function twoStrings(s1, s2) {
//     let s1Track = {}
//     for (let i = 0; i < s1.length; i++){
//         const s1Letter = s1[i]
//         s1Track[s1Letter] = true
//     }
//     for (let i = 0; i < s2.length; i++){
//         const s2Letter = s2[i]
//         if (s1Track[s2Letter]){
//             return "YES"
//         }
//     }
//     return "NO"
// }


function fibonacci(n) {
    let ar = [0,1]
    if (n <= 1) { return 0}
    if (n === 2) {return [0,1,1]}
    
    for (let i = 1; i < n-1; i++){
        console.log(ar[i],ar[i-1])
        ar.push(ar[i] + ar[i - 1])
    }
    return ar
    
}
'{}{{}}[]|hf|dhsfhd'


function balancedBrackets(string) {
    let char = {}
    for (let i = 0; i< string.length; i++){
            char[string[i]] = (char[string[i]] + 1) || 1
        if (string[i] === '|' 
        && string[i+1] !== '|'
         ){
             console.log(i)
            return false
        }
    }
    if (char['('] !== char[')']
    || char['['] !== char[']']
    || char['{'] !== char['}']
    ){
        return false
    }
    return true
}

function threeNumberSum(arr, target) {
    arr.sort((a, b) => a - b)
    let current = 0
    let left = current + 1
    let right = arr.length - 1
    let result = []
    while(left < right){
      let tempSum = arr[left] + arr[current] + arr[right]
      console.log(tempSum,arr[current] , arr[left],  arr[right])
      if(tempSum === target) {
        let tempArr = [arr[current], arr[left], arr[right]]
        result.push(tempArr)
        left++
      } else if (tempSum < target) {
        left++
      } else if (tempSum > target) {
        right--
      }
      if(left === right) {
        current++
        left = current + 1
        right = arr.length - 1
      }
    }
    return result
  }
                                                          
                                                        // R
                        //                                 C  L 
  console.log(threeNumberSum([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 15 ], 1))
// console.log(fibonacci(8))

// console.log(balancedBrackets('dfsdgs{}||[]vd||'))