const MyArray = require('../02-Arrays/MyArray.js')
class MaxHeap {
  constructor(capacity) {
    if (Array.isArray(capacity)) {
      this.heapify(capacity)
    } else {
      this.data = new MyArray(capacity)
    }
  }

  size() {
    return this.data.getSize()
  }

  isEmpty() {
    return this.data.isEmpty()
  }

  /**
   *返回完全二叉树的数组表示中
   *一个索引所表示的元素的父亲节点的索引
   * @param {*} index
   * @returns
   * @memberof MaxHeap
   */
  parent(index) {
    if (index === 0) {
      throw new Error('index-0 does not have parent.')
    }
    return parseInt((index - 1) / 2)
  }
  /**
   *返回完全二叉树的数组表示中
   *一个索引所表示的元素的左孩子节点的索引
   * @param {*} index
   * @returns
   * @memberof MaxHeap
   */
  leftChild(index) {
    return index * 2 + 1
  }
  /**
   *返回完全二叉树的数组表示中
   *一个索引所表示的元素的右孩子节点的索引
   * @param {*} index
   * @returns
   * @memberof MaxHeap
   */
  rightChild(index) {
    return index * 2 + 2
  }
  /**
   *向堆中添加元素
   * @param {*} e
   * @memberof MaxHeap
   */
  add(e) {
    this.data.addLast(e)
    this.siftUp(this.data.getSize() - 1)
  }

  siftUp(k) {
    while (k > 0 && this.data.get(this.parent(k)) < this.data.get(k)) {
      this.data.swap(k, this.parent(k))
      k = this.parent(k)
    }
  }

  /**
   *查看堆中的最大元素
   * @memberof MaxHeap
   */
  findMax() {
    if (this.data.getSize() === 0) {
      throw new Error('can not findMax when heap is empty')
    }
    return this.data.get(0)
  }

  /**
   *取出堆中最大元素
   *
   * @memberof MaxHeap
   */
  extractMax() {
    const ret = this.findMax()
    this.data.swap(0, this.data.getSize() - 1)
    this.data.removeLast()
    this.siftDown(0)
    return ret
  }

  siftDown(k) {
    while (this.leftChild(k) < this.data.getSize()) {
      let j = this.leftChild(k)
      if (j + 1 < this.data.getSize() && this.data.get(j + 1) > this.data.get(j)) {
        j++
      }
      if (this.data.get(k) >= this.data.get(j)) break
      this.data.swap(k, j)
      k = j
    }
  }
  /**
   * 取出最大元素后，放入一个新元素
   * 方法一：可以先extractMax,在add 两次O(logn)的操作
   * 方法二：可以直接将堆顶元素替换以后sift Down 一次O(logn)的操作
   *
   * @memberof MaxHeap
   */
  replace (e) {
    const ret = this.findMax()
    this.data.set(0, e)
    this.siftDown(0)
    return ret
  }

  /**
   * 倒数第一个非叶子节点-> 第一个叶子节点,进行siftDown
   * 方法一将n个元素逐个插入到一个空堆中，算法复杂度是O(nlogn)
   * heapify的过程，算法复杂度为O(n)
   * @memberof MaxHeap
   */
  heapify (arr) {
    this.data  = new MyArray(arr)
    // 第一个非叶子节点-> 最后一个叶子节点的父节点
    for (let i = this.parent(arr.length - 1); i >= 0; i--) {
      this.siftDown(i)
    }
  }
}

module.exports = MaxHeap
