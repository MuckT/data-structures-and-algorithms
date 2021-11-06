'use strict'

const Node = require('../linked-list/node')
const LinkedList = require('../linked-list/linked-list')

// TODO: Improve storage space O(1) this is O(n)
const zipListsFistPass = (ll1, ll2) => {
  // Create some helper storage
  let helperArray = []
  let outPut = new LinkedList()

  // Iterate through both linked list and push to helper array
  let ll1current = ll1.head
  let ll2current = ll2.head
  while(ll1current && ll2current) {
    helperArray.push(ll1current.value, ll2current.value)
    ll1current = ll1current.next
    ll2current = ll2current.next
  }

  // Iterate through the helper array to output Linked List
  helperArray.forEach(item => {
    outPut.append(item)
  })
  
  // Returns merged linked list instead of head for testing
  return outPut
}

// Worked with @antoni909 still need to understand better
// TODO: Improve storage space O(1) this is O(n)
const zipLists =( ll1, ll2) => {
  // Create output linked List
  let output = new LinkedList()

  // Set current to head
  let ll1current = ll1.head
  let ll2current = ll2.head

  // Undefined temp's we'll use later
  let ll1next, ll2next

  // Appending current values to output
  output.append(ll1current.value)
  output.append(ll2current.value)

  // Iteration through linked lists
  while(ll1current.next !== null && ll2current.next !== null) {
    // Store next value temp variable
    ll1next = ll1current.next
    ll2next = ll2current.next
    
    // Set next value
    ll1current.next = ll2current
    ll2current.next = ll1next

    // Set current value
    ll1current = ll1next
    ll2current = ll2next

    // Append current value to output linked list
    output.append(ll1current.value)
    output.append(ll2current.value)
  }

  // Returns merged linked list instead of head for testing
  return output
}

module.exports = {
  zipListsFistPass,
  zipLists
}
