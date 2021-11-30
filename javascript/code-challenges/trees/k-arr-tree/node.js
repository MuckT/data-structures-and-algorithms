'use strict'

class Node{
  constructor(value, children = []) {
    this.value = value
    this.children = children
  }
}

module.exports = Node