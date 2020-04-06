class LoopQueue {
  constructor (capacity = 10) {
    this.data = new Array(capacity);
    this.front = 0;
    this.tail = 0;
    this.size = 0;
  }
  getCapacity () {
    return this.data.length - 1;
  }

  getSize () {
    return this.size;
  }

  isEmpty () {
    return this.front === this.tail;
  }

  enqueue (e) {
    if ((this.tail + 1) % this.data.length === this.front) {
      this.resize(this.getCapacity() * 2)
    }
    this.data[this.tail] = e;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;

  }

  dequeue () {
    if (this.isEmpty()) {
      throw new Error('Cannot dequeue from an empty queue.');
    }
    const ret = this.data[this.front];
    this.data[this.front] = null;
    this.front = (this.front + 1) % this.data.length;
    this.size--;
    if (this.size === this.getCapacity() / 4 && this.getCapacity() / 2 !== 0) {
      this.resize(this.getCapacity() / 2)
    }
    return ret;
  }

  getFront () {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.data[this.front];
  }

  resize (newCapacity) {
    let newData = new Array(newCapacity * 2);
    for (let i = 0; i < this.size; i ++) {
      newData[i] = this.data[(this.front + i) % this.data.length]
    }
    this.data = newData;
    this.front = 0
    this.tail = this.size;
  }

  toString () {
    let res = `LoopQueue: size = ${this.size}, capacity=${this.getCapacity()}`;
    res+= 'LoopQueue: front [';
    for (let i = this.front; i != this.tail ;i = (i + 1)% this.data.length) {
      res += this.data[i];
      if ((i + 1) % this.data.length !== this.tail) {
        res += '，'
      }
    }
    res += '] tail'
    return res.toString()
  }
}

module.exports = LoopQueue
