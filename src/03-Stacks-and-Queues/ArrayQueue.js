const MyArray = require('../02-Arrays/MyArray')

class ArrayQueue {
  constructor(capacity = 10) {
    this.array = new MyArray(capacity)
  }

  getSize() {
    return this.array.getSize()
  }

  isEmpty() {
    return this.array.isEmpty()
  }

  getCapacity() {
    return this.array.getCapacity()
  }

  enqueue(e) {
    this.array.addLast(e)
  }

  dequeue() {
    this.array.removeFirst()
  }

  getFront() {
    return this.array.getFirst()
  }

  toString() {
    let res = `ArrayQueue: size = ${this.getSize()}, capacity=${this.getCapacity()}`
    res += 'Queue: front ['
    for (let i = 0; i < this.getSize(); i++) {
      res += this.array.get(i)
      if (i !== this.getSize() - 1) {
        res += '，'
      }
    }
    res += '] tail'
    return res.toString()
  }
}

module.exports = ArrayQueue
