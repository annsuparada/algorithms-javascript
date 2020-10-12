//get to strings, write a function to determine if the second is an anagram of the first. An anagram is a word, phrase, or name fromed by rearranging the letters of another, suach as cinema, formed form iceman

function anagram(str1, str2) {
  let lookup = {};

  if (str1.length !== str2.length) return false;

  for (let key of str1) {
    lookup[key] = (lookup[key] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    // console.log(lookup);
    let letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// console.log(anagram("", "")); //true
// console.log(anagram("aaz", "zza")); //false
// console.log(anagram("anagram", "nagaram")); //true
// console.log(anagram("rat", "car")); //false
// console.log(anagram("awesome", "awesom")); //false
// console.log(anagram("qwerty", "qeywrt")); //true
// console.log(anagram("texttwisttime", "timetwisttext")); //true

function sameSequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) return false;

  let lookup = {};

  for (let i = 0; i < num1.length; i++) {
    let num = num1[i];
    lookup[num] = (lookup[num] || 0) + 1;
  }

  for (let i = 0; i < num2.length; i++) {
    if (!(num2[i] in lookup)) {
      return false;
    } else {
      lookup[num1] -= 1;
    }
  }
  return true;
}

console.log(sameSequency(182, 281)); // true
console.log(sameSequency(34, 14)); // false
console.log(sameSequency(3589578, 5789385)); // true
console.log(sameSequency(222, 22)); // false

//check if any duplicate among the arguments
function areThreeDuplicate() {
  let lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    let arg = arguments[i];
    lookup[arg] = (lookup[arg] || 0) + 1;
  }

  for (let key in lookup) {
    let value = lookup[key];
    if (value > 1) return true;
  }

  return false;
}

console.log(areThreeDuplicate(1, 2, 3)); // false
console.log(areThreeDuplicate(1, 2, 2)); // true
console.log(areThreeDuplicate("a", "b", "c", "a")); // true
