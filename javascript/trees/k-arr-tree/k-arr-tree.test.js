'use strict'

const Node = require('./node')
const KArrTree = require('./k-arr-tree')

/* create Nodes 1 - 10 and left/right relationships

         1 -> Root
        /|\
       2 3 4
      /| |  \
     5 6 7   8
            / \
           9  10
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
  let ten = new Node(10)
  let fifteen = new Node(15)

  one.children = [two, three, four]
  two.children = [five, six]
  three.children = [seven]
  four.children = [eight]
  eight.children = [nine, ten]
  ten.children = [fifteen]

  // Create K Arr Tree with root Node(1)
  tree = new KArrTree(one)
})

let breadthFirstRes =  [1, 2, 3, 4,  5, 6, 7, 8, 9, 10, 15]
let breadthFirstFizzBuzz =  ['1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 'FizzBuzz']

describe('K Arr Tree', () => {
  it('breadthFirst properly traverses and returns results', () => {
    let breadthFirst = tree.breadthFirst()
    expect(breadthFirst).toEqual(breadthFirstRes)
  })

  it('fizzBuzz returns correct tree copy with breadthFirst traversal', () => {
    let fizzBuzz = tree.fizzBuzz()
    let fizzOrder = fizzBuzz.breadthFirst()
    expect(fizzOrder).toStrictEqual(breadthFirstFizzBuzz)
  })

  it('fizzBuzz throws error on empty tree', () => {
    let emptyTree = null
    expect(() => { emptyTree.fizzBuzz().toThrow('No Nodes Present in Binary Tree')})
  })

  it('fizzBuzz does not mutate original tree', () => {
    tree.fizzBuzz()
    expect(tree.breadthFirst()).toStrictEqual(breadthFirstRes)
  })
})