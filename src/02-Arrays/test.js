const MyArray = require('./MyArray_js')
console.log("MyArray", MyArray)

let arr = new MyArray(10)

arr.addFirst('tom')
console.log(arr.toString())

for (let i = 0; i < 15; i++) {
  arr.addLast(i)
}

console.log(arr.toString())

