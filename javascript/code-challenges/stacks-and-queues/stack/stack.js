'use strict'

/** Class representing a point. */
class Stack {
  /**
   * Represents a stack.
   * @constructor
   * @param {number} top - the next item to be selected from the stack.
   * @param {array} storage - An array containing the values of the stack.
   */
  constructor(top = 0, storage = []) {
    this.storage = storage
    this.top = top
  }

  // Push - adds a new node with that value to the top of the stack with an O(1) Time performance.
  push(value) {
    this.storage[this.top] = value
    this.top++  
  }

  // Pop
  // Arguments: none
  // Returns: the value from node from the top of the stack
  // Removes the node from the top of the stack
  // Should raise exception when called on empty stack
  pop() {
    if(this.top <= 0) { throw new Error('Stack is empty') }
    this.top--
    return this.storage.pop()
  }

  // Peek
  // Arguments: none
  // Returns: Value of the node located at the top of the stack
  // Should raise exception when called on empty stack
  peek() {
    if(this.top <= 0) { throw new Error('Stack is empty') }
    return this.storage[this.top - 1]
  }

  // Arguments: none
  // Returns: Boolean indicating whether or not the stack is empty.
  isEmpty() {
    return !this.top
  }
}

module.exports = Stack