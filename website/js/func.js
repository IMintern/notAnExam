console.log('hey ninjas!');

function whenLoaded() {

var el = document.getElementById('switch');

	if(el){
		console.log('el')
	  el.addEventListener("click", changeCSS)
	} else {
		console.log('noel')
	}

	function changeCSS() {
		if (document.getElementById('css').href === "http://localhost:8080/css/style.css") {
			document.getElementById('css').href = "http://localhost:8080/css/other.css";
		} else {
			document.getElementById('css').href = "http://localhost:8080/css/style.css"
		}
	}

}

window.onload = whenLoaded;
