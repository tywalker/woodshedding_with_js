console.log("working")

const closure = (x, y) => {
  return (z = 0) => {
    if (z) {
      return x + y + z;
    } else {
      return x + y;
    }
  }
}

let addZ = closure(50, 50);
let z = addZ();

console.log(closure(50,50)())
console.log(closure(50,50)(800))
