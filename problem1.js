class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }

    getAdjacenctyList() {
      console.log(this.adjacencyList);
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
    }//Closes addVertex(vertex)
  
    // Add a directed edge from vertex u to vertex v with a given weight
    addEdge(edge) {
      // Ensure both vertices exist, weight is non-negative
      if (!this.adjacencyList.has(edge.getU().name) || !this.adjacencyList.has(edge.getV().name)) {
        throw new Error("Both vertices must exist before adding an edge.");
      }
      if (edge.getWeight() < 0) {
        throw new Error("Edge weights cannot be negative");
      }
  
      // Add edge (u -> v) with weight
      this.adjacencyList.get(edge.getU().name).edges.push(edge);
    }//Closes addEdge(u, v, weight)
  
    // Display the graph
    display() {
      console.log("--- Display Graph ---");
      let i = 1; //iterator
      for (let [name, vertex] of this.adjacencyList) {
        const { population, resource1, resource2, resource3, edges } = vertex;
        console.log(
          `${i}. ${name} (Population: ${population}, Resources: ${resource1}, ${resource2}, ${resource3})`
        );
        const edgeList = edges.map(edge => `${edge.getV().name} (weight: ${edge.getWeight()})`).join(", ");
        console.log(`   Edges: ${edgeList} \n`);
        i++;
      }
    }// Closes display()

    listVertices() {
      let i = 1; //iterator
      console.log('Island Vertices:');
      for (let [name, vertex] of this.adjacencyList) {
        console.log(
          `${i}. ${name}`
        );
        i++;
      }
    }
  }//Closes Graph class

  class Edge {
    constructor(u, v, weight) {// start: u, end: v
      this.u = u; //vertex
      this.v = v; //vertex
      this.weight = weight; // integer
    }

    getWeight() {
      return this.weight;
    }

    getU() {
      return this.u;
    }

    getV() {
      return this.v;
    }
  }
  
  // Example usage:
  let graph = new Graph();

  // Creating Islands as Verticies
  const hawaii = { name: "Hawaii", population: 1000, resource1: 50, resource2: 30, resource3: 20 };
  const samoa = { name: "Samoa", population: 800, resource1: 20, resource2: 40, resource3: 10 };
  const tahiti = { name: "Tahiti", population: 1200, resource1: 60, resource2: 20, resource3: 25 };
  const new_zealand = { name: "New Zealand", population: 1260, resource1: 20, resource2: 27, resource3: 235 };
  const tonga = { name: "Tonga", population: 2300, resource1: 650, resource2: 242, resource3: 215 };
  
  // Adding Islands to Graph
  graph.addVertex(hawaii);
  graph.addVertex(samoa);
  graph.addVertex(tahiti);
  graph.addVertex(tonga);
  graph.addVertex(new_zealand);

  // Define edges with weights
  const edges = [
    edgeA = new Edge(hawaii, samoa, 10),
    edgeB = new Edge(hawaii, tahiti, 15),
    edgeC = new Edge(samoa, tahiti, 5),
    edgeD = new Edge(tahiti, new_zealand, 78),
    edgeE = new Edge(tahiti, tonga, 25),
    edgeF = new Edge(new_zealand, tonga, 30),
    edgeG = new Edge(new_zealand, hawaii, 35),
    edgeH = new Edge(tonga, samoa, 40)
  ];

// Add edges to the graph
edges.forEach((edge) => {
  graph.addEdge(edge);
});
  
graph.display();
  