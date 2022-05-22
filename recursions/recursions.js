function power(base, exponent) {
  //base case
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  return power(base + base, exponent - 1);
}

// console.log("test1", power(2, 0)); //1
// console.log("test1", power(2, 2)); //4
// console.log("test1", power(2, 4)); //16

function factorial(num) {
  if (num === 0) return 1;
  if (num === 1) return num;

  return (num *= factorial(num - 1));
}

// console.log(factorial(1)); //1
// console.log(factorial(2)); //2 (2 * 1)
// console.log(factorial(4)); //24 (4 * 3* 2 * 1)
// console.log(factorial(7)); //5040 (7 * 6 * 5 * 4 * 3 * 2 * 1)

function productOfArray(arr) {
  let num = 1;

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    num *= helperInput[0];
    helper(helperInput.slice(1));
  }

  helper(arr);

  return num;
}

// console.log(productOfArray([1, 2, 3])); //6 (1 * 2 * 3)
// console.log(productOfArray([1, 2, 3, 10])); //60 (1 * 2 * 3 * 10)

function recursiveRange(num) {
  if (num <= 1) return num;
  return (num += recursiveRange(num - 1));
}

// console.log(recursiveRange(6)); //21
// console.log(recursiveRange(10)); //55

function fib(num) {
  if (num <= 2) return 1;
  else return fib(num - 1) + fib(num - 2);
}

// console.log(fib(4)); //3
// console.log(fib(10)); //55

console.log(Math.pow(6, 2), Math.pow(8, 2));
