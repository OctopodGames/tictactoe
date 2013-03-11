test( "board reset", function() {
	ok( ttt.turn == "X", "X gets first turn" );
	ok( ttt.turns == 0, "reset num turns taken" );
	
	banner_exists = "Y";
	if($("#win").length == 0) {
		banner_exists = "N";
	}
	ok( banner_exists == "N", "winner banner nuked" );
	
	extra_row_exists = "Y";
	if($(".row4").length == 0) {
		extra_row_exists = "N";
	}
	ok( extra_row_exists == "N", "check num rows" );
	
	extra_col_exists = "Y";
	if($(".col4").length == 0) {
		extra_col_exists = "N";
	}
	ok( extra_col_exists == "N", "check num columns" );
});


test( "turns", function() {
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

});

/**
 * Zach's Unit Test, bitches!!
 */

test("Change User", function() {
	ok(ttt.turn === "X", "X is dumb and won't share 1st turn");
	ttt.changeTurn();
	ok(ttt.turn === "O", "O always gets the short-end of the stick and goes 2nd");
	ttt.changeTurn();
	ok(ttt.turn === "X", "I guess X can go again, even though he sucks");
});
