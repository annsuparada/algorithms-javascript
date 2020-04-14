//return interger
// number of char that does not match
function makeAnagram(a, b) {
    let aTrack = {}
    let counter = 0 //count macth char
    let result = 0
    for (let i = 0; i < a.length; i++){
        aTrack[a[i]] = (aTrack[a[i]]) + 1 || 1
    }
    for (let i = 0; i < b.length; i++){
        if (aTrack[b[i]] > 0){
            aTrack[b[i]] -= 1
            counter += 2
        }  
    }
    result = (a.length + b.length) - counter

    return result
}

console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')) //30