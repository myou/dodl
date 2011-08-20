/*
class RedSquare
{
	attributes:
	class=@'blackborder'@,
	
	behaviors:
	setOnClick()
	@{
		var node=document.getElementById('RedSquare_'+id);
		node.setAttribute('onclick','window.RedSquare.changeColor('+id+')')
	}@
	,
	changeColor()
	@{
		var node=document.getElementById('RedSquare_'+id);
		node.setAttribute('class','redborder');
	}@
	
	inner_tree:
}
*/

var redsquare_construct="\
class RedSquare\
{\
	attributes:\
	class=@'blackborder'@\
	\
	behaviors:\
	setOnClick()\
	@{\
		var node=document.getElementById('RedSquare_'+id);\
		node.setAttribute('onclick','window.RedSquare.changeColor('+id+')')\
	}@\
	,\
	changeColor()\
	@{\
		var node=document.getElementById('RedSquare_'+id);\
		node.setAttribute('class','redborder');\
	}@\
	\
	inner_tree:\
}";

/*
class BlueSquare
{
	attributes:
	class=@'blackborder'@,
	
	behaviors:
	setOnClick()
	@{
		var node=document.getElementById('BlueSquare_'+id);
		node.setAttribute('onclick','window.BlueSquare.changeColor('+id+')')
	}@
	,
	changeColor()
	@{
		var node=document.getElementById('BlueSquare_'+id);
		node.setAttribute('class','blueborder');
	}@
	
	inner_tree:
}
*/

var bluesquare_construct="\
class BlueSquare\
{\
	attributes:\
	class=@'blackborder'@,\
	\
	behaviors:\
	setOnClick()\
	@{\
		var node=document.getElementById('BlueSquare_'+id);\
		node.setAttribute('onclick','window.BlueSquare.changeColor('+id+')')\
	}@\
	,\
	changeColor()\
	@{\
		var node=document.getElementById('BlueSquare_'+id);\
		node.setAttribute('class','blueborder');\
	}@\
	\
	inner_tree:\
}";

dodl_load(redsquare_construct);
dodl_load(bluesquare_construct);