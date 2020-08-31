const fs = require('fs');
// Techsico Programming Challenge

// Given a set of strings find all substrings of 4 or more characters
// which occur in multiple strings and the strings which contain them.  

// Strings length will range from 4 to 260 characters, 
// and the number of strings in the set is in excess of 250,000

// EXAMPLE:
// 	Given this set of strings
// {“abcdefg”,”abcdthr”,”abcdtef”}
// 	The correct answer is
// “abcd” is found in the strings “abcdefg”, “abcdthr”, “abcdtef”
// “bcdt” is found in the strings “abcdthr”, “abcdtef”
// “abcdt” is found in the strings “abcdthr”, “abcdtef”



// Pseudo code from the interview 

// create dict
// iterate the set
    //check substrings
    // if s[i] === s[i + 1]
    // check every substring???
// push to dict

// return dict 



//my solution
    // runtime complexity = O(n^2)
    // space complexity = O(n^2)

// const stringSet = JSON.parse(fs.readFileSync("./stringSet.json" ));
// const mySet = new Set(stringSet)


//given input
let setOfStr = new Set(["abcdefg", "abcdthr", "abcdtef"]);

const findSubstrings = (setOfStr) => {
    let output = {};
    let storage = {};
    let valuesOfSet = setOfStr.values();

    // iterate througth valuesOfSet
    for (let str of valuesOfSet) {

        //iterate each substrings
        for (let j = 0; j < str.length; j++) {

            //create new string
            let newStr = "";

            //iterate each characters inside the substring
            for (let i = j; i < str.length; i++) {

                //increment each characters on every new strings
                newStr += str[i];

                //only find substrings of 4 or more 
                if (newStr.length >= 4) {
                    //push key, value to the storage
                    storage[newStr] = storage[newStr] ? storage[newStr] : [];
                    storage[newStr].push(str);
                };
            };
        };
    };

    // find multiple strings 
    for (const [key, value] of Object.entries(storage)) {

        //only get values that have more than one substrings
        if (value.length > 1) {

            //push key, value to the output
            output[key] = value;
        };
    };

    return output;
};

console.log(findSubstrings(setOfStr));

