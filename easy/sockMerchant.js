// Alex works at a clothing store. There is a large pile of socks that must be paired by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock

function sockMerchant(n, ar) {
  let pairCount = 0;
  let pairTrack = {};
  for (let i = 0; i < ar.length; i++) {
    pairTrack[ar[i]] = pairTrack[ar[i]] + 1 || 1;
  }
  let sock;
  for (sock in pairTrack) {
    pairCount += Math.floor(pairTrack[sock] / 2);
    // console.log(Math.floor(pairTrack[sock] /2))
    // console.log(pairCount)
  }
  // console.log(pairTrack)
  return pairCount;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])); //3
