test( "Check Win", function() {
	$('.row3 .col1').click();
  ok( ttt.turn == "O", "O gets turn after initial X click" );

	current_turn = ttt.turn;
	$('.row2 .col2').click();
	equal( $('.row2 .col2').html(), current_turn, "X gets turn after O click" );

	current_turn = ttt.turn;
	$('.row3 .col3').click();
	equal( $('.row3 .col3').html(), current_turn, "X gets turn after O click" );
		
	current_turn = ttt.turn;
	$('.row1 .col3').click();
	equal( $('.row1 .col3').html(), current_turn, "X gets turn after O click" );
		
	current_turn = ttt.turn;
	$('.row3 .col2').click();
	equal( $('.row3 .col2').html(), current_turn, "X gets turn after O click" );
	
	ttt.checkWin();
});
