const LinkedList = require('../04-Linked-List/LinkedList_dummyHead');

class LinkedListStack {
  constructor () {
    this.list = new LinkedList();
  }

  getSize () {
    return this.list.getSize();
  }

  isEmpty () {
    return this.list.isEmpty();
  }

  push (e) {
    this.list.addFirst(e);
  }

  pop () {
    return this.list.removeFirst();
  }

  peek () {
    return this.list.getFirst();
  }

  toString () {
    let res = '';
    res+= 'LinkedListStack: top'
    res += this.list
    return res.toString()
  }
}

module.exports = LinkedListStack;
