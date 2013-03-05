$(function() {
	drawBoard();

	$(document).on('click', '.cell', function(e){
		e.preventDefault();

		if ( $(this).hasClass('taken') )
		{
			return;
		}// end if

		$(this).text( turn );
		$(this).addClass( 'taken ' + turn );

		if ( checkWin( turn ) )
		{
			window.alert( turn + ' wins!!' );
		}// end if

		changeTurn();
	});
});

var turn = 'X';
var turns = 0;

function checkWin()
{
	turns++;
	if ( turns < 5	)
	{
		return false;
	}// end if

	for( i=1; i<=3; i++ )
	{
		// win in a row
		selector = '.row' + i + ' .taken.' + turn;
		if( $( selector ).length == 3 )
		{
			return true;
		}// end if

		// win in a column
		selector = '.col' + i + '.taken.' + turn;
		if( $( selector ).length == 3 )
		{
			return true;
		}// end if
	}// end for

	// diagonal, top left to bottom right
	selector = '.row1 .col1.taken.' + turn +', .row2 .col2.taken.' + turn +', .row3 .col3.taken.' + turn;
	if( $( selector ).length == 3 )
	{
		return true;
	}// end if

	// diagonal, top right to bottom left
	selector = '.row1 .col3.taken.' + turn +', .row2 .col2.taken.' + turn +', .row3 .col1.taken.' + turn;
	if( $( selector ).length == 3 )
	{
		return true;
	}// end if

	return false;
}

function changeTurn()
{
	if ( 'X' == turn )
	{
		turn = 'O';
	}// end if
	else
	{
		turn = 'X';
	}// end else
}

function drawBoard()
{
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