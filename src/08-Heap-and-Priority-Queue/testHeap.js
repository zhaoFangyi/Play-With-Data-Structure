const MaxHeap = require('./MaxHeap')

const n = 1000000

let maxHeap = new MaxHeap()

for (let i = 0; i < n; i++) {
  let random = parseInt(Math.random() * 1000)
  maxHeap.add(random)
}

let arr = []
for (let i = 0; i < n; i++) {
  arr[i] = maxHeap.extractMax()
}

for (let i = 0; i < n; i++) {
  if (arr[i+1] > arr[i]) {
    throw new Error('Error')
  }
}
console.log('Test MaxHeap completed')
