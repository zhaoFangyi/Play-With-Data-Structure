const LinkedListStack = require('./LinkedListStack')

let arr = new LinkedListStack()

for (let i = 0; i < 5; i++) {
  arr.push(i)
  console.log(arr.toString())
}

arr.pop()

console.log(arr.toString())
console.log(arr.peek());

