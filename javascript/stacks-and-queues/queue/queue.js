'use strict'

class Queue {
  constructor(storage = []) {
    this.storage = storage
  }

  // enqueue
  // Arguments: value
  // adds a new node with that value to the back of the queue with an O(1) Time performance.
  enqueue(value) {
    this.storage.push(value)
  }

  // dequeue
  // Arguments: none
  // Returns: the value from node from the front of the queue
  // Removes the node from the front of the queue
  // Should raise exception when called on empty queue
  dequeue(){
    if(!this.storage.length){throw new Error('Queue is empty')}
    return this.storage.shift()
  }
  
  // peek
  // Arguments: none
  // Returns: Value of the node located at the front of the queue
  // Should raise exception when called on empty queue
  peek(){
    if(!this.storage.length){throw new Error('Queue is empty')}
    return this.storage[0]
  }

  // isEmpty
  // Arguments: none
  // Returns: Boolean indicating whether or not the queue is empty
  isEmpty(){
    return !this.storage.length
  }
}

module.exports = Queue
