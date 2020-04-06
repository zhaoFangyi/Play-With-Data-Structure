const LinkedList = require('./LinkedList_dummyHead');

let linkedList = new LinkedList();
for (let i = 0; i < 8; i++) {
  linkedList.addFirst(i);
  console.log(linkedList.toString());
}

linkedList.add(2, 666);

console.log('add index 2 equal 666', linkedList.toString());

linkedList.remove(2);
console.log('remove index 2', linkedList.toString());

linkedList.removeFirst();
console.log('removeFirst', linkedList.toString());

linkedList.removeLast();
console.log('removeLast', linkedList.toString());

linkedList.removeElement(6);
console.log('removeElement equal 6', linkedList.toString());

