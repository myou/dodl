function add_class()
{
	var main_panel=document.getElementById("mainpanel");
	
	var id=Math.floor(Math.random()*1001);
	var new_classpanel=window.ClassPanel.new_obj(id);
	main_panel.appendChild(new_classpanel);
	
	window.ClassPanel.get_node_init(id);
	window.ClassPanel.setClassTitle(id,"CS 164");
	window.ClassPanel.setAddReviewListener(id);
}