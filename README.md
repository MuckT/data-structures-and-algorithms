# Data Structures and Algorithms

### JavaScript Setup

Use Node.js LTS and Yarn (recommended) to install and run tests.

Node setup (optional, via nvm):
```bash
nvm install --lts
nvm use --lts
node -v
```

Install dependencies and run tests (Yarn):
```bash
cd <root>
yarn
yarn test
```

If Yarn is not available:
```bash
# Option A: use Corepack to activate the repo-pinned Yarn 1.x
corepack enable
corepack prepare yarn@1.22.22 --activate

# Option B: install globally (classic Yarn)
npm i -g yarn
```

Using npm instead of Yarn:
```bash
npm ci
npm test
```

Handy commands:
- Run a specific Jest test file: `yarn test code-challenges/challenges-01.test.js`
- Lint JavaScript: `yarn lint`

### Python Setup

Set up a local Python environment and run tests:

```bash
cd /Users/tomm/repos/data-structures-and-algorithms
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -U pip pytest
pytest --version
```

Run tests:
- All Python challenges: `pytest -q code-challenges`
- Single file: `pytest -q code-challenges/challenges_01_test.py`

Pytest test discovery:
- Default patterns: `test_*.py` or `*_test.py`
- If you prefer “.test.py” names, add a `pytest.ini` at the repo root:
  ```
  [pytest]
  python_files = *.test.py test_*.py *_test.py
  ```

## 301 Code Challenges (JavaScript)

[forEach](code-challenges/challenges-01.test.js)

[array.map()](code-challenges/challenges-02.test.js)

[Filter](code-challenges/challenges-03.test.js)

[Sort](code-challenges/challenges-04.test.js)

[Reduce](code-challenges/challenges-05.test.js)

[Value vs. Reference](code-challenges/challenges-06.test.js)

[Array and String Methods](code-challenges/challenges-07.test.js)

[Regular Expressions part I](code-challenges/challenges-08.test.js)

[Object.keys, Object.values, and Object.entries](code-challenges/challenges-09.test.js)

[Two-dimensional arrays](code-challenges/challenges-10.test.js)

[Chaining Methods](code-challenges/challenges-11.test.js)

[Regular Expressions, part II](code-challenges/challenges-12.test.js)

[Includes, Every, Substring, charAt](code-challenges/challenges-13.test.js)

[Review](code-challenges/challenges-14.test.js)


## 401 Data Structures, Code Challenges

[Array Binary Search](javascript/array-binary-search/README.md)

[Array Insert Shift](javascript/array-insert-shift/README.md)

[Hash Table](javascript/hash-table/README.md)

[Linked List](javascript/linked-list/README.md)

[Linked List Zip](javascript/linked-list-zip/README.md)

[Reverse Array](javascript/reverse-array/README.md)

[Stacks and Queues](javascript/stacks-and-queues/README.md)

[Stack Queue Brackets](javascript/stack-queue-brackets/README.md)

[Stack Queue Pseudo](javascript/stack-queue-pseudo/README.md)

[Binary Tree](javascript/trees/binary-tree/README.md)

[Tree Intersection](javascript/trees/binary-tree/tree-intersection/README.md)

### Misc

[JavaScript Folder Setup](javascript/README.md)