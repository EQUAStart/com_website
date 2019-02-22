(function() {

	// console.log("BambooHR()");
	//add css file to dom so IE8 recognizes it
	// document.write('<link href="https://equa.bamboohr.com/css/jobs-embed.css" rel="stylesheet" />');

  var divId="BambooHR-ATS";
	var el= typeof document !== 'undefined' && document.getElementById(divId);
	if(!el) {
    let div = typeof document !== 'undefined' && document.createElement('div');
    div.innerHTML = "<div id=\""+divId+"\"></div>";
		document.body.appendChild(div);
	}

	var xmlhttp;
  var ieFlag = 0;
	var _window = typeof(window) !== 'undefined' && window
	
	switch (true) {
		case _window && ('XDomainRequest' in _window && _window.XDomainRequest !== null) && document.documentMode < 10:
			xmlhttp=new XDomainRequest();
			ieFlag = 1;
		break;

		case _window && typeof(_window.XMLHttpRequest) !== 'undefined':
			xmlhttp=new XMLHttpRequest();
		break;

		case _window && typeof(_window.ActiveXObject) !== 'undefined':
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		break;

		default:
			// console.log("XmlHTTP not created. window: ", _window);
		break;
	}

	// console.log("XmlHTTP: ", xmlhttp);
	// if (window && ('XDomainRequest' in window && window.XDomainRequest !== null) && document.documentMode < 10) {
	// 	xmlhttp=new XDomainRequest();
	// 	ieFlag = 1;
	// } else if (window.XMLHttpRequest) {
	// 	xmlhttp=new XMLHttpRequest();
	// } else {
	// 	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	// }

	var embedUrl = "https://equa.bamboohr.com/jobs/embed2.php";

	var departmentId = 0;

	if (departmentId) {
		embedUrl += '?departmentId=' + encodeURIComponent(departmentId);
	}

	// window.addEventListener('load', function(event) {
		// if (event.target.readyState === "complete") {
			if ( xmlhttp ) {

				if (ieFlag == 1) { //needed for IE9 CORS
					xmlhttp.onload = loadd;
					xmlhttp.open("GET",embedUrl);
					xmlhttp.send();
	
				} else {
					xmlhttp.onreadystatechange=function() {
						if(xmlhttp.readyState==4 && xmlhttp.status==200) {

							var content = xmlhttp.responseText;
							var footerId="BambooHR-Footer";
							var fel=document.getElementById(footerId);

							el=document.getElementById(divId);

							if(el && !fel) {
								content += "<div id=\"BambooHR-Footer\">Powered by <a href=\"http://www.bamboohr.com\" target=\"_blank\" rel=\"external\"><img src=\"https://resources.bamboohr.com/images/footer-logo.png\" alt=\"BambooHR - HR software\"/></a></div>";
							}

							if(el) el.innerHTML=content;
						}
					}
					xmlhttp.open("GET",embedUrl,true);
					xmlhttp.send();
				}
			}
			// }
		// }
	// });

	function loadd() { //needed for IE9 CORS
		var content = xmlhttp.responseText;
		var footerId="BambooHR-Footer";
		var fel=document.getElementById(footerId);

		el=document.getElementById(divId);

		if(el && !fel) {
			content += "<div id=\"BambooHR-Footer\">Powered by <a href=\"http://www.bamboohr.com\" target=\"_blank\" rel=\"external\"><img src=\"https://resources.bamboohr.com/images/footer-logo.png\" alt=\"BambooHR - HR software\"/></a></div>";
		}
		el.innerHTML=content;
	}
}) ();