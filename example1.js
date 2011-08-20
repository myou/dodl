function addsquare()
{
	var color_index=document.getElementById("color_selector").selectedIndex;
	var id=Math.floor(Math.random()*1001);
	var new_node;
	
	if (color_index==0)
	{
		new_node=window['RedSquare'].new_obj(id);
	}
	else
	{
		new_node=window['BlueSquare'].new_obj(id);
	}
	
	document.getElementsByTagName("body")[0].appendChild(new_node);
	
	if (color_index==0) {window.RedSquare.setOnClick(id);}
	else {window.BlueSquare.setOnClick(id);}
}