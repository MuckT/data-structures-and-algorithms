const BinarySearchTree = require('./binary-search-tree')

let populatedBST, emptyBST, values

beforeEach(() => {
  emptyBST = new BinarySearchTree()
  populatedBST = new BinarySearchTree()
  values = [9, 4, 17, 3, 6, 22, 5, 7, 20]
  values.map((val, i) => {
    return populatedBST.add(val)
  })
})

describe('Given Binary Search Tree (BST)', () => {
  describe("When 'add(n)'", () => {
    it('Then can add to empty tree', () => {
      emptyBST.add(Infinity)
      expect(emptyBST._contains(Infinity)).toBeTruthy()
    })

    it('Then can add to existing tree', () => {
      populatedBST.add(Infinity)
      expect(populatedBST._contains(Infinity)).toBeTruthy()
    })

    it('Then should throw error if value is already present in BST', () => {
      expect(() => { populatedBST.add(17)}).toThrow('Value already present in Binary Search Tree')
    })
  })

  describe("When 'contains(n)", () => {
    it('Then should return true if value in BST', () => {
      expect(populatedBST._contains(17)).toStrictEqual(true)
    })

    it('Then should return false if value not in BST', () => {
      expect(populatedBST._contains(42)).toStrictEqual(false)
    })
  })
})