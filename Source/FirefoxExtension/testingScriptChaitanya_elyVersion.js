// ==UserScript==
// @name           youtube
// @namespace      youtube
// ==/UserScript==


//Start
var theURL = window.location.href;
//Check if we are on a youtube video, later on we will have else ifs for other known sites, and an default else clause to get the user to help us find the player div for unknown sites
if(theURL.indexOf('youtube.com/watch')!= -1)
{
//Get the first child from the dom to insert our scripts into
var objTarget=document.documentElement.firstChild;
//Create a script tag pointing to our scripts (hosted serverside for now, soon as chrome://)
var objChromeScript=document.createElement( "script" );
objChromeScript.type="text/javascript";
objChromeScript.src="http://www.projectpossibility.org/projects/webcaption/cc_chromeJS.js";
objTarget.appendChild(objChromeScript);


var baseDiv=document.getElementById("subscribeDiv"); //base div for our buttons
//tab code
var cc_InsertTabJS = "function cc_InsertTab(){";
cc_InsertTabJS += "var objPlayerDiv=cc_findPlayerDiv();";
cc_InsertTabJS += "var strTabHTML = \"";
var cc_InsertTabJSInnerHTML = "<br/><div id=\\\"CC_tabDiv\\\" style=\\\"margin: 0px; padding: 0px; overflow: visible; display: block; width: 480px;\\\"><div align=\\\"right\\\" style=\\\"overflow: visible; height: 0px; width: 100%;\\\"><div align=\\\"center\\\" style=\\\"border-style: ridge ridge none; border-width: 2px 2px 0px; padding: 1px; overflow: visible; vertical-align: bottom; -moz-border-radius-topleft: 10px; -moz-border-radius-topright: 10px; opacity: 0.5; background-color: white; position: relative; top: -19px; left: -434px; z-index: 900; width: 40px; height: 15px; cursor: pointer;\\\"><span style=\\\"font-family: Arial,Helvetica,Sans-serif; font-size: 12px; font-style: normal; font-variant: normal; font-weight: bold; line-height: 140%; text-align: right; text-decoration: none; opacity: 1.5; color: black;\\\" onclick=\\\"cc_getCations();\\\">[CC]</span></div></div></div>";

cc_InsertTabJS += cc_InsertTabJSInnerHTML + "\";";

cc_InsertTabJS += "objPlayerDiv.innerHTML = strTabHTML + objPlayerDiv.innerHTML;}cc_InsertTab()";

var cc_InsertTabScript = document.createElement("script");
cc_InsertTabScript.type="text/javascript"
cc_InsertTabScript.innerHTML = cc_InsertTabJS;

//append our script to the first element
objTarget=document.documentElement.firstChild;
objTarget.appendChild(cc_InsertTabScript);




//function to re-write the player with ours


var cc_writePlayerDivJS = "function cc_writePlayerDiv(){alert('in cc_writePlayerDiv');";
cc_writePlayerDivJS += "var cell=document.getElementById(\"thisVidCell\");";

//style tags
cc_writePlayerDivJS += "var cc_styleInPlayer = document.createElement(\"style\");";
cc_writePlayerDivJS += "cc_styleInPlayer.type=\"text/css\";";
cc_writePlayerDivJS += "cc_styleInPlayer.media=\"screen\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+=\"#section-1 div\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+=\"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+=\"margin : 20px auto;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+=\"font: Verdana, Helvetica, Arial;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"padding: 0px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"background: #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"width: 80%;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu \";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border-bottom : 1px solid #ccc;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	margin : 0;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	padding-bottom : 19px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	padding-left : 10px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu ul, #menu li	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	display : inline;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	list-style-type : none;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	margin : 0;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	padding : 0;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu a:link, #menu a:visited	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	background : #E8EBF0;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border : 1px solid #ccc;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	color : #666;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	float : left;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	font-size : small;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	font-weight : normal;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	line-height : 14px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	margin-right : 8px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	padding : 2px 10px 2px 10px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	text-decoration : none;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu a:link.active, #menu a:visited.active	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	background : #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border-bottom : 1px solid #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	color : #000;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu a:hover	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	color : #f00;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#menu ul a:hover \";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	color : #f00 !important;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"div.section-1 #menu li#nav-1 a, \";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"div.section-2 #menu li#nav-2 a,\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"div.section-3 #menu li#nav-3 a\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	background : #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border-bottom : 1px solid #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	color : #000;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"#contents \";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"{\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	background : #fff;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border : 1px solid #ccc;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	border-top : none;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	clear : both;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	margin : 0px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"	padding : 30px;\";";
cc_writePlayerDivJS += "cc_styleInPlayer.innerHTML+= \"}\";";

cc_writePlayerDivJS += "var cc_styleTarget = document.documentElement.firstChild;";
cc_writePlayerDivJS += "cc_styleTarget.insertBefore(cc_styleInPlayer, cc_styleTarget.firstChild);";

//end style

cc_writePlayerDivJS += "  var cc_objDIV=document.createElement(\"div\");";
cc_writePlayerDivJS += "  var cc_objPlayerDIV=cc_findPlayerDiv();";

cc_writePlayerDivJS += "if(document.getElementById(\"ccGetCaptionScript\")!=null) ";
cc_writePlayerDivJS += "{";
cc_writePlayerDivJS += "var cc_objParent=document.getElementById(\"ccGetCaptionScript\").parentNode;";
cc_writePlayerDivJS += "	cc_objParent.removeChild(document.getElementById(\"ccGetCaptionScript\"));";
cc_writePlayerDivJS += "}";

cc_writePlayerDivJS += "/*cc_appendSRCforCaptions();*/";

cc_writePlayerDivJS += "  cc_objPlayerDIV.innerHTML=\"\";";

//playerDiv new Contents

//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \"<script language=\\\"JavaScript\\\" type='text/javascript'>\";";
//Begin script inside player div
//cc_writePlayerDivJS += "debugger";
cc_writePlayerDivJS += "var objUIScript=document.createElement( \"script\" );";

cc_writePlayerDivJS += "objUIScript.type=\"text/javascript\";";
cc_writePlayerDivJS += "objUIScript.src=\"http://www.projectpossibility.org/projects/webcaption/cc_UI_Script_e.js\";";
cc_writePlayerDivJS += "cc_objDIV.appendChild(objUIScript);";


//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \"var objUIScript=document.createElement( \\\"script\\\" )\";";
//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \"\";";
//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \"objUIScript.type=\\\"text/javascript\\\";\";";
//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \"objUIScript.src=\\\"http://www.projectpossibility.org/projects/webcaption/cc_UI_Script.js\\\"\";";
//cc_writePlayerDivJS += "cc_objDIV.innerHTML+= \" objU\";";

cc_writePlayerDivJS += "cc_objPlayerDIV.appendChild(cc_objDIV);";


//cc_writePlayerDivJS += "//var cc_updateOnce = document.createElement  \n update(1); /*should only work once*/\";";
//cc_writePlayerDivJS += "update(1); /*should only work once*/\";";
//end of playerdiv new contents


cc_writePlayerDivJS += "}";
var cc_writePlayerDivScript = document.createElement("script");
cc_writePlayerDivScript.type="text/javascript";
cc_writePlayerDivScript.innerHTML = cc_writePlayerDivJS;
//append our script to the first element
objTarget.appendChild(cc_writePlayerDivScript);






//function to get the captions and re-write the divs
var cc_getCaptionsJS = "function cc_getCations(){";
cc_getCaptionsJS += "/*hide the CC tab, only re-write the div if the cc tab is visible so we don't do it again*/";
cc_getCaptionsJS += "if(document.getElementById('CC_tabDiv')!=null){";
cc_getCaptionsJS += "document.getElementById('CC_tabDiv').style.visibility = 'hidden';";
cc_getCaptionsJS += "/*now re-write the playerDiv*/";
cc_getCaptionsJS += "cc_writePlayerDiv();";
cc_getCaptionsJS += "}}";
var cc_getCaptionsScript = document.createElement("script");
cc_getCaptionsScript.type="text/javascript"
cc_getCaptionsScript.innerHTML = cc_getCaptionsJS;
//append our script to the first element
objTarget.appendChild(cc_getCaptionsScript);



var script =document.createElement("script")

script.type="text/javascript"
script.innerHTML+=''
script.innerHTML+='	function ShowHide(value)\n'
script.innerHTML+='{\n'
script.innerHTML+='var id=(value==0)?1:0;\n'
script.innerHTML+='document.getElementById(id).style.display=(document.getElementById(id).style.display=="none")? "" : "none";\n'
script.innerHTML+='		document.getElementById(value).style.display=(document.getElementById(value).style.display=="none")? "" : "none";\n'
script.innerHTML+='}\n'
script.innerHTML+='\n'

script.innerHTML+='function Ping(value)\n'
script.innerHTML+='{\n'
script.innerHTML+='alert(value);\n'
script.innerHTML+='}\n'

script.innerHTML+='function CallFunction(){\n'
script.innerHTML+='try{\n'
//script.innerHTML+='debugger\n'
script.innerHTML+='var strURL="document.flash.Ping(\'"+window.location.toString()+"\')";\n'
script.innerHTML+='eval(strURL);\n'
script.innerHTML+='}\n'
script.innerHTML+='catch(err){\n'
script.innerHTML+='var test=0;\n'
script.innerHTML+='}\n'
script.innerHTML+='}\n'

  objTarget.appendChild(script);




}


