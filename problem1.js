class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    // Add a vertex to the graph with specific properties
    addVertex(vertex) {

      // Ensure vertex has all necessary properties
      const { name, population, resource1, resource2, resource3 } = vertex;
      if (!name || population == undefined || resource1 == undefined || resource2 == undefined || resource3 == undefined) {
        throw new Error("Vertex must have 'name', 'population', 'resource1', 'resource2', and 'resource3' properties.");
      }
    

      // Add vertex if it doesn't already exist
      if (!this.adjacencyList.has(name)) {
        this.adjacencyList.set(name, { ...vertex, edges: [] });
      }
    }
  
    // Add a directed edge from vertex u to vertex v with a given weight
    addEdge(u, v, weight) {
      // Ensure both vertices exist
      if (!this.adjacencyList.has(u) || !this.adjacencyList.has(v)) {
        throw new Error("Both vertices must exist before adding an edge.");
      }
  
      // Add edge (u -> v) with weight
      this.adjacencyList.get(u).edges.push({ node: v, weight });
    }
  
    // Display the graph
    display() {
      for (let [name, vertex] of this.adjacencyList) {
        const { population, resource1, resource2, resource3, edges } = vertex;
        console.log(
          `${name} (Population: ${population}, Resources: ${resource1}, ${resource2}, ${resource3})`
        );
        const edgeList = edges.map(edge => `${edge.node} (weight: ${edge.weight})`).join(", ");
        console.log(`  Edges: ${edgeList}`);
      }
    }
  }
  
  // Example usage:
  let graph = new Graph();

  const hawaii = { name: "Hawaii", population: 1000, resource1: 50, resource2: 30, resource3: 20 };
  const samoa = { name: "Samoa", population: 800, resource1: 20, resource2: 40, resource3: 10 };
  const tahiti = { name: "Tahiti", population: 1200, resource1: 60, resource2: 20, resource3: 25 };
  
  graph.addVertex(hawaii);
  graph.addVertex(samoa);
  graph.addVertex(tahiti);
  
  graph.addEdge(hawaii, samoa, 5);
  graph.addEdge(hawaii, tahiti, 3);
  graph.addEdge(samoa, tahiti, 1);
  graph.addEdge(tahiti, hawaii, 2);
  
  graph.display();
  