//test("win", function(){ok(!ttt.checkWin(),"Test for invalid win condition at start");});

test("horizontal-win", function(){
	ttt.resetBoard();
	ttt.turns = 5;
	ttt.turn = 'X';
	for(i=1; i<=3; i++){//rows
		for(j=1; j<=3; j++){//columns
			$('.row'+i+' .col'+j).addClass('taken X');
			if(i>1){$('.row'+(i-1)+' .col'+j).removeClass('taken X');}
		}
		ok(ttt.checkWin(),"Horizontal test - win row "+i);
	}
});
