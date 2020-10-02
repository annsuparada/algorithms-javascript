// A teacher asks the class to open their books to a page number.
// A student can either start turning pages from the front of the book or from the back of the book.
// They always turn pages one at a time. When they open the book, page  is always on the right side:
// When they flip page , they see pages  and . Each page except the last page will always be printed on both sides.
// The last page may only be printed on the front, given the length of the book. If the book is  pages long,
// and a student wants to turn to page , what is the minimum number of pages to turn? They can start at
// the beginning or the end of the book.

// Given  and , find and print the minimum number of pages that must be turned in order to arrive at page .

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
