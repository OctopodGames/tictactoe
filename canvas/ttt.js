$(function() {
	drawBoard();
});

var turn = 'X';
var turns = 0;
var offset = 50;
var cellsize = 50;

function drawBoard()
{
	ypos = 0;
	for( i=0; i<9; i++ )
	{
		xpos = offset + (i%3)*cellsize;

		if (i%3 === 0)
		{
			ypos += cellsize;
		}// end if


		drawCell(xpos, ypos);

	}// end for
}// end drawBoard

function drawCell(xpos, ypos)
{
	name = xpos/cellsize + '-' + ypos/cellsize;
	
	$("canvas").drawRect({
		layer: true,
		group: "cells",
		name: name,
		strokeStyle: "#000",
		strokeWidth: 1,
		x: xpos, y: ypos,
		width: cellsize,
		height: cellsize,
		fromCenter: false,
		cursor: "pointer",
		click: function(layer) {
			//drawX();
			console.log(layer.name);
			if ( layer.taken )
			{
				return;
			}// end if

			window[ 'draw' + turn ]( layer.x, layer.y );

			layer.taken = turn;

			if ( checkWin( turn ) )
			{
				window.alert( turn + ' wins!!' );
			}// end if

			changeTurn();
		}
	});
}// end drawCell

function drawX(x,y)
{
	padding = 10;
	
	$("canvas").drawLine({
		layer: true,
		strokeStyle: "#000",
		strokeWidth: 4,
		x1: x+padding, y1: y+padding,
		x2: x+(offset-padding), y2: y+(offset-padding)
	});

	$("canvas").drawLine({
		layer: true,
		strokeStyle: "#000",
		strokeWidth: 4,
		x1: x+(offset-padding), y1: y+padding,
		x2: x+padding, y2: y+(offset-padding)
	});
}

function drawO(x,y)
{
	xpos = x + (cellsize/2);
	ypos = y + (cellsize/2);

	$("canvas").drawEllipse({
		layer: true,
		strokeStyle: "#000",
		strokeWidth: 4,
		x: xpos, y: ypos,
		width: cellsize-20, height: cellsize-20
	});
}


function checkWin()
{
	turns++;
	if ( turns < 5	)
	{
		return false;
	}// end if

	//check the canvas
	//$layers = $("canvas").getLayerGroup("cells");
	$canvas = $("canvas");
	for( i=1; i<=3; i++ )
	{
		if ($canvas.getLayer( i + "-1" ).taken == turn &&
			$canvas.getLayer( i + "-2" ).taken == turn &&
			$canvas.getLayer( i + "-3" ).taken == turn  )
		{
			return true;
		}// end if

		if ($canvas.getLayer( "1-" + i ).taken == turn &&
			$canvas.getLayer( "2-" + i ).taken == turn &&
			$canvas.getLayer( "3-" + i ).taken == turn )
		{
			return true;
		}// end if
	}// end for

	if ($canvas.getLayer( "1-1" ).taken == turn &&
		$canvas.getLayer( "2-2" ).taken == turn &&
		$canvas.getLayer( "3-3" ).taken == turn )
	{
		return true;
	}// end if

	if ($canvas.getLayer( "1-3" ).taken == turn &&
		$canvas.getLayer( "2-2" ).taken == turn &&
		$canvas.getLayer( "3-1" ).taken == turn )
	{
		return true;
	}// end if

	return false;
}// end checkWin

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
