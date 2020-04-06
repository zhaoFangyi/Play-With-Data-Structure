class Node {
  constructor (e = null, next = null) {
    this.e = e;
    this.next = next;
  }
}


/**
 *引入虚拟头节点，在LinkedList中，在链表中添加元素总是需要分为两种情况，
  1. addFirst
  2. add
  究其原因是因为head没有prev元素，所以逻辑上需要特殊处理头结点处添加元素
  一个技巧，统一这种操作，就是添加一个虚拟的头结点，作为head的prev元素
  作为head便是dummyHead.next元素
 *dummyHead -> 0 -> 1 -> 2 -> 3 -> 3 -> null
 * @class LinkedList
 */
class LinkedList {

  constructor () {
    this.dummyHead = new Node();
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
    let prev = this.dummyHead;
    for (let i = 0; i < index; i++) {
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
    this.add(0, e);
  }

  addLast (e) {
    this.add(this.size, e);
  }


  /**
   *
   *获得链表第index个位置的元素
    在链表中不是一个常用的操作，纯练习
   * @param {*} index
   * @memberof LinkedList
   */
  get (index) {
    if (index < 0 || index > this.size) {
      throw new Error("get failed. Illegal index.");
    }
    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.e;
  }
  getFirst () {
    return this.get(0);
  }

  getLast() {
    return this.get(this.size - 1)
  }

  /**
   *修改链表中第index个位置的元素e
   *在链表中不是一个常用的操作，纯练习玩
   * @memberof LinkedList
   */
  set(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error("Set failed. Illegal index.");
    }
    let cur = this.dummyHead.next
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    cur.e = e;
  }

  contains (e) {
    let cur = this.dummyHead.next;
    while(cur !== null) {
      if (cur.e === e) {
        return true
      }
      cur = cur.next
    }
    return false
  }



  /**
   *从链表中删除index位置的元素，返回删除的元素
    在链表中不是一个常用的操作，纯练习玩
   * @param {*} index
   * @memberof LinkedList
   */
  remove (index) {
    if (index < 0 || index > this.size) {
      throw new Error("Remove failed. Illegal index.");
    }
    let prev = this.dummyHead
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    let retNode = prev.next;
    prev.next = retNode.next;
    retNode.next = null;
    this.size--;

    return retNode.e;
  }

  removeFirst() {
    return this.remove(0);
  }

  removeLast() {
    return this.remove(this.size - 1);
  }


  /**
   *
   * 从链表中删除元素e
   * @param {*} e
   * @memberof LinkedList
   */
  removeElement (e) {
    let prev = this.dummyHead
    while(prev.next !== null) {
      if (prev.next.e === e) break;
      prev = prev.next
    }
    if (prev.next !== null) {
      let delNode = prev.next;
      prev.next = delNode.next;
      delNode.next = null;
      this.size --;
    }
  }



  toString () {
    let res = ''

    let cur = this.dummyHead.next
    while (cur !== null) {
      res += `${cur.e} -->`;
      cur = cur.next;
    }
    res += 'NULL';
    return res.toString()
  }

}

module.exports = LinkedList
