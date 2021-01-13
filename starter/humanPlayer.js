const readline = require('readline')
class HumanPlayer {
  constructor() {
    this.rl = readline.createInterface(process.stdin, process.stdout)
    // TODO: Create a new readline interface and store is as an instance
    // variable (this.rl). Remember to require the built-in node module,
    // 'readline'
  }

  getMove(processMove) {
    this.rl.question("what square woul you like to hit x,y", answer => {

      let move = answer.split(",").map(num => Number(num));
      console.log(move)


      processMove(move)
    })
    // TODO: Ask the user for their move and process the answer using the rl
    // interface.Invoke the callback function (processMove), passing in
    // the given answer in the form of an array representing [row, col]
  }

  processGameOver(isWon, turns) {
    if (isWon) {
      console.log(`Congratulations you won in ${turns} turns.`);
    } else {
      console.log('you lose')
    }
    this.rl.close()
    // TODO: Display a different message depending on if the player won or lost
    // the game. Close the rl interface.
  }
}

module.exports = HumanPlayer;
