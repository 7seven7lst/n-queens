/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.searchBoard = function (row, board, n, validator, callback){
  if (row === n) {
    return callback();
    
  }
  for (var column = 0; column < n; column++) {
    board.togglePiece(row,column); // preset it before testing    
    if (!board[validator]()){ // if there is a conflict
        searchBoard(row+1, board, n, validator, callback);
    }    
    board.togglePiece(row, column); 
  }
};


window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  var solution=board.rows();

  searchBoard(0, board, n, "hasAnyRooksConflicts", function(){
    solution = _.map(board.rows(), function(row){
     return row.slice();
    });
  });
  return solution;
};

 

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  searchBoard(0, board, n, "hasAnyRooksConflicts", function(){
    solutionCount++;
    return;
  })

  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution=board.rows();

  searchBoard(0, board, n, "hasAnyQueensConflicts", function(){
    return solution = _.map(board.rows(), function(row){
     return row.slice();
    });
  });
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutionCount = 0;

  searchBoard(0, board, n, "hasAnyQueensConflicts", function(){
    solutionCount++
    return;
  })
  return solutionCount;
};

