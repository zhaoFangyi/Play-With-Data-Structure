class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.right = null
    this.left = null
  }
}

class BSTMap {
  constructor() {
    this.root = null
    this.size = 0
  }

  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }

  add(key, value) {
    this.root = this._add(this.root, key, value)
  }

  _add(node, key, value) {
    if (!node) {
      this.size++
      return new Node(key, value)
    }
    if (key < node.key) {
      node.left = this._add(node.left, key, value)
    } else if (key > node.key) {
      node.right = this._add(node.right, key, value)
    } else {
      node.value = value
    }
    return node
  }

  getNode(node, key) {
    if (!node) {
      return null
    }
    if (key === node.key) {
      return node
    } else if (key < node.key) {
      return this.getNode(node.left, key)
    } else {
      return this.getNode(node.right, key)
    }
  }
  remove(key) {
    const node = this.getNode(this.root, key)
    if (node) {
    }
    return null
  }

  _remove(node, key) {
    if (!node) {
      return null
    }
    if (key < node.key) {
      node.left = this._remove(node.left, key)
      return node
    } else if (key > node.key) {
      node.right = this._remove(node.right, key)
      return node
    } else {
      if (!node.left) {
        let rightNode = node.right
        node.right = null
        this.size--
        return rightNode
      }
      if (!node.right) {
        const leftNode = node.left
        node.left = null
        this.size--
        return leftNode
      }
      const successor = this.minimum(node.right)
      successor.left = node.left
      successor.right = this.removeMin(node.right)
      node.left = node.right = null
      return successor
    }
  }

  minimum(node) {
    if (!node.left) {
      return node
    }
    return this.minimum(node.left)
  }

  removeMin(node) {
    if (!node.left) {
      const rightNode = node.right
      node.right = null
      this.size--
      return rightNode
    }
    node.left = this.removeMin(node.left)
    return node
  }

  contains(key) {
    return this.getNode(this.root, key)
  }
  get(key) {
    const node = this.getNode(this.root, key)
    return node ? node.value : null
  }
  set(key, value) {
    const node = this.getNode(this.root, key)
    if (!node) {
      throw new Error(key + "doesn't exist!")
    }
    node.value = value
  }
}
module.exports = BSTMap
