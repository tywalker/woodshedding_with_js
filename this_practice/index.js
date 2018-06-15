console.log(this)

const f = (x, y) => x + y;

var name = {
  x: "bil",
  y: "billy",
  xY: function() {
    return this.x
  },
  yX: function() {
    return this.y
  }
}

function returnThing( x, callback ) {
  console.log(this)
  callback(x)
}

function sayThing(x) {
  console.log(this)
  console.log(x)
}

returnThing("Bio", sayThing)

console.log(name.x)
console.log(name.y)
console.log(name.xY())
