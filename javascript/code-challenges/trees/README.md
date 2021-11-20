# Trees
<!-- Short summary or background information -->

## Challenge
Create a Binary Tree Class with `preOrder`, `inOrder`, `postOrder` methods.
Create a Binary Search Tree that extends the Binary Tree Class with `_add` and `_contains` methods.

## Approach & Efficiency Binary Tree
| Method  | Time Complexity |
| ---- | ---- |
| `preOrder` | O(n) |
| `inOrder` | O(n) |
| `postOrder` | O(n) |
| `max` | O(n) |


## Approach & Efficiency Binary Search Tree
| Method  | Time Complexity |
| ---- | ---- |
| `_add` | O(h) |
| `_contains` | O(h) |
## Methods

`_add`

- Adds a new node with that value in the correct location in the binary search tree.

`_contains`

- Returns a boolean indicating whether or not the value is in the tree.

`max`

- Returns the max value found in a binary tree.

### Run Solution

```sh
# Install dependencies
npm install

# run jest tests for binary-tree and binary-search-tree
npm test binary-tree.test.js binary-search-tree.test.js
```
