

function sockMerchant(n, ar) {
    let pairCount = 0
    let pairTrack = {}
    for (let i = 0; i < ar.length; i++){
       pairTrack[ar[i]] = (pairTrack[ar[i]] + 1) || 1 
        console.log(pairTrack)
    }
    for (value in pairTrack){
        pairCount += Math.floor(pairTrack[value] / 2)
    }
    
    return pairCount

    
}
const n = 100
const ar = [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]
const ar2 = [
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
    42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,42,
]
console.log(sockMerchant(n, ar))
// console.log(Math.floor(1 / 2))