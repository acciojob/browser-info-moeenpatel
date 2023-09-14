//your JS code here. If required.
function hellocode()
{
let divelement = document.getElementById("browser-info");
	console.log(divelement);
let ptag = document. createElement("p");
ptag.innerText = "You are using " + navigator.appName +" "+"version" + navigator.appVersion
divelement.appendChild(ptag);
}