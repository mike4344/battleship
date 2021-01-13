class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRos = numRos
    this.numCols = numCols
    this.numShips = numShips
    this.grid = populateGrid(numRos, numCols, numShips)

  }

  populateGrid(numRos, numCols, numShips) {
    // TODO: Using the instance variables numRows, numCols, and numShips, return
    // a 2D array representing the state of the board.
    let grid = [];
    for (let i = 0; i < numRos; i++) {
      grid.push([]);
      for (let j = 0; j < numCols; j++) {
        grid[i].push(0);
      }
    }
    let i = 0;
    while (i < numShips) {
      let row = Math.floor(Math.random() * numRos)
      let col = Math.floor(Math.random() * numCols)
      if (grid[row][col] !== "s") {
        i++
        grid[row][col] = "s"
      }
    }
    return grid
  }

  display() {
    // TODO: Print the game board with marks on any spaces that have been fired
    // upon. Be sure not to display the unhit ships to the user! Hint: you might
    // be able to use console.table()

  }

  count() {
    // TODO: Return the number of valid targets (ships) remaining.
  }

  isValidMove(pos) {
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack() {
    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}

module.exports = Board;
