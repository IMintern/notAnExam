console.log('hey ninjas!');

function whenLoaded() {

	// swapping css files

	var el = document.getElementById('switch');

	if(el){
		console.log('el');
		el.addEventListener("click", changeCSS);
	} else {
		console.log('noel');
	}

	function changeCSS() {
		if (document.getElementById('css').href === "http://localhost:8080/css/style.css") {
			document.getElementById('css').href = "http://localhost:8080/css/other.css";
		} else {
			document.getElementById('css').href = "http://localhost:8080/css/style.css";
		}
	}

	// swapping table data

	var el = document.getElementById('swap');
	// check the element exists
	if(el){
		console.log('tel');
		el.addEventListener("click", changeTable); // fire funct
	} else {
		console.log('tnoel');
	}

	function changeTable() {
		// get columns that need to be swapped from table
		var column1 = document.getElementsByClassName('column1');
		var column2 = document.getElementsByClassName('column2');

		// swap them
		for (var i =0; i<column1.length; i++) {
			var temp = column1[i].innerHTML;
			column1[i].innerHTML = column2[i].innerHTML;
			column2[i].innerHTML = temp;
		}
	}

}

window.onload = whenLoaded;
