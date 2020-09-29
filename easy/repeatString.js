function repeatedString(s, n) {
    let times = Math.floor(n / s.length)
    let counter = 0
    let repeatLength = s.length * times
    let theRest = n - repeatLength
    for (let i = 0; i < s.length; i++){
        if (s[i] === 'a') {
            counter ++
        }
    }
    let result = counter * times
    if (n !== repeatLength) {
        for (let i = 0; i < theRest; i++){
            if (s[i] === 'a') {
                result ++
            }
        }
    }
    return result

}

// const n = 10
// const s = 'aba'

const n = 1000000000000
const s = 'a'
console.log(repeatedString(s,n))