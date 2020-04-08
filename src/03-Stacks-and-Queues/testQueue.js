const ArrayQueue = require('./ArrayQueue');
const LoopQueue = require('./LoopQueue');
const LinkedListQueue = require('./LinkedListQueue');
// let arr = new ArrayQueue(10)

// arr.enqueue('tom')
// console.log(arr.toString())

// for (let i = 0; i < 15; i++) {
//   arr.enqueue(i)
// }
// console.log(arr.toString())

// arr.dequeue()

// console.log(arr.toString())
// console.log(arr.getFront());


// let arr = new LoopQueue(10)
let arr = new LinkedListQueue(10)

arr.enqueue('tom')
console.log(arr.toString())

for (let i = 0; i < 15; i++) {
  arr.enqueue(i)
}
console.log(arr.toString())

arr.dequeue()

console.log(arr.toString())
console.log(arr.getFront());

