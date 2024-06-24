const { describe, it } = require('eslint/lib/rule-tester/rule-tester')
const UndirectedGraph = require('./undirected-graph')

let testGraph


describe('Given Graphs', () => {
  describe('When happy path',  () => {
    beforeEach(() => {
      testGraph = new UndirectedGraph()
    
      // Add vertices before adding edge
      testGraph.addVertex('Seattle')
      testGraph.addVertex('Tokyo')
    })
    
    it('Vertex can be successfully added to the graph', () => {
      testGraph.addVertex('NYC')
      expect(testGraph.adjacencyList['NYC']).toEqual([])
      expect(testGraph.adjacencyList['Seattle']).toEqual([])
      expect(testGraph.adjacencyList['Tokyo']).toEqual([])
    })
    
    it('An edge can be successfully added to the graph', () => {
      testGraph.addEdge('Seattle', 'Tokyo')
      expect(testGraph.adjacencyList['Seattle']).toEqual(['Tokyo'])
      expect(testGraph.adjacencyList['Tokyo']).toEqual(['Seattle'])
    })
    
    it('A collection of all vertices can be properly retrieved from the graph', () => {
      expect(testGraph.getVertices() === ['Seattle', 'Tokyo'])
    })
    
    it('All appropriate neighbors can be retrieved from the graph', () => {
      testGraph.addEdge('Seattle', 'Tokyo')  
      expect(testGraph.getNeighbors('Seattle')).toEqual(['Tokyo'])
      expect(testGraph.getNeighbors('Tokyo')).toEqual(['Seattle'])
    })
    
    // TODO handle weighted edges
    it.todo('Neighbors are returned with the weight between vertices included')

    it('The proper size is returned, representing the number of vertices in the graph', () => {
      expect(testGraph.getSize()).toEqual(2)
    })
  })

  describe('When edge case', () => {
    it('A graph with only one vertex and edge can be properly returned', () => {
      // How would a graph with one vertex have an edge?
      let testGraph = new UndirectedGraph()
      testGraph.addVertex('Seattle')
      expect(testGraph.getVertices()).toEqual(['Seattle'])
    })

    it('An empty graph properly returns size', () => {
      let testGraph = new UndirectedGraph()
      expect(testGraph.getSize()).toEqual(0)
    })
  })
})
