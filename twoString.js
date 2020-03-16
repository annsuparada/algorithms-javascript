function twoStrings(s1, s2) {
    let s1Track = {}
    for (let i = 0; i < s1.length; i++){
        const s1Letter = s1[i]
        s1Track[s1Letter] = true
    }
    for (let i = 0; i < s2.length; i++){
        const s2Letter = s2[i]
        if (s1Track[s2Letter]){
            return "YES"
        }
    }
    return "NO"