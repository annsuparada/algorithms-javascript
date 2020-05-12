
function alternatingCharacters(s) {
    let counter = [];

    for (let i = 0; i < s.length; i++){
        let char = s[i]

        if (char === s[i+1]){
            counter.push(s[i])
        } 

        if (char !== s[i+1]){
            char = s[i]
        }
    }
   
    return counter.length

}