const ArrayQueue = require('./ArrayQueue');
const LoopQueue = require('./LoopQueue');
const LinkedListQueue = require('./LinkedListQueue');

function testQueue (queue, opCount) {
  const startTime = new Date().getTime();

  let random = parseInt(Math.random() * 1000);

  for (let i = 0; i < opCount; i++) {
    queue.enqueue(random);
  }
  for (let i = 0; i < opCount; i++) {
    queue.dequeue();
  }
  const endTime = new Date().getTime();

  return (endTime - startTime) / 1000;
}

function test() {
  const optCount = 100000;

  const arrayQueue = new ArrayQueue();
  const time1 = testQueue(arrayQueue, optCount);
  console.log(time1);

  const loopQueue = new LoopQueue();
  const time2 = testQueue(loopQueue, optCount);
  console.log(time2);

  const linkedListQueue = new LinkedListQueue();
  const time3= testQueue(linkedListQueue, optCount);
  console.log(time3);
}

test()
