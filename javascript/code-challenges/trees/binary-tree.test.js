'use strict'

const Node = require('./node')
const BinaryTree = require('./binary-tree')

/* create Nodes 1 - 10 and left/right relationships

         1 -> Root
        / \
       2   3
      /   / \
     6   4   5
      \
       7
      / \
     8   9
          \
          15

we want this to happen before all tests
*/
let tree = null

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
  let ten = new Node(15)

  one.left = two
  one.right = three
  three.left = four
  three.right = five
  two.left = six
  six.right = seven
  seven.left = eight
  seven.right = nine
  nine.right = ten

  // Create BT with root Node(1)
  tree = new BinaryTree(one)
})

let preRes = [1, 2, 6, 7, 8, 9, 15, 3, 4, 5]
let preResFizzBuzz = ['1', '2', 'Fizz', '7', '8', 'Fizz', 'FizzBuzz', 'Fizz', '4', 'Buzz']
let inRes = [6, 8, 7, 9, 15, 2, 1, 4, 3, 5]
let inResFizzBuzz = [ 'Fizz', '8', '7', 'Fizz', 'FizzBuzz', '2', '1', '4', 'Fizz', 'Buzz']
let postRes = [8, 15, 9, 7, 6, 2, 4, 5, 3, 1]
let postResFizzBuzz = ['8', 'FizzBuzz', 'Fizz', '7', 'Fizz', '2', '4', 'Buzz', 'Fizz', '1']
let breadthFirstRes = [1, 2, 3, 6, 4, 5, 7, 8, 9, 15]
let breadthFirstResFizzBuzz = ['1', '2', 'Fizz', 'Fizz', '4', 'Buzz', '7', '8', 'Fizz','FizzBuzz']

describe('Binary Tree Traversal', () => {
  it('preOrder properly traverses and returns result', () => {
    let preOrder = tree.preOrder()
    expect(preOrder).toEqual(preRes)
  })

  it('inOrder properly traverses and returns result', () => {
    let inOrder = tree.inOrder()
    expect(inOrder).toEqual(inRes)
  })

  it('postOrder properly traverses and returns result', () => {
    let postOrder = tree.postOrder()
    expect(postOrder).toEqual(postRes)
  })

  it('breadthFirst properly traverses and returns results', () => {
    let breadthFirst = tree.breadthFirst()
    expect(breadthFirst).toEqual(breadthFirstRes)
  })

  it('breadthFirst throws error on empty tree', () => {
    let emptyTree = null
    expect(() => { emptyTree.breadthFirst().toThrow('No Nodes Present in Binary Tree')})
  })

  it('max returns correct value', () => {
    expect(tree.max()).toStrictEqual(15)
  })

  it('max throws error on empty tree', () => {
    let emptyTree = null
    expect(() => { emptyTree.max().toThrow('No Nodes Present in Binary Tree')})
  })

  it('fizzBuzz returns correct tree copy with preOrder traversal', () => {
    let fizzBuzz = tree.fizzBuzz()
    let fizzOrder = fizzBuzz.preOrder()
    expect(fizzOrder).toStrictEqual(preResFizzBuzz)
  })

  it('fizzBuzz returns correct tree copy with inOrder traversal', () => {
    let fizzBuzz = tree.fizzBuzz()
    let fizzOrder = fizzBuzz.inOrder()
    expect(fizzOrder).toStrictEqual(inResFizzBuzz)
  })

  it('fizzBuzz returns correct tree copy with postRes traversal', () => {
    let fizzBuzz = tree.fizzBuzz()
    let fizzOrder = fizzBuzz.postOrder()
    expect(fizzOrder).toStrictEqual(postResFizzBuzz)
  })

  it('fizzBuzz returns correct tree copy with breadthFirst traversal', () => {
    let fizzBuzz = tree.fizzBuzz()
    let fizzOrder = fizzBuzz.breadthFirst()
    expect(fizzOrder).toStrictEqual(breadthFirstResFizzBuzz)
  })

  it('fizzBuzz throws error on empty tree', () => {
    let emptyTree = null
    expect(() => { emptyTree.fizzBuzz().toThrow('No Nodes Present in Binary Tree')})
  })
})