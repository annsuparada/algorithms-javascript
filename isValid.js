// Sherlock considers a string to be valid if all characters of the string appear the same number of times. It is also valid if he can remove just  character at  index in the string, and the remaining characters will occur the same number of times. Given a string , determine if it is valid. If so, return YES, otherwise return NO.

// For example, if , it is a valid string because frequencies are . So is  because we can remove one  and have  of each character in the remaining string. If  however, the string is not valid as we can only remove  occurrence of . That would leave character frequencies of .

// Function Description

// Complete the isValid function in the editor below. It should return either the string YES or the string NO.

// isValid has the following parameter(s):

// s: a string

function isValid(s) {
    //store s in hashmap and track char as value
    let sTrack = {}

    for (let i = 0; i < s.length; i++){
        sTrack[s[i]] = (sTrack[s[i]]) + 1 || 1
       
    }
    
    // find most frequent
    let compare = 0
    let mostFrequent
    let frequentTrack = {}
    let i 
    
    for (i in sTrack){
        frequentTrack[sTrack[i]] = (frequentTrack[sTrack[i]]) + 1 || 1
         if (frequentTrack[sTrack[i]] > compare){
            compare = frequentTrack[sTrack[i]]
            mostFrequent = sTrack[i]
        }
    }
    
    //remove one charactor 
    let value 

    for (value in sTrack){
        if (mostFrequent !== sTrack[value]){
            sTrack[value] -= 1
            break
        }

    }

    //check value and return
     for (value in sTrack){
          if (mostFrequent !== sTrack[value] 
           && sTrack[value] !== 0 ){
            return "NO"
        }
    }
    return "YES"

}


console.log(isValid('aabbcd')) // NO
console.log(isValid('aabbccddeefghi')) // NO
console.log(isValid('abcdefghhgfedecba')) // YES
