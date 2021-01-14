class Board {
  constructor(numRos, numCols, numShips) {
    // TODO: Set up constructor that sets the numRos, numCols, and numShips.
    // TODO: Set this.grid equal to the return value of the instance method
    // populateGrid().
    this.numRos = numRos
    this.numCols = numCols
    this.numShips = numShips
    this.grid = this.populateGrid(numRos, numCols, numShips)

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
    let gridCopy = JSON.parse(JSON.stringify(this.grid))

    //gridCopy.push(...this.grid)
    gridCopy.forEach((rows, index1) => {
      rows.forEach((cols, index2) => {
        if (gridCopy[index1][index2] === "s") {
          gridCopy[index1][index2] = 0;
        }
      })
    })
    console.table(gridCopy);
    //console.table(this.grid)

  }

  count() {
    let count = 0
    // TODO: Return the number of valid targets (ships) remaining.
    this.grid.forEach((rows, index1) => {
      rows.forEach((cols, index2) => {
        //console.log(this.grid[index1][index2])
        if (this.grid[index1][index2] === "s") {
          // console.log("made it to count")
          count++;
          // console.log(count)
        }
      })
    })
    return count
    // console.log(count)
    // console.table(this.grid);
  }

  isValidMove(pos) {
    console.log("we made it here")
    if (pos[0] < this.numRos && pos[1] < this.numCols) {
      return true
    }
    return false
    // TODO: Take in an attack position (in the form of an array [row, col]) and
    // return true if the position is a valid move.
  }

  isGameOver() {
    if (this.count() === 0) {
      return true;
    }
    // TODO: Return true if the game is over (when all ships are hit).
  }

  attack(pos) {
    let attackPosition = this.grid[pos[0]][pos[1]];
    if (attackPosition === 0) {
      this.grid[pos[0]][pos[1]] = "m"
    } else if (attackPosition === 's') {
      this.grid[pos[0]][pos[1]] = "h"
    }

    // TODO: Take in an attack position in the form of an array, [row, col], as
    // a parameter. Update this.grid depending on if the position is an empty
    // space or a damaged ship.
  }
}
// let board = new Board(4, 4, 2);


module.exports = Board;
