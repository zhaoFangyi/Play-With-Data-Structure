const ArrayStack = require('./ArrayStack')

let arr = new ArrayStack(10)

arr.push('tom')
console.log(arr.toString())

for (let i = 0; i < 15; i++) {
  arr.push(i)
}
console.log(arr.toString())

arr.pop()

console.log(arr.toString())
console.log(arr.peek());

