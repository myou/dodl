/*
grammar:

P				->		'class' Name '{' Attr Bhvr InnerTree '}'				%{ //all actions are strings; there will be no eval except for string substitution during parsing
																					window.n2.val={
																						\"new_obj\":function(id)
																						{
																							var obj_node=document.createElement(\"div\");
																							obj_node.setAttribute(\"name\",\"dodl_obj\");
																							obj_node.setAttribute(\"id\",\"n2.val\"+\"_\"+id);
																							n4.val
																							obj_node.innerHTML=\"n6.val\";
																							obj_node.proto=\"n2.val\";
																							return obj_node;
																						}
																						,
																						\"get_node_init\":function(id)
																						{
																							var sub_nodes=$(\"n2.val_\"+id).find(\"*\");
																							for (var i=0;i<sub_nodes.length;i++)
																							{
																								var InnerId=sub_nodes[i].getAttribute(\"innerid\");
																								if (InnerId!=null)
																								{sub_nodes[i].setAttribute(\"id\",\"n2.val\" + \"_\" + id + \"_\" + InnerId);}
																							}
																						}
																						,
																						\"get_node\":function(id,InnerId)
																						{
																							return document.getElementById(\"n2.val\"+\"_\"+id+\"_\"+InnerId);
																						}
																						n5.val
																					};
																				%}
				;
Name			->		[a-zA-Z][a-zA-Z0-9_-]*
				;
Attr			->		'attributes:' AttrList									%{ n2.val %}
				;
AttrList		->		AttrItem ',' AttrList									%{ n1.val n3.val %}
				|		AttrItem												%{ n1.val %}
				|		_
				;
AttrItem		->		AttrName '=' '\'' AttrVal '\''							%{ obj_node.setAttribute(\"n1.val\",\"n4.val\"); %}
				;
AttrName		->		[a-z0-9_-]*
				;
AttrVal			->		[.]*
				;
Bhvr			->		'behaviors:' BhvrList									%{ n2.val %}
				;
BhvrList		->		BhvrItem ',' BhvrList									%{ , n1.val n3.val %}
				|		BhvrItem												%{ , n1.val %}
				|		_
				;
BhvrItem		->		BhvrName '(' BhvrArgList ')' '{' BhvrVal '}'			%{ \"n1.val\" : function(id n3.val) { n6.val }%}
				;
BhvrName		->		[a-zA-Z_-][a-zA-Z0-9_-]*
				;
BhvrArgList		->		BhvrArgItem ',' BhvrArgList								%{ , n1.val n3.val %}
				|		BhvrArgItem												%{ , n1.val}
				|		_
				;
BhvrArgItem		->		[a-zA-Z_-][a-zA-Z0-9_-]*
				;
BhvrVal			->		[.]*
				;
InnerTree		->		'inner_tree:' NodeList									%{ n2.val %}
				;
NodeList		->		Node NodeList											%{ n1.val n2.val %}
				|		_
				;
Node			->		TagName ':' InnerId '{' TreeAttrList '}' TreeInnerHTML '{' NodeList '}'
																				%{
																					<n1.val n5.val innerid=\"n3.val\">
																						n7.val n9.val
																					</n1.val>
																				%}
				;
TagName			->		[a-z]*
				;
InnerId			->		[a-zA-Z0-9_-]*
				|		_
				;
TreeAttrList	->		'\'' TreeAttr '\''								%{ n2.val %}
				|		_
				;
TreeAttr		->		[.]*
				;
TreeInnerHTML	->		'\'' AttrVal '\''								%{ n2.val %}
				|		_
				;
*/

function dodl_load(input)
{
	var tokenized_input=dodl_tokenize(input);
	var sdt_result=dodl_parse(tokenized_input);
	eval(sdt_result);
}

//take tokenized input
//parses it and then performs SDT
//return final js code to be passed into eval
function dodl_parse(input)
{	
	var pos = 0;
	return p();
	
	//non-terminal functions call each of its production functions
	//restoring pos before each call
	//if a production function returns -1 (used in place of false to distinguish empty string)
	//then go to next production function, else return the return value of the production function
	
	//production functions call terminal and non-terminal functions
	//if any one of these functions returns -1, return -1
	//else replace n#.val patterns with approperiate return values, then return the SDT result of that production
	
	//the terminal function checks the next input token with its regex parameter
	//if entire next input token is matched, advance pos by 1 and return the token
	//else, return -1
	//all failures causing backtrack will occur here
	function p() {return p_prod_1();}
	
	function p_prod_1()
	{
		var result1=term("class");
		if (result1==-1) { alert("parsing failed at result1");return -1; }
		var result2=name();
		if (result2==-1) { alert("parsing failed at result2");return -1; }
		var result3=term('{');
		if (result3==-1) { alert("parsing failed at result3");return -1; }
		var result4=attr();
		if (result4==-1) { alert("parsing failed at result4");return -1; }
		var result5=bhvr();
		if (result5==-1) { alert("parsing failed at result5");return -1; }
		var result6=innertree();
		if (result6==-1) { alert("parsing failed at result6");return -1; }	
		var result7=term('}');
		if (result7==-1) { alert("parsing failed at result7");return -1; }
		
		var result="";
		result+="window.n2.val={";
		result+=	"\"new_obj\":function(id)";
		result+=	"{";
		result+=		"var obj_node=document.createElement(\"div\");";
		result+=		"obj_node.setAttribute(\"name\",\"dodl_obj\");";
		result+=		"obj_node.setAttribute(\"id\",\"n2.val\"+\"_\"+id);";
		result+=		"n4.val"
		result+=		"obj_node.innerHTML=\'n6.val\';";
		result+=		"obj_node.proto=\"n2.val\";";
		result+=		"return obj_node;";
		result+=	"}";
		result+=	",";
		result+=	"\"get_node_init\":function(id)";
		result+=	"{";
		result+=		"var sub_nodes=$(\"#n2.val_\"+id).find(\"*\");";
		result+=		"for (var i=0;i<sub_nodes.length;i++)";
		result+=		"{";
		result+=			"var InnerId=sub_nodes[i].getAttribute(\"innerid\");";
		result+=			"if (InnerId!=null)";
		result+=				"{sub_nodes[i].setAttribute(\"id\",\"n2.val\" + \"_\" + id + \"_\" + InnerId);}";
		result+=		"}";
		result+=	"}";
		result+=	",";
		result+=	"\"get_node\":function(id,InnerId)";
		result+=	"{";
		result+=		"return document.getElementById(\"n2.val\"+\"_\"+id+\"_\"+InnerId);";
		result+=	"}";
		result+=	"n5.val";
		result+="};";
		result=result.replace(/n2.val/g,result2);
		result=result.replace(/n4.val/g,result4);
		result=result.replace(/n5.val/g,result5);
		result=result.replace(/n6.val/g,result6);
		return result;
	}
	
	function name() {return name_prod_1();}
	
	function name_prod_1()
	{
		var result1=term(/[a-zA-Z][a-zA-Z0-9_-]*/);
		return result1;
	}
	
	function attr() {return attr_prod_1();}
	
	function attr_prod_1()
	{
		var result1=term("attributes:");
		if (result1==-1) { return -1; }
		var result2=attrlist();
		
		return result2;
	}
	
	function attrlist()
	{
		var saved=pos;
		var prod_result=attrlist_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=attrlist_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=attrlist_prod_3();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function attrlist_prod_1()
	{
		var result1=attritem();
		if (result1==-1) { return -1; }
		var result2=term(",");
		if (result2==-1) { return -1; }
		var result3=attrlist();
		if (result3==-1) { return -1; }
		
		return result1+result3;
	}
	
	function attrlist_prod_2()
	{
		var result1=attritem();
		return result1;
	}
	
	function attrlist_prod_3()
	{
		return "";
	}
	
	function attritem() {return attritem_prod_1();}
	
	function attritem_prod_1()
	{
		var result1=attrname();
		if (result1==-1) { return -1; }
		var result2=term("=");
		if (result2==-1) { return -1; }
		var result3=term("'");
		if (result3==-1) { return -1; }
		var result4=attrval();
		if (result4==-1) { return -1; }
		var result5=term("'");
		if (result5==-1) { return -1; }
		
		var result="obj_node.setAttribute(\"n1.val\",\"n4.val\");";
		result=result.replace(/n1.val/g,result1);
		result=result.replace(/n4.val/g,result4);
		return result;
	}
	
	function attrname() {return attrname_prod_1();}
	
	function attrname_prod_1()
	{
		var result1=term(/[a-z0-9_-]+/);
		return result1;
	}
	
	function attrval() {return attrval_prod_1();}
	
	function attrval_prod_1()
	{
		var result1=term(/.*/);
		return result1;
	}
	
	function bhvr() {return bhvr_prod_1();}
	
	function bhvr_prod_1()
	{
		var result1=term("behaviors:");
		if (result1==-1) { return -1; }
		var result2=bhvrlist();
		
		return result2;
	}
	
	function bhvrlist()
	{
		var saved=pos;
		var prod_result=bhvrlist_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=bhvrlist_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=bhvrlist_prod_3();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function bhvrlist_prod_1()
	{
		var result1=bhvritem();
		if (result1==-1) { return -1; }
		var result2=term(",");
		if (result2==-1) { return -1; }
		var result3=bhvrlist();
		if (result3==-1) { return -1; }
		
		return ","+result1+result3;
	}
	
	function bhvrlist_prod_2()
	{
		var result1=bhvritem();
		return ","+result1;
	}
	
	function bhvrlist_prod_3()
	{
		return "";
	}
	
	function bhvritem() {return bhvritem_prod_1();}
	
	function bhvritem_prod_1()
	{
		var result1=bhvrname();
		if (result1==-1) { return -1; }
		var result2=term(/\(/);
		if (result2==-1) { return -1; }
		var result3=bhvrarglist();
		if (result3==-1) { return -1; }
		var result4=term(/\)/);
		if (result4==-1) { return -1; }
		var result5=term("{");
		if (result5==-1) { return -1; }
		var result6=bhvrval();
		if (result6==-1) { return -1; }
		var result7=term("}");
		if (result7==-1) { return -1; }
		
		var result="\"n1.val\" : function(id n3.val) { n6.val }";
		result=result.replace(/n1.val/g,result1);
		result=result.replace(/n3.val/g,result3);
		result=result.replace(/n6.val/g,result6);
		return result;
	}
	
	function bhvrname() {return bhvrname_prod_1();}
	
	function bhvrname_prod_1()
	{
		var result1=term(/[a-zA-Z_-][a-zA-Z0-9_-]*/);
		return result1;
	}
	
	function bhvrarglist()
	{
		var saved=pos;
		var prod_result=bhvrarglist_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=bhvrarglist_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=bhvrarglist_prod_3();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function bhvrarglist_prod_1()
	{
		var result1=bhvrargitem();
		if (result1==-1) { return -1; }
		var result2=term(",");
		if (result2==-1) { return -1; }
		var result3=bhvrarglist();
		if (result3==-1) { return -1; }
		
		return ","+result1+result3;
	}
	
	function bhvrarglist_prod_2()
	{
		var result1=bhvrargitem();
		if (result1==-1) { return -1; }
		
		return ","+result1;
	}
	
	function bhvrarglist_prod_3()
	{
		return "";
	}
	
	function bhvrargitem() {return bhvrargitem_prod_1();}
	
	function bhvrargitem_prod_1()
	{
		var result1=term(/[a-zA-Z_-][a-zA-Z0-9_-]*/);
		return result1;
	}
	
	function bhvrval() {return bhvrval_prod_1();}
	
	function bhvrval_prod_1()
	{
		var result1=term(/.*/);
		return result1;
	}
	
	function innertree() {return innertree_prod_1();}
	
	function innertree_prod_1()
	{
		var result1=term("inner_tree:");
		if (result1==-1) { return -1; }
		var result2=nodelist();
		return result2;
	}
	
	function nodelist()
	{
		var saved=pos;;
		var prod_result=nodelist_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=nodelist_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function nodelist_prod_1()
	{
		var result1=node();
		if (result1==-1) { return -1; }
		var result2=nodelist();
		if (result2==-1) { return -1; }
		
		return result1+result2;
	}
	
	function nodelist_prod_2()
	{
		return "";
	}
	
	function node() {return node_prod_1();}
	
	function node_prod_1()
	{
		var result1=tagname();
		if (result1==-1) { return -1; }
		var result2=term(":");
		if (result2==-1) { return -1; }
		var result3=innerid();
		if (result3==-1) { return -1; }
		var result4=term("{");
		if (result4==-1) { return -1; }
		var result5=treeattrlist();
		if (result5==-1) { return -1; }
		var result6=term("}");
		if (result6==-1) { return -1; }
		var result7=treeinnerhtml();
		if (result7==-1) { return -1; }
		var result8=term("{");
		if (result8==-1) { return -1; }
		var result9=nodelist();
		if (result9==-1) { return -1; }
		var result10=term("}");
		if (result10==-1) { return -1; }
		
		var result="";
		result+="<n1.val n5.val innerid=\"n3.val\">";
		result+=	"n7.val n9.val";
		result+="</n1.val>";
		result=result.replace(/n1.val/g,result1);
		result=result.replace(/n3.val/g,result3);
		result=result.replace(/n5.val/g,result5);
		result=result.replace(/n7.val/g,result7);
		result=result.replace(/n9.val/g,result9);
		return result;
	}
	
	function tagname() {return tagname_prod_1();}
	
	function tagname_prod_1()
	{
		var result1=term(/[a-z0-9]+/);
		return result1;
	}
	
	function innerid()
	{
		var saved=pos;
		var prod_result=innerid_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=innerid_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		return -1
	}
	
	function innerid_prod_1()
	{
		var result1=term(/[a-zA-Z0-9_-]+/);
		return result1;
	}
	
	function innerid_prod_2()
	{
		return "";
	}
	
	function treeattrlist()
	{
		var saved=pos;
		var prod_result=treeattrlist_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=treeattrlist_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function treeattrlist_prod_1()
	{
		var result1=term("'");
		if (result1==-1) { return -1; }
		var result2=treeattr();
		if (result2==-1) { return -1; }
		var result3=term("'");
		if (result3==-1) { return -1; }
		
		return result2;
	}
	
	function treeattrlist_prod_2()
	{
		return "";
	}
	
	function treeattr() {return treeattr_prod_1();}
	
	function treeattr_prod_1()
	{
		var result1=term(/.*/);
		return result1;
	}
	
	function treeinnerhtml()
	{
		var saved=pos;
		var prod_result=treeinnerhtml_prod_1();
		if (prod_result!=-1) {return prod_result;}
		
		pos=saved;
		prod_result=treeinnerhtml_prod_2();
		if (prod_result!=-1) {return prod_result;}
		
		return -1;
	}
	
	function treeinnerhtml_prod_1()
	{
		var result1=term("'");
		if (result1==-1) { return -1; }
		var result2=attrval();
		if (result2==-1) { return -1; }
		var result3=term("'");
		if (result3==-1) { return -1; }
		
		return result2;
	}
	
	function treeinnerhtml_prod_2()
	{
		return "";
	}
	
	function term(token)
	{
		var term_result=input[pos].match(token);
		
		if (term_result==input[pos])
		{
			pos++;
			return term_result;
		}
		else {return -1;}
	}
}

//takes raw string input
//returns array of strings, where each string is a token
//if tokenizing fails, return false
function dodl_tokenize(input)
{	
	var result=[];
	var pos;
	
	for (pos=0;pos<input.length;pos++)
	{
		var input_char=input.charAt(pos);
		
		if (input_char=="@" && input.length-pos>3 && input.charAt(pos+1)=="{")
		{
			var token_result=process_bhvr_token();
			if (token_result==false) {alert("tokenizing failed at @{}@");return false;}
		}
		else if (input_char=="@" && input.length-pos>3 && input.charAt(pos+1)=="'")
		{
			var token_result=process_attr_token();
			if (token_result==false) {alert("tokenizing failed at @''@");return false;}
		}
		else if (input_char=="a" && input.length-pos>10 && input.substring(pos,pos+11)=="attributes:")
		{
			pos+=10;
			result.push("attributes:");
		}
		else if (input_char=="b" && input.length-pos>9 && input.substring(pos,pos+10)=="behaviors:")
		{
			pos+=9;
			result.push("behaviors:");
		}
		else if (input_char=="i" && input.length-pos>10 && input.substring(pos,pos+11)=="inner_tree:")
		{
			pos+=10;
			result.push("inner_tree:");
		}
		else if (input_char=="{" || input_char=="}" || input_char=="=" || input_char=="," || input_char=="(" || input_char==")" || input_char==":")
		{
			result.push(input_char);
		}
		else if (input_char==" " || input_char=="\t" || input_char=="\n")
		{
			//do nothing
		}
		else
		{
			var token_result=process_regular_token();
			if (token_result==false) {alert("tokenizing failed at regular token");return false;}
		}
	}
	
	/*
	alert("here goes nothing");
	alert(result);
	for (var i=0;i<result.length;i++) {alert(result[i]);}
	*/
	return result;
	
	//@{ token }@ -> {, token, }
	//if succeed, add the three tokens and return true
	//else, return false
	//advance pos to approperiate point
	function process_bhvr_token()
	{
		result.push("{");
		pos+=2;
		token="";
		for (var priv_pos=pos;priv_pos<input.length;priv_pos++)
		{
			if (input.charAt(priv_pos)=='}' && input.length-priv_pos>1 && input.charAt(priv_pos+1)=='@')
			{
				result.push(token);
				result.push("}");
				pos=priv_pos+1;
				return true;
			}
			else
			{
				token+=input.charAt(priv_pos);
			}
		}
		
		//failed
		return false;
	}
	
	//@{ token }@ -> {, token, }
	//if succeed, add the three tokens and return true
	//else, return false
	//advance pos to approperiate point
	function process_bhvr_token()
	{
		result.push("{");
		pos+=2;
		token="";
		for (var priv_pos=pos;priv_pos<input.length;priv_pos++)
		{
			if (input.charAt(priv_pos)=='}' && input.length-priv_pos>1 && input.charAt(priv_pos+1)=='@')
			{
				result.push(token);
				result.push("}");
				pos=priv_pos+1;
				return true;
			}
			else
			{
				token+=input.charAt(priv_pos);
			}
		}
		
		//failed
		return false;
	}
	
	//@' token '@ -> ', token, '
	//if succeed, add the three tokens and return true
	//else, return false
	//advance pos to approperiate point
	function process_attr_token()
	{
		result.push("'");
		pos+=2;
		token="";
		for (var priv_pos=pos;priv_pos<input.length;priv_pos++)
		{
			if (input.charAt(priv_pos)=="'" && input.length-priv_pos>1 && input.charAt(priv_pos+1)=='@')
			{
				result.push(token);
				result.push("'");
				pos=priv_pos+1;
				return true;
			}
			else
			{
				token+=input.charAt(priv_pos);
			}
		}
		
		//failed
		return false;
	}
	
	//special_char token special_char -> token
	//if succeed, add the token and return true
	//else, return false (must end with }, hence cannot end with regular token)
	//advance pos to approperiate point
	function process_regular_token()
	{
		token="";
		for (var priv_pos=pos;priv_pos<input.length;priv_pos++)
		{
			var regular_token_char=input.charAt(priv_pos);
			if (regular_token_char==" " || regular_token_char=="\t" || regular_token_char=="\n" || regular_token_char=="{" || regular_token_char=="}" || regular_token_char=="=" || regular_token_char=="," || regular_token_char=="(" || regular_token_char==")" || regular_token_char==":")
			{
				if (token=="") {alert("error, wrongfully entered process_regular_token()");return false;}
				else
				{
					result.push(token);
					pos=priv_pos-1;
					return true;
				}
			}
			else
			{
				token+=regular_token_char;
			}
		}
		
		//failed
		return false;
	}
}