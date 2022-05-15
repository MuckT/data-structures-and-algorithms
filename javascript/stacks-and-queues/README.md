# Challenge Summary
## Stack 
- Create a Stack class that has top and storage properties. It creates an empty Stack when instantiated.
- This object should be aware of a default empty value assigned to top when the stack is created.
### Required Methods
#### `push`

- Adds a new item with that value to the top of the stack with an O(1) Time performance.

#### `pop`

- Returns the value from the top item of the stack.
- Removes the item from the top of the stack.
- Should raise an exception when called on an empty tack.

#### `peek`
- Returns Value of the item located at the top of the stack.
- Should raise exception when called on empty stack.

#### `isEmpty`
- Returns a boolean indicating whether or not the stack is empty.

## Queue
- Create a Queue class that has a storage property. It creates an empty Queue when instantiated.

### Required Methods

#### `enqueue`

- Adds a new node with that value to the back of the queue with an O(1) Time performance.

### `dequeue`

- Returns the value from node from the front of the queue
- Removes the node from the front of the queue
- Should raise exception when called on empty queue

### `peek`

- Returns the value of the item located at the front of the queue
- Should raise exception when called on empty stack

### `isEmpty`

- Returns a boolean indicating whether or not the queue is empty
## Approach & Efficiency

### Stack
| Method  | Time Complexity | Space Complexity |
| ---- | ---- | ---- |
| push | O(1) | O(1)|
| pop | O(1) | O(1) |
| peek | O(1) | O(1) |
| isEmpty | O(1) | O(1) |

### Queue
| Method  | Time Complexity | Space Complexity |
| ---- | ---- | ---- |
| enqueue | O(1) | O(1) |
| dequeue | O(n) | O(1) |
| peek | O(1) | O(1) |
| isEmpty | O(1) | O(1) |

## Solution

```Bash
# run all related tests
npm test stack.test.js queue.test.js
```
