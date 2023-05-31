//You walk into a theatre you're about to see a show in. The usher within thetheatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat that gives youthe most space. You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).

// You walk into a theatre you're about to see a show in. The usher within the theatre walks you to your row and mentions you're allowed to sit anywhere within the given row. Naturally you'd like to sit in the seat that gives you the most space. You also would prefer this space to be evenly distributed on either side of you (e.g. if there are three empty seats in a row, you would prefer to sit in the middle of those three seats).

// You may assume that someone is always sitting in the first and last seat of the row. Whenever there are two equally good seats, you should sit in the seat with the lower index. If there is no seat to sit in, return -1. The given array will always have a length of at least one and contain only ones and zeroes.

function bestSeat(seats) {
  let bestSeat = -1;
  let maxSpace = 0;
  // create 2 pointers
  // left pointer at idx 0, right at idx1
  // move righ pointer to the righ until hit 1
  // find max space by right idx - left idx - 1
  // if max space greater than prvious one, update it
  // move left pointer to right pointer
  // continue move righ pointer until hit 1 again
  // repeat 
  let left = 0;
  let right = 1;
  while (right <= seats.length) {
    if (seats[right] === 1) {
      let newMaxSpace = right - left - 1
      if (newMaxSpace > maxSpace) {
        maxSpace = newMaxSpace
        bestSeat = Math.floor((right + left) / 2)
      }
      left = right
    }
    right ++;
  }
  
  //return best seat
  return bestSeat;
}


console.log(bestSeat([1])) // -1
console.log(bestSeat([1, 0, 1, 0, 0, 0, 1])) // 4
console.log(bestSeat([1, 0, 1])) // 1
console.log(bestSeat([1, 0, 0, 1])) // 1
console.log(bestSeat([1, 1, 1])) // -1
console.log(bestSeat([1, 0, 0, 1, 0, 0, 1])) // -1
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1])) // 3
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1])) // 4
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1])) // 4
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])) // 13
console.log(bestSeat([1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1])) // 13
console.log(bestSeat([1, 0, 0, 0, 1, 0, 0, 0, 0, 1]
)) // 6
console.log(bestSeat([1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1])) // 3
console.log(bestSeat([1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1])) // 5