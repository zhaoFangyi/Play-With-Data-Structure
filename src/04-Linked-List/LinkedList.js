class Node {
  constructor (e = null, next = null) {
    this.e = e;
    this.next = next;
  }
}

class LinkedList {

  constructor () {
    this.head = null;
    this.size = 0;
  }

  getSize () {
    return this.size;
  }

  isEmpty () {
    return this.size === 0;
  }

  add (index, e) {
    if (index < 0 || index > this.size) {
      throw new Error("Add failed. Illegal index.");
    }
    if (index === 0) {
      this.addFirst(e);
    }
    let prev = this.head;
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    // let node = new Node(e);
    // node.next = prev.next;
    // prev.next = node;

    // 上面三句可以合成一句
    prev.next = new Node(e, prev.next);
    this.size++;
  }

  addFirst (e) {
    // const node = new Node(e);
    // node.next = this.head;
    // this.head = node;

    this.head = new Node(e, head);
    size++;
  }

  addLast (e) {
    this.add(this.size, e);
  }

}

module.exports = LinkedList
