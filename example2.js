function init()
{
	window.Counter=getTurnIndicator();

	function getTurnIndicator()
	{
		var turn=0;
		return function() {
			if (turn==0) {turn=1;return turn;}
			else {turn=0;return turn;}
		};
	}

	var body=document.getElementsByTagName("body")[0];
	
	var id1=Math.floor(Math.random()*1001);
	var sq1=window.BoardSquare.new_obj(id1);
	
	var id2=Math.floor(Math.random()*1001);
	var sq2=window.BoardSquare.new_obj(id2);

	var id3=Math.floor(Math.random()*1001);
	var sq3=window.BoardSquare.new_obj(id3);

	var id4=Math.floor(Math.random()*1001);
	var sq4=window.BoardSquare.new_obj(id4);

	var id5=Math.floor(Math.random()*1001);
	var sq5=window.BoardSquare.new_obj(id5);

	var id6=Math.floor(Math.random()*1001);
	var sq6=window.BoardSquare.new_obj(id6);

	var id7=Math.floor(Math.random()*1001);
	var sq7=window.BoardSquare.new_obj(id7);

	var id8=Math.floor(Math.random()*1001);
	var sq8=window.BoardSquare.new_obj(id8);

	var id9=Math.floor(Math.random()*1001);
	var sq9=window.BoardSquare.new_obj(id9);
	
	body.appendChild(sq1);
	body.appendChild(sq2);
	body.appendChild(sq3);
	body.appendChild(sq4);
	body.appendChild(sq5);
	body.appendChild(sq6);
	body.appendChild(sq7);
	body.appendChild(sq8);
	body.appendChild(sq9);
	
	window.BoardSquare.setOnClick(id1);
	window.BoardSquare.setOnClick(id2);
	window.BoardSquare.setOnClick(id3);
	window.BoardSquare.setOnClick(id4);
	window.BoardSquare.setOnClick(id5);
	window.BoardSquare.setOnClick(id6);
	window.BoardSquare.setOnClick(id7);
	window.BoardSquare.setOnClick(id8);
	window.BoardSquare.setOnClick(id9);
	window.BoardSquare.setPosition(id1,1);
	window.BoardSquare.setPosition(id2,2);
	window.BoardSquare.setPosition(id3,3);
	window.BoardSquare.setPosition(id4,4);
	window.BoardSquare.setPosition(id5,5);
	window.BoardSquare.setPosition(id6,6);
	window.BoardSquare.setPosition(id7,7);
	window.BoardSquare.setPosition(id8,8);
	window.BoardSquare.setPosition(id9,9);
}