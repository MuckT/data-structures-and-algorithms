# Data Structures and Algorithms

## Language: `JavaScript`

### Folder and Challenge Setup

Create a new folder under the `javascript` level, with the name of the data structure and complete your implementation there i.e. `linked-list`.

```bash
.
├── README.md
├── array-binary-search
│   ├── README.md
│   ├── array-binary-search.jpg
│   ├── array-binary-search.js
│   └── array-binary-search.test.js
├── array-insert-shift
│   ├── README.md
│   ├── array-insert-shift.jpg
│   ├── array-insert-shift.js
│   └── array-insert-shift.test.js
├── hash-table
│   ├── README.md
│   ├── hashtable.js
│   └── hashtable.test.js
├── linked-list
│   ├── README.md
│   ├── linked-list.js
│   ├── linked-list.test.js
│   ├── node.js
│   └── node.test.js
├── linked-list-zip
│   ├── README.md
│   ├── zip-linked-list.js
│   └── zip-linked-list.test.js
├── reverse-array
│   ├── README.md
│   ├── code-challenge-01.jpg
│   ├── reverse-array.js
│   └── reverse-array.test.js
├── stack-queue-brackets
│   ├── README.md
│   ├── stack-queue-brackets.js
│   └── stack-queue-brackets.test.js
├── stack-queue-pseudo
│   ├── README.md
│   ├── stack-queue-pseudo.jpg
│   ├── stack-queue-pseudo.js
│   └── stack-queue-pseudo.test.js
├── stacks-and-queues
│   ├── README.md
│   ├── queue
│   │   ├── queue.js
│   │   └── queue.test.js
│   └── stack
│       ├── stack.js
│       └── stack.test.js
└── trees
    ├── binary-tree
    │   ├── README.md
    │   ├── binary-search-tree.js
    │   ├── binary-search-tree.test.js
    │   ├── binary-tree.js
    │   ├── binary-tree.test.js
    │   ├── node.js
    │   └── tree-intersection
    │       ├── README.md
    │       ├── tree-intersection.js
    │       └── tree-intersection.test.js
    └── k-arr-tree
        ├── k-arr-tree.js
        ├── k-arr-tree.test.js
        └── node.js
```

### Data Structure Implementation

Your implementation must be completed as a ES6 Class or function and exported as a node module.

  ```javascript
  class LinkedList {
    constructor() {
      // code
    }

    methodName() {
      // code
    }

  }
  module.exports = LinkedList;
  ```

  ```javascript
  const methodName = () => {
    // Code
  }

  module.exports = {
    methodName
  };
  ```

### Tests
Create file named `[data-structure].test.js` in the same directory as the module and readme. Your tests will then need to require the data structure you're testing i.e. `const LinkedList = require('../reverse-ll.js');`. Add to the tests for this data structure to cover your method(s).

### Running Tests

If you setup your folders according to the above guidelines, running tests becomes a matter of deciding which tests you want to execute.  Jest does a good job at finding the test files that match what you specify in the test command

From the root of the `data-structures-and-algorithms` folder, execute the following commands:

- **Run every possible test** - `npm test`
- **Run a test for a data structure** - `npm test linked-list`
- **Run a test for a specific challenge** - `npm test reverse-ll`

**Checks will run on pull requests to the main branch using [GitHub Actions](https://github.com/MuckT/data-structures-and-algorithms/actions/workflows/javascript-tests.yml).**
