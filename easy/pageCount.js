function pageCount(n, p) {
  let half = n / 2;
  let diff = n - p;
  let turning = diff / 2;

  if (p === n || p === 1) return 0;
  console.log("\n");
  if (p < half) {
    console.log("start");
    return Math.floor(p / 2);
  } else {
    console.log("last");
    if (n % 2 === 1) {
      console.log("kee");
      //   if (turning % 2 === 0) return turning - 1;
      return Math.floor(turning);
    }
    if (n % 2 === 0) {
      console.log("koo", turning);
      if (diff === 1) return 1;
      if (turning % 2 === 0) return turning - 1;
      return Math.floor(turning);
    }
  }
}

console.log("test 1:", pageCount(6, 2)); //1
console.log("test 2:", pageCount(5, 4)); //0
console.log("test 3:", pageCount(6, 5)); //1
console.log("test 4:", pageCount(18183, 18042)); //70
console.log("test 5:", pageCount(7, 3)); //1
console.log("test 6:", pageCount(6, 3)); //1
console.log("test 7:", pageCount(37455, 29835)); //3810
console.log("test 8:", pageCount(95073, 17440)); //8720
// console.log(Math.floor(70.5));
