$(function() {
	ttt.init();
});


var ttt = {
	turn: 'X',
	currentTurn: 0,
	board0: 0x0,
	board1: 0x0,
	
	init: function() { 
		this.resetBoard();
	
		$(document).on('click', '.cell', ttt.takeTurn );
	},
	
	takeTurn: function(e) {	
		e.preventDefault();
		var sqClass;

		if ( $(this).hasClass('taken') ) {
			return;
		}// end if

		$(this).text( ttt.turn );
		
		sqClass = $(this).attr("class");
		$(this).addClass( 'taken ' + ttt.turn );
		
    ttt.updateBoard(sqClass);    

		if ( ttt.checkWin( ttt.currentTurn ) ) {
			$('<h3 id="win">' + ttt.turn + ' wins!</h3>').insertBefore('#board');
		}// end if
		else {
			ttt.changeTurn();
		}
	},
	
	updateBoard: function (sqClass) {
    var bitn;
    
    bitn = sqClass.slice(-2);
    if(this.currentTurn) this.board1 += Math.pow(2, bitn);
    else this.board0 += Math.pow(2, bitn);
  }, 

	checkWin: function (currentTurn) {

    var y;                
		var nshftx;
		var whatToShift = {0:1,1:3,2:4,3:5};
			
		for (nshftx = 0; nshftx <= 3; nshftx++) {
		  if(this.currentTurn) y=this.board1;
		  else y = this.board0;
      y = y & (y >>> whatToShift[nshftx]);
      if (y & (y >>> whatToShift[nshftx])) return true;
    } //endfor
    return false;       
	},

	changeTurn: function () {
	  this.currentTurn = (this.currentTurn+1) % 2;
		if ( this.currentTurn) {    
			this.turn = 'O';
		}// end if
		else {
			this.turn = 'X';
		}// end else
	},

	resetBoard: function () {
		this.turn = 'X';
		this.currentTurn = 0;

		$('#win').remove();
		
		var grid_size = 3;
		var board='';
		var bitn = 0;
		for ( i = 1; i <= grid_size; i++ ) {
			board += '<div class="row">';
			for(j = 1; j <= grid_size; j++) {
			  board += '<div class="cell square0' + bitn + '">&nbsp;</div>';
			  bitn += 1;
			}
			bitn +=1;
			board += '</div>';
		}
		
		$('#board').html( board );
	}
}
