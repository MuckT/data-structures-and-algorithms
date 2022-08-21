'use strict'

class KArrTree{
  constructor(root = null) { 
    this.root = root
  }

  breadthFirst() {
    if(this.root === null) { throw new Error('No Nodes Present in Binary Tree')}
    // Use a queue to hold nodes
    let queue = [this.root]
    // Hold results
    let results = []
    
    // While we have nodes in the queue
    while(queue.length) {
      let node = queue[0]

      // Push each child
      node.children.forEach(child => {
        queue.push(child)
      })
      // Store results
      results.push(node.value)
      // Dequeue
      queue.shift()
    }
    return results
  }

  fizzBuzz() {
    if(this.root === null) { throw new Error('No Nodes Present in Binary Tree')}
    let treeCopy = this
    let queue = [treeCopy.root]

    while(queue.length) {
      let node = queue[0]
    
      node.children.forEach(child => {
        queue.push(child)
      })
      
      if(node.value % 3 === 0 && node.value % 5 === 0) {
        node.value = 'FizzBuzz'
      }
      else if (node.value % 3 === 0) {
        node.value = 'Fizz'
      }
      else if (node.value % 5 === 0) {
        node.value = 'Buzz'
      } else {
        node.value = node.value.toString()
      }
      // Dequeue
      queue.shift()
    }
    return treeCopy
  }
}

module.exports = KArrTree