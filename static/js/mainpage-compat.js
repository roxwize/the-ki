// This contains stuff meant for the internet-explorer version of the site. JavaScript is kept minimal.
var el = document.getElementById("missing");
var a = document.getElementById("missingToggle");

a.onclick = function() {
	if (el.className == "hide") {
		el.className = "";
	} else {
		el.className = "hide";
	}
}