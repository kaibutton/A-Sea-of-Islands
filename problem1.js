class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }

    getAdjacenctyList() {
      return this.adjacencyList;
    }

    vertexList() {
      const vertexArray = [];
      for (let [name, { vertex, edges }] of this.adjacencyList) {
        vertexArray.push(vertex);
      }
      return vertexArray;
    }
  
    // Add a vertex to the graph with specific properties
    addVertex(vertex) {

      // Ensure vertex has all necessary properties
      if (!vertex.getName() || vertex.getPopulation() == undefined || vertex.getResource1() == undefined || vertex.getResource2() == undefined || vertex.getResource3() == undefined) {
        throw new Error("Vertex must have 'name', 'population', 'resource1', 'resource2', and 'resource3' properties.");
      }
    

      // Add vertex if it doesn't already exist
      if (!this.adjacencyList.has(vertex.getName())) {
        this.adjacencyList.set(vertex.getName(), { vertex: vertex, edges: [] });
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
      for (let [name, {vertex, edges}] of this.adjacencyList) {
        //const { population, resource1, resource2, resource3, edges } = vertex;
        console.log(
          `${i}. ${vertex.getName()} (Population: ${vertex.getPopulation()}, Resources: ${vertex.getResource1()}, ${vertex.getResource2()}, ${vertex.getResource3()})`
        );
        const edgeList = edges.map(edge => `${edge.getV().name} (weight: ${edge.getWeight()})`).join(", ");
        console.log(`   Edges: ${edgeList} \n`);
        i++;
      }
    }// Closes display()

    listVertices() {
      let i = 1; //iterator
      console.log('Island Vertices:');
      for (let [name, { vertex, edges }] of this.adjacencyList) {
        console.log(
          `${i}. ${vertex.getName()}`
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

  class Vertex {
    constructor (name, population, resource1, resource2, resource3) {
      this.name = name; //string
      this.population = population; //integer
      this.resource1 = resource1; //integer
      this.resource2 = resource2; //integer
      this.resource3 = resource3; //integer
    }

    getName() {
      return this.name;
    }

    getPopulation() {
      return this.population;
    }

    getResource1() {
      return this.resource1;
    }

    getResource2() {
      return this.resource2;
    }

    getResource3() {
      return this.resource3;
    }
  }
  
  // Example usage:
  let graph = new Graph();

  // Creating Islands as Verticies
  const vertices = [
    hawaii = new Vertex("Hawaii", 1000, 50, 30, 20),
    samoa = new Vertex("Samoa", 800, 20, 40, 10),
    tahiti = new Vertex("Tahiti", 1200, 60, 20, 25),
    new_zealand = new Vertex("New Zealand", 1260, 20, 27, 235),
    tonga = new Vertex("Tonga", 2300, 650, 242, 215)
  ]
  
  // Adding Islands to Graph
  vertices.forEach((vertex) => {graph.addVertex(vertex)});

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
edges.forEach((edge) => {graph.addEdge(edge)});
  
graph.display();
  