(function() {

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
  var window = typeof window !== 'undefined' && window
	if (('XDomainRequest' in window && window.XDomainRequest !== null) && document.documentMode < 10) {
		xmlhttp=new XDomainRequest();
		ieFlag = 1;
	} else if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	} else {
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	var embedUrl = "https://equa.bamboohr.com/jobs/embed2.php";

	var departmentId = 0;

	if (departmentId) {
		embedUrl += '?departmentId=' + encodeURIComponent(departmentId);
	}

	// window.addEventListener('load', function(event) {
		if (event.target.readyState === "complete") {
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