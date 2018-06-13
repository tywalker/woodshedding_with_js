let arr = [0 ,84, 34, 107, 116, 85, 23, 2, 58, 10];
let lgArr = []
for (let i = 0; i <= 1000; i++) {
  lgArr.push(Math.floor(Math.random() * 1000))
}

let swaps = true;

function insertionSort(myArr) {
  let newArr = []
  for (let i = 0; i <= myArr.length; i++) {
    if (newArr.length === 0) { newArr.push(myArr[i])};
    for (let l = newArr.length - 1; l >= 0; l--) {
      if (myArr[i] > newArr[l]) {
        newArr.splice(l + 1, 0, myArr[i]);
        break;
      }
    }
  }
  console.log(newArr)
}

function fInsertionSort(myArr) {
  let newArr = []
  myArr.map( (num, i) => {
    if (newArr.length === 0) { newArr.push( num )}
    newArr.reverse().map( (newNum, l) => {
      if (num > newNum) {
        console.log(num, newNum, l)
        console.log(newArr)
        newArr.splice(l + 1, 0, num);
        return;
      }
    })
  })
  console.log(newArr)
}

fInsertionSort(arr)
// insertionSort(arr)
