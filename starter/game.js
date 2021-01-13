const Board = require("./board.js")
class BattleshipGame {
  constructor(human, numRow, numCol, numShip) {
    // TODO: Set up constructor to store reference to the humanPlayer and
    // instantiate a new instance of the Board class and set it to this.board.
    // Remember to import your Board class.
    this.board = new Board(numRow, numCol, numShip);
    this.player = human;
    this.turns = 0;
  }

  playTurn() {
    // TODO: Display the state of the game and ask for the users input.
    this.board.display()
    this.player.getMove(this.processMove)
  }

  displayStatus() {
    // TODO: Display the current state of the game to the player.
    this.board.display()
  }

  processMove(pos) {
    // TODO: Detemerine if the move is valid. If so, invoke the attack method on
    //     the board instance and increment this.turns by 1. If the game is over,
    //     display the final status of the game and end the game. If not, play
    //     another turn. If the move is invalid, ask the player to input a valid
    //     position and play another turn.
    if (this.board.isValidMove(pos)) {
      this.board.attack(pos);
      this.turns++
      if (this.board.isGameOver()) {
        this.displayStatus()
        this.player.processGameOver(true, this.turns)
      } else {
        this.playTurn()
      }
    } else {
      console.log("you suck at battleship try again");
      this.playTurn()
    }

  }
}

module.exports = BattleshipGame;
