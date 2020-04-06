const LinkedListStack = require('./LinkedListStack');
const ArrayStack = require('./ArrayStack');

function testStack (stack, opCount) {
  const startTime = new Date().getTime();

  let random = parseInt(Math.random() * 1000);

  for (let i = 0; i < opCount; i++) {
    stack.push(random);
  }
  for (let i = 0; i < opCount; i++) {
    stack.pop();
  }
  const endTime = new Date().getTime();

  return (endTime - startTime) / 1000;
}

function test() {
  const optCount = 100000;

  const arrayStack = new ArrayStack();
  const time1 = testStack(arrayStack, optCount);
  console.log(time1);

  const linkedStack = new LinkedListStack();
  const time2 = testStack(linkedStack, optCount);
  console.log(time2);
}

test()
