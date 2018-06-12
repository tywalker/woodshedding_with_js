///////
// Bubble Sort
///////

let myArr = [4,5,3,8,9,1,7,25,54,62,67,34,12,98,104]
let lgArr = []
for (let i = 0; i <= 5000; i++) {
  lgArr.push(Math.floor(Math.random() * 1000))
}

const funcBubble = arr => {
  let doesSwap = false;

  let sortedArr = arr.reduce( (acc, cur, i) => {
    if (acc[i + 1] < acc[i]) {
      doesSwap = true;
      acc[i] ^= acc[i + 1], acc[i + 1] ^= acc[i], acc[i] ^= acc[i + 1];
      return acc;
    } else { return acc }
  }, arr);

  doesSwap ? funcBubble(sortedArr) : console.log(sortedArr);
}

funcBubble(lgArr)

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
