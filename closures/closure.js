console.log("working")

const closureCurry = (x, y) => {
  return (z = 0) => {
    if (z) {
      return x + y + z;
    } else {
      return x + y;
    }
  }
}

const closure = () => {
  let x = 14;
  let y = 20;
  const returnOuterValues = () => {
    return x * y;
  }

  return returnOuterValues();
}

let answer = closure();
console.log(answer)
