'use strict'

const Node = require('./node')

class LinkedList {
  constructor() {
    this.head = null
  }

  // Inserts a node at the start of a linked list
  insert(value) {
    // IF the list is empty create it ELSE prepend to first node
    this.head === null
      ? this.head = new Node(value) 
      : this.head = new Node(value, this.head)
    return
  }

  // Check if a node value is in a linked list
  includes(value) {
    let current = this.head
    while (current) {
      if(current.value === value) {
        // Return true if object is found and exit the while loop
        return true
      }
      current = current.next
    }
    // Return false if we make it to the end of the link list and the value is not found
    return false
  }

  //Returns: a string representing all the values in the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"
  toString() {
    let returnString = ""
    let current = this.head
    while (current) {
      returnString += `{ ${current.value} } -> `
      current = current.next
    }
    returnString += 'NULL'
    return returnString
  }
}

module.exports = LinkedList
