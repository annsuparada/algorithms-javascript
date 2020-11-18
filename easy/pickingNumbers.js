function pickingNumbers(a) {
  let obj = {};
  let longestLength = 0;
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = obj[a[i]] + 1 || 1;
  }

  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    let tempDiff = keys[i] - keys[i + 1];
    let tempSum = obj[keys[i]] + obj[keys[i + 1]];
    //if only one value is grater then two values
    if (obj[keys[i]] > longestLength) {
      longestLength = obj[keys[i]];
    }
    if (Math.abs(tempDiff) <= 1 && tempSum > longestLength) {
      longestLength = tempSum;
    }
  }

  return longestLength;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); //3 [4,3,3,]
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); //5 [1,1,2,2,2]
console.log(
  pickingNumbers([
    4,
    97,
    5,
    97,
    97,
    4,
    97,
    4,
    97,
    97,
    97,
    97,
    4,
    4,
    5,
    5,
    97,
    5,
    97,
    99,
    4,
    97,
    5,
    97,
    97,
    97,
    5,
    5,
    97,
    4,
    5,
    97,
    97,
    5,
    97,
    4,
    97,
    5,
    4,
    4,
    97,
    5,
    5,
    5,
    4,
    97,
    97,
    4,
    97,
    5,
    4,
    4,
    97,
    97,
    97,
    5,
    5,
    97,
    4,
    97,
    97,
    5,
    4,
    97,
    97,
    4,
    97,
    97,
    97,
    5,
    4,
    4,
    97,
    4,
    4,
    97,
    5,
    97,
    97,
    97,
    97,
    4,
    97,
    5,
    97,
    5,
    4,
    97,
    4,
    5,
    97,
    97,
    5,
    97,
    5,
    97,
    5,
    97,
    97,
    97,
  ])
); // 50 [97]
