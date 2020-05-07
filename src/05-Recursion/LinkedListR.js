class Node {
  constructor (e = null, next = null) {
    this.e = e;
    this.next = next;
  }
  toString () {
    return e.toString();
  }
}

// 递归实现的LinkedList
// R-> Recursion
class LinkedListR {
  // 不适用虚拟头结点结果位置0的问题
  constructor () {
    this.head = null;
    size = 0;
  }

  getSize () {
    return this.size;
  }

  isEmpty () {
    return this.size === 0;
  }

  // 在链表的index位置添加新的元素
  add(index, e) {
    if (index < 0 || index > size) {
      throw new Error("Add failed. Illegal index.")
    }
    head = this.addSelf(head, index, e);
    size++;
  }

  addSelf(node, index, e) {
    if (index === 0) {
      return new Node(e, node);
    }
    node.next = this.addSelf(node.next, index - 1, e);
    return node;
  }

  addFirst(e) {
    this.add(0, e);
  }
  addLast (e) {
    this.add(this.size, e);
  }

  // 获得链表的第index个位置的元素
  get (index) {
    if (index < 0 || index >= size) {
      throw new Error("Get failed. Illegal index.")
    }
    return getSelf(head, index);
  }

  getSelf (node, index) {
    if (index === 0) {
      return node.e
    }
    return this.getSelf(node.next, index -1)
  }

  getFirst () {
    return this.get(0);
  }

  getLast () {
    return this.get(this.size -1);
  }

  set(index, e) {
    if (index < 0 || index > size) {
      throw new Error("Set failed. Illegal index.")
    }
    this.setSelf(head, index, e)
  }

  setSelf (node, index, e) {
    if (index === 0) {
      node.e = e;
      return;
    }
    this.setSelf(node.next, index - 1, e)
  }

  contains(e) {
    return this.containsSelf(head, e)
  }

  containsSelf (node, e) {
    if (node == null) {
      return false;
    }
    if (node.e === e) {
      return true
    }
    return this.containsSelf(node.next, e);
  }

  remove (index) {
    if (index < 0 || index > size) {
      throw new Error("Remove failed. Illegal index.")
    }
    let res = removeSelf(head, index);
    size --;
    head = res.head;
    return res.e;
  }

  removeSelf (node, index) {
    if (index === 0) {
      return {
        head: node.next,
        e: node.e,
      }
    }
    const res = this.removeSelf(node.next, index - 1);
    node.next = res.head;
    return {
      head: node,
      e: res.e,
    }
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size -1);
  }

  removeElement(e) {
    head = this.removeElementSelf(head, e);
  }

  removeElementSelf(node, e) {
    if (node == null) {
      return null;
    }
    if (node.e === e) {
      size --;
      return node.next;
    }
    node.next = this.removeElementSelf(node.next, e);
    return node;
  }



}
