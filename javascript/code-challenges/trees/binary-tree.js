'use strict'

class BinaryTree{
  constructor(root = null) { 
    this.root = root
  }

  // Left will always come before the Right
  // (Root, Left, Right)
  preOrder() {
    let results = []

    let _walk = (node) => {
      results.push(node.value)
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
    }

    _walk(this.root)
    return results
  }
  
  // (Left, Root, Right)
  inOrder() {
    let results = []

    let _walk = node => {
      if (node.left) _walk(node.left)
      results.push(node.value)
      if (node.right) _walk(node.right)
    }

    _walk(this.root)
    return results
  }

  // (Left, Right, Root)
  postOrder() {
    let results = []

    let _walk = node => {
      if(node.left) _walk(node.left)
      if(node.right) _walk(node.right)
      results.push(node.value)
    }

    _walk(this.root)
    return results
  }
  
  breadthFirst() {
    if(this.root === null) { throw new Error('No Nodes Present in Binary Tree')}
    // Use a queue to hold nodes
    let queue = [this.root]
    // Hold results
    let results = []
    
    // While we have nodes in the queue
    while(queue.length) {
      // If left node exists push to queue
      if(queue[0].left) {
        queue.push(queue[0].left)
      }
      // If right node exists push to queue 
      if(queue[0].right) {
        queue.push(queue[0].right)
      }
      // Store results
      results.push(queue[0].value)
      // Dequeue
      queue.shift()
    }
    return results
  }

  max() {
    if(this.root === null) {
      throw new Error('No Nodes Present in Binary Tree')
    }
    // Simple solution - KISS
    return Math.max(...this.preOrder())
  }
}

module.exports = BinaryTree