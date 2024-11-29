var ctrl = {
	newGame : function() {
		currGame = new game(16, 16);
		board.writeBoard();
		alert('Bạn đang bấm vào nút Ván mới');
	},
	undo : function() {
		alert('Bạn đang bấm vào nút Xin đi lại');
	},
	resign : function() {
		alert('Bạn đang bấm vào nút Chịu thua');
		currGame.isGamming = false;
	},
	standUp : function() {
		if (currGame.Turn == X) {
			var bestMove = {row: 0, col:0};
			AIthink(X, bestMove);
			currGame.sq[bestMove.row][bestMove.col] = X;
			board.sqUpdate(bestMove.row, bestMove.col);
			referee.checkWin();
			currGame.Turn = O;
			currGame.noOfPiece++;
		} else {
			var bestMove = {row:0, col:0};
			AIthink(O, bestMove);
			currGame.sq[bestMove.row][bestMove.col] = O;
			board.sqUpdate(bestMove.row, bestMove.col);
			referee.checkWin();
			currGame.Turn = X;
			currGame.noOfPiece++;
		}
		alert('Bạn đang bấm vào nút Thoát');
	}
};