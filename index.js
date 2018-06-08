///////
// Bubble Sort
///////

let arr = [4,5,3,8,9,1,3,2]

let sortedArr = arr.reduce(
  (acc, cur, i, arr) => {
      if (i === 0) { acc = arr}
      else { return acc }
  }
  ,[]
);

// console.log(sortedArr)
// for (var i = 1; i <= arr.length; i++) {
//   if (arr[i] < arr[i - 1]) {
//     let num = arr.slice(i - 1);
//     arr.splice(i - 1, 0, arr[i - 1]);
//     arr.splice(i, 1, num);
//   }
// }

// XOR algorithm
let a = arr[0]
let b = arr[1]

console.log(a, b)

a ^= b
b ^= a
a ^= b

console.log(a, b)
