// Object inheritance with concatenation
//

const furry = { furry: true }
const meows = { meows: "meow meow" }
const barks = { barks: "bork bork" }
const slinks = { slinks: true }
const isAClutz = { isAClutz: true }

const Dog = (opts) => {
  return Object.assign({}, furry, barks, isAClutz)
}

const Cat = (opts) => {
  return Object.assign({}, furry, meows, slinks)
}

const casey = Cat({ furry, meows, slinks})
const bodie = Dog({ furry, barks, isAClutz})

console.log(casey.furry)
