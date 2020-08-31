let setOfStr = new Set(["abcdefg", "abcdthr", "abcdtef"]);

const findSubstrings = (setOfStr) => {
    let output = {};
    let storage = {};
    let valuesOfSet = setOfStr.values();

    for (let str of valuesOfSet) {
        let i = 0;
        let newStr1 = "";
        let newStr2 = "";
        let newStr3 = "";
        if (str.length >= 7) {

            while (i < str.length) {
                
                newStr1 += str[i]
                newStr2 += str[i+1]
                newStr3 += str[i+2]
                
                if (newStr1.length >= 4) {
                    storage[newStr1] = storage[newStr1] ? storage[newStr1] : [];
                    storage[newStr1].push(str)
                }
                if (newStr2.length >= 4) {
                    storage[newStr2] = storage[newStr2] ? storage[newStr2] : [];
                    storage[newStr2].push(str)
                }
                if (newStr3.length >= 4) {
                    storage[newStr3] = storage[newStr3] ? storage[newStr3] : [];
                    storage[newStr3].push(str)
                }
                
                i++
            }
        }
    }

    // console.log(storage)
       // find multiple strings 
       for (const [key, value] of Object.entries(storage)) {

        //only get values that have more than one substrings
        if (value.length > 1) {

            //push key, value to the output
            output[key] = value;
        };
    };
    return output
}

// console.log(findSubstrings(setOfStr))

