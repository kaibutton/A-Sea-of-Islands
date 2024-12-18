# A-Sea-of-Islands
ICS 311 | Assignment 5


Guidelines for graph representing the collection of islands:
1. Nodes are Islands, directed edges are paths between islands (by canoe)
2. Edge weights represent traversal time can can only be positive
3. Not every island has a path to every other island
4. Weight of AB may be different from BA

Island Characteristics:
1. Number of people
2. At least 3 different resource types


Traversal Characteristics:
1. Canoe's have limited cargo capacity
2. Canoe count may be limited
3. Canoes can only hold one resource type
4. To completely distribute a resource, canoes may have to return to the source of the resource

For each scenario, include:
1. A description of the algorithm used to implement the solution
2. Source code of algorithm that computes the most efficient solution

## Completing the Assignment
1. Create a visual representation of islands using a directed graph
   - Map out location of each island in region
   - Connect the graph using directed edges with weights corresponding to realistc travel times between islands
   - Give each island 5 properties (population, resource1, resource2, resource3, touristTime)
2. Implement Graph Class in Javascript
3. Implement algorithm, Problem 1
   - Use (Dijkstra’s?) algorithnm with priority queue considering population of each island
   - Write a short paragraph explaning how the implemented algorithm would search for the shortest path between each island, considering      the population of each island.
