let code = document.getElementById("input");
let cods = ["TI1295ANpitK", "RPGja9248GJkd"];

function search_f() {
	if(code.value == "TI1295ANpitK") {	
		window.location = "";
	} else if(code.value == "RPGja9248GJkd") {
		window.location = "";
	} else {
		alert("Код не найден!");
	}
}

let search = document.getElementById("search");
search.addEventListener("click", search_f);