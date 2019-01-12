class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    let board = [];
    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(0)
      }
      board.push(row)
    }
    return board;
    // TODO: Create and return an 2D Array 
    // with `this.height` as rows and `this.width` as cols.
    // For example, given a height of 4 and a width of 3, it will generate:
    // [
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    //  [0, 0, 0],
    // ]
  }

  getCell(row, col) {
    if (this.board[row][col] === undefined) {
      return 0; 
    }
    return this.board[row][col];
  }

  setCell(value, row, col) {
    this.board[row][col] = value;
  }

  toggleCell(row, col) {
    if (this.board[row][col] === 0) {
      this.board[row][col] = 1;
    }
    else {
      this.board[row][col] = 0;
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    let totalLiveCount = 0;

    totalLiveCount += this.getCell(row, col-1)
    totalLiveCount += this.getCell(row, col+1)
    totalLiveCount += this.getCell(row-1, col)
    totalLiveCount += this.getCell(row+1, col)
    totalLiveCount += this.getCell(row+1, col+1)
    totalLiveCount += this.getCell(row-1, col-1)
    totalLiveCount += this.getCell(row+1, col-1)
    totalLiveCount += this.getCell(row-1, col+1)
    
    return totalLiveCount;
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */
  
  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board 
    // (the next iteration of the game) 
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors

    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        
      }
    }

    this.board = newBoard;
  }
}

let game = new GameOfLife(3, 4)
// console.log(game.setCell(1, 1, 2))
console.log(game)