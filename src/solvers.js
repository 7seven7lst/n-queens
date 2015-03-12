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

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //n = n || 8;

  var outcomes = [];
  var solutionCount = 0;
  var board = new Board({n:n});
  //console.log("here we have the array as",board);
  
  var combos = function(rooksAvailable, outcomesSoFar){
    if (rooksAvailable === 0) {
      solutionCount++;
      return;
    }

    for (var column = 0; column < n; column++) {
      var row = n - rooksAvailable; 

      outcomesSoFar.togglePiece(row,column); // preset it before testing    
      if (outcomesSoFar.hasAnyRooksConflicts()){ // if there is a conflict
        outcomesSoFar.togglePiece(row,column);
      }
      else { // else, there's not a conflict
        //debugger;
        rooksAvailable--;
        combos(rooksAvailable, outcomesSoFar);      
        outcomesSoFar.togglePiece(row, column); 
        rooksAvailable++;
      }
      

      // if it satisfies the conditions, go into the recursion as above, if not
      // go back into the loop
      //
    } // end for loop

  } // end combos
  
  combos(n,board);


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
