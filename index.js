///////
// Bubble Sort
///////

let myArr = [4,5,3,8,9,1,7,25,54,62,67,34,12,98,104]

// let sortedArr = arr.reduce(
//   (acc, cur, i, arr) => {
//       if (i === 0) { acc = arr}
//       else { return acc }
//   }
//   ,[]
// );

/**
 * OO style recursion
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
const swapLeft = (arr) => {
  let swaps = false;
  for (var i = 1; i <= arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      swaps = true
      arr[i - 1] ^= arr[i], arr[i] ^= arr[i - 1], arr[i - 1] ^= arr[i]
    }
  }

  swaps ? swapLeft(arr) : console.log(arr)
}

swapLeft(myArr)
