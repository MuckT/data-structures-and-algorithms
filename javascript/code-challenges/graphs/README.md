# Graphs
<!-- Short summary or background information -->

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list.
The Graph class should have the following methods: `addVertex`, `addEdge`, `getVertices`,
`getNeighbors`, `getSize`

## Approach & Efficiency
| Method  | Time Complexity |
| ---- | ---- |
| `addVertex` | O(1) |
| `addEdge` | O(1) |
| `getVertices` | O(n) |
| `getNeighbors` | O(n) |
| `getSize` | O(n)|

## Methods

`addVertex`

- Adds a new vertex to the graph and returns the added vertex.

`addEdge`

- Adds an edge between two vertices and returns nothing.

`getVertices`

- Returns all the vertices in the graph.

`getNeighbors`

- Returns all the vertices connected to a give vertex.

`getSize`

- Returns the total number of vertices in the graph

### Run Solution

```sh
# Install dependencies
npm install

# run jest tests for undirected-graph.js
npm test undirected-graph.test.js
```
### Sources

[Spread Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

[JavaScript Algorithms and Data Structures Masterclass - Colt Steele](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

