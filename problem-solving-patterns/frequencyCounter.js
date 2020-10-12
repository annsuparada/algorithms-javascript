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

console.log(anagram("", "")); //true
console.log(anagram("aaz", "zza")); //false
console.log(anagram("anagram", "nagaram")); //true
console.log(anagram("rat", "car")); //false
console.log(anagram("awesome", "awesom")); //false
console.log(anagram("qwerty", "qeywrt")); //true
console.log(anagram("texttwisttime", "timetwisttext")); //true
