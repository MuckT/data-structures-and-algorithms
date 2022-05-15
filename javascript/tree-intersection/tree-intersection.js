'use strict'

// preOrder Traversal (value, left, right)
const preOrder = (bt) => {
  let results = []

  let _walk = (node) => {
    results.push(node.value)
    if(node.left) _walk(node.left)
    if(node.right) _walk(node.right)
  }

  _walk(bt.root)
  return results
}

const treeIntersection = (bt1, bt2) => {
  return preOrder(bt1).filter(element => preOrder(bt2).includes(element))
}

module.exports = {
  treeIntersection
}
