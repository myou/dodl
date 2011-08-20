/*
class BoardSquare
{
	attributes:
	class=@'emptySquare'@,
	
	behaviors:
	setOnClick()
	@{
		var node=document.getElementById('BoardSquare_'+id);
		node.setAttribute('onclick','window.BoardSquare.clicked('+id+')')
	}@
	,
	clicked()
	@{
		var node=$('#BoardSquare_'+id);
		var empty=node.hasClass('emptySquare');
		if (empty)
		{
			node.removeClass('emptySquare');
			var turn=window.Counter();
			if (turn==0) {node.append(\"<img height='50px' width='50px' src='x.png'></img>\");}
			else {node.append(\"<img height='50px' width='50px' src='circle.png'></img>\");}
		}
	}@,
	setPosition(pos)
	@{
		var node=$('#BoardSquare_'+id);
		node.addClass('pos'+pos);
	}@
	
	inner_tree:
}
*/

var boardsquare_construct="\
class BoardSquare\
{\
	attributes:\
	class=@'emptySquare'@\
	\
	behaviors:\
	setOnClick()\
	@{\
		var node=document.getElementById('BoardSquare_'+id);\
		node.setAttribute('onclick','window.BoardSquare.clicked('+id+')')\
	}@\
	,\
	clicked()\
	@{\
		var node=$('#BoardSquare_'+id);\
		var empty=node.hasClass('emptySquare');\
		if (empty)\
		{\
			node.removeClass('emptySquare');\
			var turn=window.Counter();\
			if (turn==0) {node.append(\"<img height='50px' width='50px' src='x.png'></img>\");}\
			else {node.append(\"<img height='50px' width='50px' src='circle.png'></img>\");}\
		}\
	}@,\
	setPosition(pos)\
	@{\
		var node=$('#BoardSquare_'+id);\
		node.addClass('pos'+pos);\
	}@\
	\
	inner_tree:\
}";

dodl_load(boardsquare_construct);