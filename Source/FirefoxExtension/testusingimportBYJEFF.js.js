// ==UserScript==
// @name           youtube
// @namespace      youtube
// ==/UserScript==

/*the main purpose of this js is to rewrite the page of youtube
and insert the necessary code to run our FLV player
captioning functions.
*/



//Start
var theURL = window.location.href;
//alert(window.location.href);
if(theURL.indexOf('youtube.com/watch')!= -1)
{
var objTarget=document.documentElement.firstChild;

//Start insertCaptionButtons

var objUIScript= document.createElement('script');
objUIScript.type = "text/javascript";
objUIScript.src = "http://www.projectpossibility.org/projects/webcaption/cc_UI_CaptionsScript_e.js";
document.documentElement.firstChild.appendChild(objUIScript);


//this is the script for inserting captions
var insertCaptionButtonsScript = document.createElement("script");
insertCaptionButtonsScript.type="text/javascript";
//new buttons
insertCaptionButtonsScript.innerHTML = "function insertCaptionButtons(cc_doesVidExist)";
insertCaptionButtonsScript.innerHTML +="{";

//DEBUG
insertCaptionButtonsScript.innerHTML +="alert('videxists inside insert: ' + cc_doesVidExist);";

insertCaptionButtonsScript.innerHTML +="var subScribeDIV=document.getElementById(\"subscribeDiv\");";
insertCaptionButtonsScript.innerHTML +="if(cc_doesVidExist == 'true')";//we should probably check for partial here...   (it is undefined right now!)
insertCaptionButtonsScript.innerHTML +="{";
//div for 'Get Captions' if captions exist
insertCaptionButtonsScript.innerHTML +="var getCapDIV=document.createElement(\"div\");";
insertCaptionButtonsScript.innerHTML +=" getCapDIV.innerHTML = \"<div id='container'/><br/><br/><a class='action-button' onclick='cc_getCations();' title='Get the captions for this video'><span class='action-button-leftcap'></span><span class='action-button-text' style='color:blue;'>Get Captions</span><span class='action-button-rightcap'></span></a>\";";
insertCaptionButtonsScript.innerHTML +="subScribeDIV.appendChild(getCapDIV);";
//we dont want div for Caption it!  if captions exist
/*
insertCaptionButtonsScript.innerHTML +="var captionItDIV=document.createElement(\"div\");";
insertCaptionButtonsScript.innerHTML +="captionItDIV.innerHTML = \"<a class='action-button' onclick='cc_getCations();' title='Captions already exist for this video'><span class='action-button-leftcap'></span><span class='action-button-text' style='color:grey;'>Caption It!</span><span class='action-button-rightcap'></span></a>\";";
*/
insertCaptionButtonsScript.innerHTML +="}";
insertCaptionButtonsScript.innerHTML +="else";
insertCaptionButtonsScript.innerHTML +="{";
//we dont want Get Captions if captions do not exist
/*
insertCaptionButtonsScript.innerHTML +=" getCapDIV.innerHTML = \"<br/><br/><a class='action-button' onclick=';' title='There are not any captions for this video yet'><span class='action-button-leftcap'></span><span class='action-button-text' style='color:grey;'>Get Captions</span><span class='action-button-rightcap'></span></a>\";";
*/
//div for Caption it!  if captions do not exist
insertCaptionButtonsScript.innerHTML +="var captionItDIV=document.createElement(\"div\");";
insertCaptionButtonsScript.innerHTML +="captionItDIV.innerHTML = \"<a class='action-button' onclick='cc_captionIt();' title='Start writing captions for this video!'><span class='action-button-leftcap'></span><span class='action-button-text' style='color:blue;'>Caption It!</span><span class='action-button-rightcap'></span></a>\";";
insertCaptionButtonsScript.innerHTML +="subScribeDIV.appendChild(captionItDIV);";
insertCaptionButtonsScript.innerHTML +="}";
insertCaptionButtonsScript.innerHTML +="}";

objTarget.appendChild(insertCaptionButtonsScript);
//End insertCaptionButtons





//cross site:

  var remoteScript=document.createElement("div");
  remoteScript.innerHTML = "<script src='http://www.projectpossibility.org/projects/webcaption/URL_test_mjt.php?mode=captionExist&domain=" + window.location.href.split('?')[0] +"&url_id=" + window.location.href.split('?')[1].split('=')[1].split('&')[0] + "'/>Calling...";

objTarget.appendChild(remoteScript);


//js function to find and return the playerdiv
var cc_findPlayerDivJS = "function cc_findPlayerDiv(){alert('in findPlayerDiv');";
cc_findPlayerDivJS += "var counter=0;";
cc_findPlayerDivJS += "while(document.getElementsByTagName(\"embed\")[counter]!=null)";
cc_findPlayerDivJS += "{";
cc_findPlayerDivJS += "	if(document.getElementsByTagName(\"embed\")[counter].width>0 ) ";
cc_findPlayerDivJS += "	{ ";
cc_findPlayerDivJS += "		break;";
cc_findPlayerDivJS += "	}  ";
cc_findPlayerDivJS += "	counter++;";
cc_findPlayerDivJS += "} ";
cc_findPlayerDivJS += "  return document.getElementsByTagName(\"embed\")[counter].parentNode;";
cc_findPlayerDivJS += "} ";

cc_findPlayerDivJS += 'var cc_text = \'<div id = "master" class = "section-1">\';';
cc_findPlayerDivJS += 'cc_text += \'<ul id = "menu">\';';
cc_findPlayerDivJS += 'cc_text += \'  <li id="nav-1"><a href="javascript:update(1)">View</a></li>\';';
cc_findPlayerDivJS += 'cc_text += \'  <li id="nav-2"><a href="javascript:update(2)">Captions</a></li>\';';
cc_findPlayerDivJS += 'cc_text += \'  <li id="nav-3"><a href="javascript:update(3)">Versions</a></li>\';';
cc_findPlayerDivJS += 'cc_text += \'</ul>\';';
cc_findPlayerDivJS += 'cc_text += \'<div id="contents">\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'		<table border = "0" width = "100%" >\';';
cc_findPlayerDivJS += 'cc_text += \'		<tr>\';';
cc_findPlayerDivJS += 'cc_text += \'		<td valign = "top">\';';
cc_findPlayerDivJS += 'cc_text += \'	\';';
cc_findPlayerDivJS += 'cc_text += \'		<div style = "border: 5px double #ccc; background-color: #E8EBF0; width: 100% ; height: 400px" >\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="100%" height="100%" id="ccPlayer" align="middle">\';';
cc_findPlayerDivJS += 'cc_text += \'			  	<param name="allowFullScreen" value="true" />\';';
cc_findPlayerDivJS += 'cc_text += \'		 	 	<param name="allow-access-from domain" value="*" />\';';
cc_findPlayerDivJS += 'cc_text += \' 	 			<param name="allowScriptAccess" value="always" />\';';
cc_findPlayerDivJS += 'cc_text += \'  				<param name="movie" value="player.swf"/>\';';
cc_findPlayerDivJS += 'cc_text += \'		  		<param name="quality" value="high" />\';';
cc_findPlayerDivJS += 'cc_text += \'  				<param name="bgcolor" value="#cccccc" />\';';
cc_findPlayerDivJS += 'cc_text += \'  				<embed src="http://www.projectpossibility.org/projects/webcaption/player.swf" allowfullscreen="true" quality="high" bgcolor="#cccccc"  name="flash" align="middle" id="flash1" allowScriptAccess="always" height="100%" width="100%" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />\';';
cc_findPlayerDivJS += 'cc_text += \' 	 		</object>\';';
cc_findPlayerDivJS += 'cc_text += \'	\';';
cc_findPlayerDivJS += 'cc_text += \'		</div>\';';
cc_findPlayerDivJS += 'cc_text += \'		 \';';
cc_findPlayerDivJS += 'cc_text += \'		</td>\';';
cc_findPlayerDivJS += 'cc_text += \'		\';';
cc_findPlayerDivJS += 'cc_text += \'		<td valign = "top" align = "right" width = "50%">		 		\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'		<div id = "content1">\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<div align = "left" style = "width : 80% ; font-size: 16px; font-family : courier;" >\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<br /> \';';
cc_findPlayerDivJS += 'cc_text += \'			Credits: \';';
cc_findPlayerDivJS += 'cc_text += \'			<br /><br /> \';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<ul>\';';
cc_findPlayerDivJS += 'cc_text += \'			<li> <b> Amgen </b> </li>\';';
cc_findPlayerDivJS += 'cc_text += \'				<ul>		\';';
cc_findPlayerDivJS += 'cc_text += \'			    		<li> Ely Lerner </li> \';';
cc_findPlayerDivJS += 'cc_text += \'				</ul>\';';
cc_findPlayerDivJS += 'cc_text += \'			</ul>\';';
cc_findPlayerDivJS += 'cc_text += \'			<ul>\';';
cc_findPlayerDivJS += 'cc_text += \'			<li> <b> USC </b> </li>\';';
cc_findPlayerDivJS += 'cc_text += \'				<ul>\';';
cc_findPlayerDivJS += 'cc_text += \'	    				<li> Jeffrey Chan </li>\';';
cc_findPlayerDivJS += 'cc_text += \'		    			<li> Chaitanya Ramavajjala </li>\';';
cc_findPlayerDivJS += 'cc_text += \'		    			<li> Chetan Sharma </li>\';';
cc_findPlayerDivJS += 'cc_text += \'    					<li> Raed Shomali </li>\';';
cc_findPlayerDivJS += 'cc_text += \'				</ul> \';';
cc_findPlayerDivJS += 'cc_text += \'			</ul>\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			</div>\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'		</div>\';';
cc_findPlayerDivJS += 'cc_text += \'	\';';
cc_findPlayerDivJS += 'cc_text += \'		<div id = "content2" style = "display:none">\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			 <form method = "get" action = "">\';';
cc_findPlayerDivJS += 'cc_text += \'			     \';';
cc_findPlayerDivJS += 'cc_text += \'					 <a href="javascript:AddNewRow(\\\'0:0\\\' , \\\'0:0\\\' , \\\'\\\')">Add Caption</a> <br /><br />\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'						<div id="divCaptions" style = "height:300px ; overflow:auto" >\';';
cc_findPlayerDivJS += 'cc_text += \'						</div>\';';
cc_findPlayerDivJS += 'cc_text += \'					 \';';
cc_findPlayerDivJS += 'cc_text += \'					 <br /><br />\';';
cc_findPlayerDivJS += 'cc_text += \'					 \';';
cc_findPlayerDivJS += 'cc_text += \'					 <input id = "captionsButton" type = "button" value = "Save Captions" onClick = "saveCaptions()" /><input type = "button" value = "Clear" onClick = "removeAllRows()" />\';';
cc_findPlayerDivJS += 'cc_text += \'		 	 </form>\';';
cc_findPlayerDivJS += 'cc_text += \'		</div>\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'		<div id = "content3" style = "display:none">\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<div align = "left" style = "width : 80% ; font-size: 16px;" ><br /> Available Versions (4): <br /><br /> </div>\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<table width = "70%" style = "font-family : courier">\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<tr>\';';
cc_findPlayerDivJS += 'cc_text += \'				<td> <b>Version 4:</b> March 23rd 08 </td> <td> <img src = "play.jpg" /> <img src = "save.jpg" /> </td>\';';
cc_findPlayerDivJS += 'cc_text += \'			</tr>	\';';
cc_findPlayerDivJS += 'cc_text += \'		\';';
cc_findPlayerDivJS += 'cc_text += \'			<tr>\';';
cc_findPlayerDivJS += 'cc_text += \'				<td> <b>Version 3:</b> March 20th 08 </td> <td> <img src = "play.jpg" /> <img src = "save.jpg" /> </td>\';';
cc_findPlayerDivJS += 'cc_text += \'			</tr>	\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<tr>\';';
cc_findPlayerDivJS += 'cc_text += \'				<td> <b>Version 2:</b> March 15th 08 </td> <td> <img src = "play.jpg" /> <img src = "save.jpg" /> </td>\';';
cc_findPlayerDivJS += 'cc_text += \'			</tr>	\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'			<tr>\';';
cc_findPlayerDivJS += 'cc_text += \'				<td> <b>Version 1:</b> March 02nd 08 </td> <td> <img src = "play.jpg" /> <img src = "save.jpg" /> </td>\';';
cc_findPlayerDivJS += 'cc_text += \'			</tr>	\';';
cc_findPlayerDivJS += 'cc_text += \'	\';';
cc_findPlayerDivJS += 'cc_text += \'			</table>\';';
cc_findPlayerDivJS += 'cc_text += \'		</div>\';';
cc_findPlayerDivJS += 'cc_text += \'\';';
cc_findPlayerDivJS += 'cc_text += \'		</td>\';';
cc_findPlayerDivJS += 'cc_text += \'		</tr>\';';
cc_findPlayerDivJS += 'cc_text += \'		</table>\';';
cc_findPlayerDivJS += 'cc_text += \'	\';';
cc_findPlayerDivJS += 'cc_text += \'</div>\';';
cc_findPlayerDivJS += 'cc_text += \'</div>\';';


cc_findPlayerDivJS += "var parser = new DOMParser();";
cc_findPlayerDivJS += "var xmlDoc = parser.parseFromString(cc_text,\"text/xml\");";
cc_findPlayerDivJS += "var subDIV = cc_findPlayerDiv();";
cc_findPlayerDivJS += "subDIV.appendChild(xmlDoc.documentElement);";
cc_findPlayerDivJS += "alert('affter appendChild');";

var cc_findPlayerDivScript = document.createElement("script");
cc_findPlayerDivScript.type="text/javascript"
cc_findPlayerDivScript.innerHTML = cc_findPlayerDivJS;
objTarget=document.documentElement.firstChild;
objTarget.appendChild(cc_findPlayerDivScript);



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

//this is the style tags
//to be used in the player that we are going to replace with the youtube's player
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

cc_writePlayerDivJS += "var objTarget=document.documentElement.firstChild;";
cc_writePlayerDivJS += "var remoteScript=document.createElement('div');";
cc_writePlayerDivJS += "remoteScript.innerHTML = \"<script id='ccGetCaptionScript' src='http://www.projectpossibility.org/projects/webcaption/URL_test_mjt.php?mode=getCaption&domain=\" + window.location.href.split('?')[0] +\"&url_id=\" + window.location.href.split('?')[1].split('=')[1].split('&')[0] + \"'/>\";";

cc_writePlayerDivJS += "objTarget.appendChild(remoteScript);";



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

//Jeffrey working on it...
//function to for CaptionIt Button
var cc_CaptionItJS = "function cc_captionIt(){";
cc_CaptionItJS += "if(document.getElementById('CC_tabDiv')!=null){";
cc_CaptionItJS += "document.getElementById('CC_tabDiv').style.visibility = 'hidden';";
cc_CaptionItJS += "cc_writePlayerDiv();";
cc_CaptionItJS += "}}";
var cc_CaptionItScript = document.createElement("script");
cc_CaptionItScript.type="text/javascript"
cc_CaptionItScript.innerHTML = cc_getCaptionsJS;
objTarget.appendChild(cc_CaptionItScript);


/*
var addButtonsScript = document.createElement("script");
addButtonsScript.type="text/javascript";
addButtonsScript.innerHTML = "try { var exists = (cc_doesVidExist != undefined);}catch(e) {var exists = false; } insertCaptionButtons(cc_doesVidExist);";
baseDiv.appendChild(addButtonsScript);
*/


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


