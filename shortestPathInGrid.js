/**
 * Find the Shortest Path in a Grid with Obstacles Elimination

Problem:
You are given an m x n grid. Each cell is either empty (0) or an obstacle (1). 
You can eliminate at most k obstacles. Return the minimum number of steps to walk 
from the top-left corner to the bottom-right corner.

For example:

    Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
    Output: 6
    Explanation: The shortest path without exceeding k eliminations is 6 steps.

Solution:
This is a graph traversal problem that can be solved using BFS with a state that 
tracks both the current position and the number of obstacles eliminated.
 */

function shortestPath(grid, k) {
    const rows = grid.length, cols = grid[0].length;
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(-1));
    const queue = [[0, 0, 0, 0]];  // row, col, steps, obstacles eliminated
  
    visited[0][0] = 0;
  
    while (queue.length > 0) {
      const [r, c, steps, obstacles] = queue.shift();
  
      if (r === rows - 1 && c === cols - 1) return steps;
  
      for (const [dr, dc] of directions) {
        const nr = r + dr, nc = c + dc;
  
        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          const newObstacles = obstacles + (grid[nr][nc] === 1 ? 1 : 0);
          if (newObstacles <= k && (visited[nr][nc] === -1 || visited[nr][nc] > newObstacles)) {
            visited[nr][nc] = newObstacles;
            queue.push([nr, nc, steps + 1, newObstacles]);
          }
        }
      }
    }
  
    return -1;
  }
  
  console.log(shortestPath([[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], 1));  // Output: 6

/**
 * Explanation:

    BFS (Breadth-First Search): We explore the grid level by level, keeping
     track of the number of steps taken and the number of obstacles eliminated.
    Visited State: We maintain a visited matrix where each cell stores the 
    minimum number of obstacles eliminated to reach that cell. We only revisit a 
    cell if we can eliminate fewer obstacles.
    Time Complexity: O(m * n * k), where m and n are the dimensions of 
    the grid and k is the number of obstacles we can eliminate.
 */
  