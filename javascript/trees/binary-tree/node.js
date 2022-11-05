'use strict'

class Node{
  constructor(value, right = null, left = null) {
    this.left = left
    this.right = right
    this.value = value
  }

  static clone(node) {
    if (node === null) return null
    let newNode = new Node(node.value)
    newNode.left = this.clone(node.left)
    newNode.right = this.clone(node.right)
    return newNode
  }
}

module.exports = Node