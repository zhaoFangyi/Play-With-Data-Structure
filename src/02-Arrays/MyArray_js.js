class MyArray {
  constructor (capacity) {
    this.arr = capacity === undefined ? [] : new Array(capacity)
    this.size = 0
    this.capacity = capacity
  }

  getSize () {
    return this.size
  }

  getCapacity () {
    return this.capacity
  }

  isEmpty () {
    return this.size === 0
  }


  /**
   *在数组中index处插入一个新的元素e
   * @param {*} index 索引
   * @param {*} e 元素
   * @memberof MyArray
   */
  add (index, e) {
    if (index < 0 || index > this.size) {
      throw new Error('Add fail.')
    }
    if (this.size === this.capacity) {
      this.resize(this.capacity * 2)
    }

    for (let i = this.size-1; i>= index; i--) {
      this.arr[i+1] = this.arr[i]
    }
    this.arr[index] = e
    this.size++
  }

  addFirst(e) {
    this.add(0, e)
  }
  addLast(e) {
    this.add(this.size, e)
  }

  get(index) {
    if (index < 0 || index > this.size) {
      throw new Error("get Fail.")
    }
    return this.arr[index]
  }

  getFirst () {
    return this.get(0)
  }

  getLast () {
    return this.get(this.size - 1)
  }

  set(index, e) {
    if (index < 0 || index > this.size) {
      throw new Error("set Fail.")
    }
    this.arr[index] = e
  }

  /**
   *查询数组是否包含e元素
   * @param {*} e
   * @memberof MyArray
   */
  contains (e) {
    for (let i = 0; i < this.arr.size; i++) {
      if (this.arr[i] === e) {
        return true
      }
    }
    return false
  }

  /**
   *查找数组中元素所在的索引，如果不存在则返回-1
   * @param {*} e
   * @memberof MyArray
   */
  find(e) {
    for (let i = 0; i < this.arr.size; i++) {
      if (this.arr[i] === e) {
        return i
      }
    }
    return -1
  }

  remove(index) {
    if (index < 0 || index > this.size) {
      throw new Error("remove Fail.")
    }
    let ret = this.arr[index]
    for (let i = index; i < this.size-1; i++) {
      this.arr[i] = this.arr[i+1]
    }
    this.size--
    this.arr[this.size] = null
    if (this.size === this.capacity / 4 && this.capacity / 2 !== 0) {
      this.resize(this.capacity/2)
    }
    return ret
  }

  removeFirst () {
    return this.remove(0)
  }

  removeLast () {
    return this.remove(this.size - 1)
  }

  removeElement (e) {
    let index = this.find(e)
    if (index !== -1) {
      this.remove(index)
    }
  }

  resize (newCapacity) {
    let newArr = new Array(newCapacity)
    for (let i = 0; i < this.size; i++) {
      newArr[i] = this.arr[i]
    }
    this.capacity = newCapacity
    this.arr = newArr
  }

  toString () {
    let res = `Array: size = ${this.size}, capacity=${this.capacity}`;
    res+= '['
    for (let i = 0; i < this.size; i++) {
      res += this.arr[i]
      if (i !== this.size -1) {
        res += '，'
      }
    }
    res += ']'
    return res.toString()

  }
}

module.exports = MyArray
