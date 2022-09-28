function showandhide(id) {
	var x = document.getElementById(id);
	if (x.style.display == "block") {
	x.style.display = "none"
	}
	else
	x.style.display = "block"
}
function play(id) {
	var x = document.getElementById(id);
	if (x.textContent == "hf") {
		x.innerHTML = "hdfgdhgidfhghdukfh"
	}
	else {
		x.innerHTML = "hf"
	}
}