'use strict'

const Node = require('../trees/node')
const BinaryTree = require('../trees/binary-tree')
const { treeIntersection } = require('./tree-intersection')

/* create Nodes 1 - 9 and left/right relationships
Binary Tree 1
         1 -> Root
        / \
       2   3
      /   / \
     6   4   5
      \
       7
      / \
     8   9

// Binary Tree 2
     6 -> Root
      \
       7
      / \
     8   9

we want this to happen before all tests
*/

let bt1 = null
let bt2 = null
beforeAll(() => {
  let one = new Node(1)
  let two = new Node(2)
  let three = new Node(3)
  let four = new Node(4)
  let five = new Node(5)
  let six = new Node(6)
  let seven = new Node(7)
  let eight = new Node(8)
  let nine = new Node(9)

  one.left = two
  one.right = three
  three.left = four
  three.right = five
  two.left = six
  six.right = seven
  seven.left = eight
  seven.right = nine

  // Create Binary Trees
  bt1 = new BinaryTree(one)
  bt2 = new BinaryTree(six)
})

describe('Given treeIntersection', () => {
  describe('When called on two trees', () => {
    it('Returns correct intersection', () => {
      expect(treeIntersection(bt1,bt2)).toStrictEqual([6,7,8,9])
    })
  })
})