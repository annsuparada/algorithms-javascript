// You are given a string containing characters  and  only. Your task is to change it into a string such that there are no matching adjacent characters. To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.
// For example, given the string , remove an  at positions  and  to make  in  deletions.

// Function Description
// Complete the alternatingCharacters function in the editor below. It must return an integer representing the minimum number of deletions to make the alternating string.

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

console.log(alternatingCharacters('AAAA')) //3
console.log(alternatingCharacters('BBBBB')) //4
console.log(alternatingCharacters('ABABABAB')) //0
console.log(alternatingCharacters('BABABA')) //0
console.log(alternatingCharacters('AAABBB'))//4




