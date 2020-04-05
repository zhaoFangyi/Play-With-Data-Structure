class BSTNode<E> {
  public e: E
  public left: BSTNode<E> | null
  public right: BSTNode<E> | null

  constructor (e: E) {
    this.e = e
    this.left = null
    this.right = null
  }
}

class BST<E> {
  private root: BSTNode<E> | null
  private size: number

  constructor () {
    this.root = null
    this.size = 0
  }

  public isEmpty (): boolean {
    return this.size === 0
  }

  public add (e: E): void {
    // if (this.root === null) {
    //   this.root = new BSTNode(e)
    // } else {
    //   this.addSelf(this.root, e)
    // }
    this.root = this.addSelf(this.root, e)
  }

  private addSelf (node: BSTNode<E> | null, e: E): BSTNode<E> {
    if (node === null) {
      return new BSTNode(e)
    }

    if (e < this.root!.e) {
      this.root!.left = this.addSelf(this.root?.left!, e)
    } else {
      this.root!.right = this.addSelf(this.root?.right!, e)
    }
    return this.root!
  }

  public contains(e: E): boolean {
    return this.containsRecursion(this.root, e)
  }

  private containsRecursion (node: BSTNode<E> | null,e: E): boolean {
    if (node === null) {
        return false
      }
      if (node!.e === e) {
        return true
      } else if (node!.e > e) {
        return this.containsRecursion(node.left, e)
      } else {
        return this.containsRecursion(node.right, e)
      }
    }
}
