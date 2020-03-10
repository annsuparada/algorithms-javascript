function countingValleys(n, s) {
    let height = 0;
    let valleys = 0;
    for (let step = 0; step < s.length; step++){
        if (s[step] === 'D'){
            height ++
            if (height === 0){
                valleys ++
            }
        } else {
            height --
        }
    }
    return valleys
}
const n = 8
const s = 'UDDDUDUU'
console.log(countingValleys(n, s))