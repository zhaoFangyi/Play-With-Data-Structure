const BST = require('./BST')

let bst = new BST()
let n = 1000
let arr = []

for (let i = 0; i < n; i++) {
  let random = parseInt(Math.random() * 100)
  arr.push(random)
}

for (let i = 0; i < 5; i++) {
  const element = arr[i]
  bst.add(element)
}

console.log(bst.toString())

// let minArray = []

// while (!bst.isEmpty()) {
//   // minArray.push(bst.removeMax())
//   minArray.push(bst.removeMin())
// }

// console.log('minArray: ', minArray)

// for (let i = 1; i < minArray.length; i++) {
//   if (minArray[i - 1] > minArray[i]) {
//     throw new Error('Error')
//   }
// }
// console.log('removeMin test completed.')

// console.log(bst.contains(arr[0]))
bst.remove(arr[1])

console.log(bst.toString())

// bst.preOrderNR()
