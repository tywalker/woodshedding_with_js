console.log("working")

const closure = (x, y) => {
  var h = "hoisted";
  x = 24;
  y = 25;
  return (z) => {
    let add;
    if (z) {
      add = x + y + z;
    } else {
      add = x + y;
    }
    return add
  }

  return x + y;
}

let c = closure(24, 68);

console.log(c)
