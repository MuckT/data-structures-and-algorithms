'use strict'

class Node{
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }

  static clone(node) {
    if (node === null) return null
    let newNode = new Node(node.value)
    newNode.children = node.children.map(child => this.clone(child))
    return newNode
  }
}

module.exports = Node