const Stack = require('../03-Stacks-and-Queues/LinkedListStack')
const Queue = require('../03-Stacks-and-Queues/LoopQueue')
class Node {
  constructor(e) {
    this.e = e
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
    this.size = 0
  }

  size() {
    return this.size
  }

  isEmpty() {
    return this.size === 0
  }

  add(e) {
    this.root = this.addSelf(this.root, e)
  }

  addSelf(node, e) {
    if (node === null) {
      this.size++
      return new Node(e)
    }
    if (e < node.e) {
      node.left = this.addSelf(node.left, e)
    } else if (e > node.e) {
      node.right = this.addSelf(node.right, e)
    }
    return node
  }

  contains(e) {
    return this._contains(this.root, e)
  }

  _contains(node, e) {
    if (node === null) {
      return false
    }
    if (node.e === e) {
      return true
    } else if (e < node.e) {
      return this._contains(node.left, e)
    } else {
      return this._contains(node.right, e)
    }
  }

  preOrder() {
    this._preOrder(this.root)
  }

  _preOrder(node) {
    if (node === null) return
    console.log(node.e)
    this._preOrder(node.left)
    this._preOrder(node.right)
  }

  /**
   *前序排序的非递归方法 Not Recursion
   *使用栈数据结构-模拟系统栈的写法
   * @memberof BST
   */
  preOrderNR() {
    let stack = new Stack()
    stack.push(this.root)
    while (!stack.isEmpty()) {
      const cur = stack.pop()
      console.log(cur.e)
      if (cur.right !== null) {
        stack.push(cur.right)
      }
      if (cur.left !== null) {
        stack.push(cur.left)
      }
    }
  }

  /**
   *中序遍历
   * @memberof BST
   */
  inOrder() {
    this._inOrder(this.root)
  }

  _inOrder(node) {
    if (node === null) return
    this._inOrder(node.left)
    console.log(node.e)
    this._inOrder(node.right)
  }

  postOrder() {
    this._postOrder(this.root)
  }

  _postOrder(node) {
    if (node === null) return
    this._postOrder(node.right)
    console.log(node.e)
    this._postOrder(node.left)
  }

  /**
   *广度优先遍历-层序遍历
   *队列
   * @memberof BST
   */
  levelOrder() {
    const q = new Queue()
    q.enqueue(this.root)
    while (!q.isEmpty()) {
      const cur = q.dequeue()
      console.log(cur.e)
      if (cur.left !== null) {
        q.enqueue(cur.left)
      }
      if (cur.right !== null) {
        q.enqueue(cur.right)
      }
    }
  }

  /**
   *寻找二叉搜索树中最小元素
   *向左走，直到没有左边的孩子了
   *
   * @memberof BST
   */
  minimum() {
    if (this.size === 0) {
      throw new Error('BST is Empty')
    }
    return this._minimum(this.root).e
  }

  /**
   *返回node为根的二叉搜索树的最小值所在的节点
   *
   * @param {*} node
   * @returns
   * @memberof BST
   */
  _minimum(node) {
    if (node.left === null) {
      return node
    }
    return this._minimum(node.left)
  }

  maximum() {
    if (this.size === 0) {
      throw new Error('BST is Empty')
    }
    return this._maximum(this.root).e
  }

  _maximum(node) {
    if (node.right === null) {
      return node
    }
    return this._maximum(node.right)
  }

  /**
   *从二分搜索树中删除最小值所在节点，返回最小值
   *
   * @memberof BST
   */
  removeMin() {
    const ret = this.minimum()
    this.root = this._removeMin(this.root)
    return ret
  }

  /**
   *删除掉以node为根的二分搜索树中的最小节点
   *返回删除节点后新的二分搜索树的根
   *
   * @param {*} node
   * @memberof BST
   */
  _removeMin(node) {
    if (node.left === null) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this._removeMin(node.left)
    return node
  }

  /**
   *从二分搜索树删除最大值所在节点
   *
   * @memberof BST
   */
  removeMax() {
    const ret = this.maximum()
    this.root = this._removeMax(this.root)
    return ret
  }

  /**
   *删除掉以node为根的二分搜索树中的最大节点
   *返回删除节点后新的二分搜索树的根
   *
   * @memberof BST
   */
  _removeMax(node) {
    if (node.right === null) {
      const leftNode = node.left
      node.left = null
      this.size--
      return leftNode
    }
    node.right = this._removeMax(node.right)
    return node
  }

  remove(e) {
    this.root = this._remove(this.root, e)
  }

  /**
   *删除掉以node为根的二叉搜索树值为e的节点，递归算法
   *返回删除节点后新的二叉搜索树
   *
   * @param {*} node
   * @param {*} e
   * @returns
   * @memberof BST
   */
  _remove(node, e) {
    if (node === null) {
      return null
    }
    if (e < node.e) {
      node.left = this._remove(node.left, e)
      return node
    } else if (e > node.e) {
      node.right = this._remove(node.right, e)
      return node
    } else {
      if (node.left === null) {
        const rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }
      if (node.right === null) {
        const leftNode = node.left
        node.left = null
        this.size--
        return leftNode
      }
      const successor = this._minimum(node.right)
      successor.left = node.left
      successor.right = this._removeMin(node.right)
      node.left = node.right = null
      return successor
    }
  }

  toString() {
    let res = {
      str: ''
    }
    this.generateBSTString(this.root, 0, res)
    return res.str
  }

  generateBSTString(node, depth, res) {
    if (node === null) {
      res.str += this.generateDepthString(depth) + 'null\n'
      return res
    }
    res.str += this.generateDepthString(depth) + node.e + '\n'
    this.generateBSTString(node.left, depth + 1, res)
    this.generateBSTString(node.right, depth + 1, res)
  }

  generateDepthString(depth) {
    let res = ''
    for (let i = 0; i < depth; i++) {
      res += '--'
    }
    return res
  }
}

module.exports = BST
