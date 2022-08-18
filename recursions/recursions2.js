function reverse(str) {
  let newStr = "";
  function helper(helperInput) {
    let strLength = helperInput.length;
    if (strLength === 0) return;
    newStr += helperInput.charAt(strLength - 1);
    helper(helperInput.substring(0, strLength - 1));
  }

  helper(str);
  return newStr;
}

// console.log(reverse("awesome")); // 'emosewa'
// console.log(reverse("rithmschool")); // 'loohcsmhtir'

function isPalindrome(str) {
  let backWard = "";
  function helper(helperInput) {
    let strLength = helperInput.length;
    if (strLength === 0) return;
    backWard += helperInput.charAt(strLength - 1);
    helper(helperInput.substring(0, strLength - 1));
  }
  helper(str);
  if (str === backWard) return true;
  else return false;
}

// console.log(isPalindrome("awesome")); //false
// console.log(isPalindrome("foobar")); //false
// console.log(isPalindrome("tacocat")); //true
// console.log(isPalindrome("amanaplanacanalpanama")); //true
// console.log(isPalindrome("amanaplanacanalpandemonium")); //false

function flatten(arr) {
  let newArr = [].concat.apply([], arr);
  return flatten([].concat.apply([], arr));
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1, 2, 3]
