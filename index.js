const knightMoves = require("./knightMoves")

knightMoves
// Example usage
const start = [0, 0]
const end = [7, 7]
const boardSize = 8

const path = knightMoves(start, end, boardSize)

if (path) {
  console.log("Shortest Path:", path)
} else {
  console.log("No path found.")
}
