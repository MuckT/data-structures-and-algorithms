class UndirectedGraph {
  constructor(){
      this.adjacencyList = {}
  }
  addVertex(vertex) {
      if(!this.adjacencyList[vertex]) {
          this.adjacencyList[vertex] = []
          return vertex
      }
  }
  removeVertex(vertex) {
      while(this.adjacencyList[vertex].length){
          const adjacentVertex = this.adjacencyList[vertex].pop()
          this.removeEdge(vertex, adjacentVertex)
      }

      delete this.adjacencyList[vertex]
  }
  addEdge(vertex1, vertex2) {
      // Push values
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      // Remove duplicates
      this.adjacencyList[vertex1] = [...new Set(this.adjacencyList[vertex1])]
      this.adjacencyList[vertex2] = [...new Set(this.adjacencyList[vertex2])]
  }
  removeEdge(vertex1, vertex2) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
          edge => edge !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
          edge => edge !== vertex1
      )
  }
  getVertices() {
      return Object.keys(this.adjacencyList)
  }
  getNeighbors(vertex) {
      return this.adjacencyList[vertex]
  }
  getSize() {
      return Object.keys(this.adjacencyList).length
  }
}

module.exports = UndirectedGraph
