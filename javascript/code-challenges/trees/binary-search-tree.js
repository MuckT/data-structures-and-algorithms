'use strict'

const BinaryTree = require('./binary-tree')
const Node = require('./node')

class BinarySearchTree extends BinaryTree {
  constructor(root = null) {
    super()
    this.root = root
  }

  add(value) {
    if(typeof value !== 'number') {
      return null
    }

    // If no root we can just add the node as root
    const node = this.root
    if(node === null) {
      this.root = new Node(value)
      return
    }

    let _add = (node) => {
      // If node value is null return null - Value is required for all nodes
      if(node.value === null) {
        return null
      }

      // If value already exists in tree - Do nothing (Duplicates not allowed in Binary Search Trees)
      else if (node.value === value) {
        throw new Error('Value already present in Binary Search Tree')
      }
      // if value is less than node value - LEFT
      else if (node.value > value) {
        if(node.left === null) {
          node.left = new Node(value)
          return
        } else {
          return _add(node.left)
        }
      }
      // If value is greater than node value - RIGHT
      else if (node.value < value) {
        if(node.right === null) {
          node.right = new Node(value)
          return
        } else {
          return _add(node.right)
        }
      } 
    }
    _add(node)
  }

  _contains(value) {
    // Start at the root
    let current = this.root

    // While current node is truthy
    while(current) {
      // Found value
      if(current.value === value) { return true }
      // If value is greater than current node value - RIGHT
      if(current.value < value) { current = current.right }
      // Else - LEFT
      else { current = current.right }
    }
    // If not present returns FALSE
    return false
  }
}

module.exports = BinarySearchTree