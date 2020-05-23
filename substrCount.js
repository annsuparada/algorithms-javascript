
function substrCount(n, s) {
    let counter = n

    for (let i = 0; i < s.length; i++){
        if (s[i] === s[i + 1]) { counter ++ } 
        if (s[i] === s[i + 2]) { counter ++ } 
        if (s[i] === s[i + 1] && 
            s[i] === s[i + 2] &&
            s[i] === s[i + 3] ) { 
            counter ++ 
            }

    }
    return counter

}

console.log(substrCount(727310, ''))