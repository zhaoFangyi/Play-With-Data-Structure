const MaxHeap = require('./MaxHeap')

function testHeap (testData, isHeapify) {
  const startTime = new Date().getTime();
  let maxHeap
  if (isHeapify) {
    maxHeap = new MaxHeap(testData)
  } else {
    maxHeap = new MaxHeap(testData.length)
    for (let i = 0; i < testData.length; i++) {
      maxHeap.add(testData[i]);
    }

  }

  let arr = []
  for (let i = 0; i < testData.length; i++) {
    arr[i] = maxHeap.extractMax()
  }

  for (let i = 0; i < testData.length; i++) {
    if (arr[i+1] > arr[i]) {
      throw new Error('Error')
    }
  }
  console.log('Test MaxHeap completed')

  const endTime = new Date().getTime();

  return (endTime - startTime) / 1000;
}

function test() {
  const n = 1000000

  let testData = []

  for (let i = 0; i < n; i++) {
    let random = parseInt(Math.random() * 1000)
    testData[i] = random
  }
  const time1 = testHeap(testData, false);
  console.log("test -> time1", time1)
  const time2 = testHeap(testData, true);
  console.log("test -> time2", time2)
}

test()
