class Node {
  constructor(key = null, value = null, next = null) {
    this.key = key
    this.value = value
    this.next = next
  }
  toString() {
    return this.key.toString() + ' : ' + this.value.toString()
  }
}

class LinkedListMap {
  constructor() {
    this.dummyHead = new Node()
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }

  getNode(key) {
    let cur = this.dummyHead.next
    while (cur) {
      if (cur.key === key) {
        return cur
      }
      cur = cur.next
    }
    return null
  }
  add(key, value) {
    const node = this.getNode(key)
    if (node) {
      node.value = value
    } else {
      this.dummyHead.next = new Node(key, value, this.dummyHead.next)
      this.size++
    }
  }
  remove(key) {
    let prev = this.dummyHead
    while (prev.next) {
      if (prev.next.key === key) {
        break
      }
      prev = prev.next
    }

    if (prev.next !== null) {
      const delNode = prev.next
      prev.next = delNode.next
      delNode.next = null
      this.size--
      return delNode.value
    }
    return null
  }

  contains(key) {
    return this.getNode(key) !== null
  }
  get(key) {
    const node = this.getNode(key)
    return node ? node.value : null
  }
  set(key, value) {
    const node = this.getNode(key)
    if (!node) {
      throw new Error(key + "doesn't exist")
    }
    node.value = value
  }
}
module.exports = LinkedListMap
