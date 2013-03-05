$(function() {
	ttt.init();
});


var ttt = {
	turn: 'X',
	turns: 0,
	
	init: function() { 
		this.resetBoard();
	
		$(document).on('click', '.cell', ttt.takeTurn );
	},
	
	takeTurn: function(e) {	
		e.preventDefault();

		if ( $(this).hasClass('taken') ) {
			return;
		}// end if

		$(this).text( ttt.turn );
		$(this).addClass( 'taken ' + ttt.turn );

		if ( ttt.checkWin( ttt.turn ) ) {
			$('<h3 id="win">' + ttt.turn + ' wins!</h3>').insertBefore('#board');
		}// end if
		else {
			ttt.changeTurn();
		}
	},

	checkWin: function () {
		this.turns++;
		if ( this.turns < 5	)
		{
			return false;
		}// end if
	
		for( i=1; i<=3; i++ )
		{
			// win in a row
			selector = '.row' + i + ' .taken.' + this.turn;
			if( $( selector ).length == 3 )
			{
				return true;
			}// end if
	
			// win in a column
			selector = '.col' + i + '.taken.' + this.turn;
			if( $( selector ).length == 3 )
			{
				return true;
			}// end if
		}// end for
	
		// diagonal, top left to bottom right
		selector = '.row1 .col1.taken.' + this.turn +', .row2 .col2.taken.' + this.turn +', .row3 .col3.taken.' + this.turn;
		if( $( selector ).length == 3 )
		{
			return true;
		}// end if
	
		// diagonal, top right to bottom left
		selector = '.row1 .col3.taken.' + this.turn +', .row2 .col2.taken.' + this.turn +', .row3 .col1.taken.' + this.turn;
		if( $( selector ).length == 3 )
		{
			return true;
		}// end if
	
		return false;
	},

	changeTurn: function ()
	{
		if ( 'X' == this.turn )
		{
			this.turn = 'O';
		}// end if
		else
		{
			this.turn = 'X';
		}// end else
	},

	resetBoard: function ()
	{
		this.turn = 'X';
		this.turns = 0;

		$('#win').remove();
		
		var grid_size = 3;
		var board='';
		for(i = 1; i <= grid_size; i++)
		{
			board += '<div class="row' + i + '">';
			for(j = 1; j <= grid_size; j++)
			{
				board += '<div class="cell col' + j + '">&nbsp;</div>';
			}
			board += '</div>';
		}
		
		$('#board').html(board);
	}
}
