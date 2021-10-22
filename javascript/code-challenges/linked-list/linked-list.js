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

  // Appends a node to the end of a linked list
  append(value) {
    // Linked list is empty
    if(!this.head) {
      this.head = new Node(value)
      return
    }
    // Linked list has nodes
    let current = this.head
    // Go to the end of the list
    while(current.next) {
      current = current.next
    }
    current.next = new Node(value)
  }

  // insert before the first node that has the value specified
  insertBefore(value, newValue) {
    let current = this.head
    while(current.next) {
      if(current.next.value === value) {
        current.next = new Node(newValue, current.next)
        return
      }
      current = current.next
    }
    throw new Error('Value Not Found')
  }

  // insert after the first node that has the value specified
  insertAfter(value, newValue) {
    let current = this.head
    while(current) {
      if(current.value === value) {
        current.next = new Node(newValue, current.next)
        return
      }
      current = current.next
    }
    throw new Error('Value Not Found')
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
