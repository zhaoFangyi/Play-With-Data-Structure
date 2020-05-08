const LinkedList = require('../04-Linked-List/LinkedList_dummyHead')

class LinkedListSet {
  constructor() {
    this.list = new LinkedList()
  }
  getSize() {
    return this.list.getSize()
  }
  isEmpty() {
    return this.list.isEmpty()
  }
  contains(e) {
    return this.list.contains(e)
  }
  add(e) {
    if (!this.list.contains(e)) {
      this.list.addFirst(e)
    }
  }
  remove(e) {
    this.list.removeElement(e)
  }
}

module.exports = LinkedListSet
