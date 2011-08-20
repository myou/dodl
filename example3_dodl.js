/*
class ClassPanel
{
	attributes:
	
	behaviors:
	addReview()
	@{
		var node=window.ClassPanel.get_node(id,\"review_list\");
		var new_review=document.createElement(\"li\");
		new_review.innerHTML=\"new review\";
		node.appendChild(new_review);
	}@,
	setClassTitle(title)
	@{
		var node=window.ClassPanel.get_node(id,\"class_title\");
		node.innerHTML=title;
	}@,
	setAddReviewListener()
	@{
		var node=window.ClassPanel.get_node(id,\"add_review_button\");
		node.setAttribute('onclick','window.ClassPanel.addReview('+id+')');
	}@
	
	inner_tree:
	fieldset : {}
	{
		h3: class_title {} {}
		hr: {} {}
		h4: {} List of reviews {}
		ul: review_list {} {}
		input: add_review_button {@'type=\"button\",value=\"add review link\"'@} {}
	}
}
*/

var classpanel_construct="\
class ClassPanel\
{\
	attributes:\
	\
	behaviors:\
	addReview()\
	@{\
		var node=window.ClassPanel.get_node(id,\"review_list\");\
		var new_review=document.createElement(\"li\");\
		new_review.innerHTML=\"new review\";\
		node.appendChild(new_review);\
	}@\
	,\
	setClassTitle(title)\
	@{\
		var node=window.ClassPanel.get_node(id,\"class_title\");\
		node.innerHTML=title;\
	}@\
	,\
	setAddReviewListener()\
	@{\
		var node=window.ClassPanel.get_node(id,\"add_review_button\");\
		node.setAttribute('onclick','window.ClassPanel.addReview('+id+')');\
	}@\
	\
	inner_tree:\
	fieldset : {}\
	{\
		h3: class_title {} {}\
		hr: {} {}\
		h4: {} @'List of reviews'@ {}\
		ul: review_list {} {}\
		input: add_review_button {@'type=\"button\" value=\"add review link\"'@} {}\
	}\
}";

dodl_load(classpanel_construct);