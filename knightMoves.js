function knightMoves(start, end, boardSize) {
  // Define possible knight moves (L-shaped jumps)
  const moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ]

  // Create a queue for Breadth-First Search (BFS)
  const queue = [[start]]
  const visited = new Set() // Keep track of visited squares

  // BFS loop (Breadth first search)
  while (queue.length) {
    const currentPath = queue.shift() // Get the first path in the queue
    const currentPos = currentPath[currentPath.length - 1] // Get the last position in the current path

    for (const [dx, dy] of moves) {
      const newX = currentPos[0] + dx
      const newY = currentPos[1] + dy

      // Check if new position is valid
      if (
        isValid(newX, newY, boardSize) &&
        !visited.has([newX, newY].toString())
      ) {
        visited.add([newX, newY].toString()) // Mark the new position as visited
        const newPath = currentPath.concat([[newX, newY]]) // Create a new path including the new position
        queue.push(newPath) // Add the new path to the queue

        // Check if we reached the end square
        if (newX === end[0] && newY === end[1]) {
          return newPath // Return the path if we reached the end position
        }
      }
    }
  }

  // No path found
  return null
}

// Helper function to check if a position is within board limits
function isValid(x, y, boardSize) {
  return x >= 0 && x < boardSize && y >= 0 && y < boardSize
}

module.exports = knightMoves
