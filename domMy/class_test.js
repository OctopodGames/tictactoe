/* test( "turns", function() {
	ok( ttt.turn == "X", "X gets first turn" );
	
	ttt.changeTurn();
	
	ok( ttt.turn == "O", "O gets next turn" );
	
	ttt.changeTurn();
	
	ok( ttt.turn == "X", "X gets next turn" );
});


test( "turns with clicks", function() {
	$('.row1 .col1').click();
	ok( ttt.turn == "O", "O gets turn after initial X click" );

	current_turn = ttt.turn;
	$('.row2 .col2').click();
	equal( $('.row2 .col2').html(), current_turn, "X gets turn after O click" );

	current_turn = ttt.turn;
	$('.row3 .col3').click();
	equal( $('.row3 .col3').html(), current_turn, "X gets turn after O click" );

});   */

test( "board config", function() {
  $('.square00').click();
	ok( ttt.board0 == Math.pow(2,0), "X in square 0" );
	
	$('.square01').click();
	ok( ttt.board1 == Math.pow(2,1), "O in square 1" );
	
	
});