const MyArray = require('../02-Arrays/MyArray_js');

class ArrayStack {
  constructor (capacity) {
    this.array = new MyArray(capacity)
  }

  getSize () {
    return this.array.getSize();
  }

  isEmpty () {
    return this.array.isEmpty();
  }

  getCapacity () {
    return this.array.getCapacity();
  }

  push (e) {
    this.array.addLast(e);
  }

  pop () {
    this.array.removeLast();
  }

  peek () {
    return this.array.getLast()
  }

  toString () {
    let res = `ArrayStack: size = ${this.getSize()}, capacity=${this.getCapacity()}`;
    res+= 'Stack: ['
    for (let i = 0; i < this.getSize(); i++) {
      res += this.array.get(i)
      if (i !== this.getSize() -1) {
        res += '，'
      }
    }
    res += '] top'
    return res.toString()
  }
}

module.exports = ArrayStack
