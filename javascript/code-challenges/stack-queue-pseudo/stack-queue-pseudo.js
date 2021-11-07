'use strict'

const Stack = require('../stacks-and-queues/stack/stack')

class pseudoQueue {
  constructor(inTop = 0, inStorage = [], outTop = 0, outStorage = []) {
    this.in = new Stack(inTop, inStorage),
    this.out = new Stack(outTop, outStorage)
  }

  // TODO: With isEmpty() - change to use peek
  dequeue() {
    if (this.out.isEmpty()) {
      while (!this.in.isEmpty()) {
        this.out.push(this.in.pop())
      }
    }
    if(this.out.isEmpty()) {throw new Error('Empty Queue')}
    return this.out.pop()
  }

  enqueue(value) {
    while (!this.out.isEmpty()) {
      this.in.push(this.out.pop())
    }
    this.in.push(value)
    while (!this.in.isEmpty()) {
      this.out.push(this.in.pop())
    }
  }
}

module.exports = pseudoQueue
