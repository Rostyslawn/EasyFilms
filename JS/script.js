$("document").ready(function() {
	function show_search() {
		$(".nav").append('<div><input width="200" height="30" value="" type="text" id="search_input"></div>');
		$(nav_search).remove();
		$(nav_start_search).css({ "display":"block" });

		let search_catigories = document.getElementById("search_catigories"); // find btn search_catigories
		$(search_catigories).css({ "display":"block" }); // hide this btn

		alert("Для просмотра списка фильмов введите: список фильмов(вводите названия фильмов русскими буквами!)")
	}

	// search catigories
	function start_search_catigories() {
		let input, filter, ul, li, a, i;
	  	input = document.getElementById("search_input");
	  	filter = input.value.toUpperCase();
	  	ul = document.getElementById("catigories");
	  	li = ul.getElementsByTagName("li");

	  	for (i = 0; i < li.length; i++) {
	    	a = li[i].getElementsByTagName("a")[0];
	    	if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
	      		li[i].style.display = "";
	    	} else {
	      		li[i].style.display = "none";
	    	}
	 	}
	}

	// search film
	function start_search() {
		let search_input = document.getElementById("search_input");
		let search_input_case = search_input.value.toLowerCase();
		if(search_input_case == "список фильмов") {
			alert("поворот не туда, титаник, т-34, приключения янки в африке, американский пирог, 300 спартанцев, лекарь ученик авецинны, битва самураев, пункт назначения, родина, домовой, один день лета, команда а, каникулы строгого режима, материнский инстинкт, испытание, 9 рота, если враг не сдается, пипец, брестская крепость, тупой и умный, центурион, находка, во имя короля, глаз, небоскреб");
		} else if(search_input_case.length < 1) {
			alert("Вы ничего не ввели!");
		} else if(search_input_case == "поворот не туда") {
			window.location = "Films-Pages/film1.html";
		} else if(search_input_case == "титаник") {
			window.location = "Films-Pages/film2.html";
		} else if(search_input_case == "т-34") {
			window.location = "Films-Pages/film3.html";
		} else if(search_input_case == "приключения янки в африке") {
			window.location = "Films-Pages/film5.html";
		} else if(search_input_case == "корабль-призрак") {
			window.location = "Films-Pages/film7.html";
		} else if(search_input_case == "американский пирог") {
			window.location = "catigories/comedys/film2.html";
		} else if(search_input_case == "300 спартанцев") {
			window.location = "catigories/historical/film1.html";
		} else if(search_input_case == "лекарь" || search_input_case == "лекарь ученик авецинны") {
			window.location = "catigories/historical/film2.html";
		} else if(search_input_case == "битва самураев") {
			window.location = "catigories/historical/film3.html";
		} else if(search_input_case == "пункт назначения") {
			window.location = "catigories/horrors/film2.html";
		} else if(search_input_case == "родина") {
			window.location = "catigories/moderns/film1.html";
		} else if(search_input_case == "домовой") {
			window.location = "catigories/moderns/film2.html";
		} else if(search_input_case == "один день лета") {
			window.location = "catigories/moderns/film3.html";
		} else if(search_input_case == "команда а") {
			window.location = "Films-Pages/film8.html";
		} else if(search_input_case == "каникулы строгого режима") {
			window.location = "Films-Pages/film10.html";
		} else if(search_input_case == "материнский инстинкт") {
			window.location = "catigories/drams/film2.html";
		} else if(search_input_case == "испытание") {
			window.location = "catigories/drams/film3.html";
		} else if(search_input_case == "9 рота") {
			window.location = "Films-Pages/film11.html";
		} else if(search_input_case == "если враг не сдается") {
			window.location = "Films-Pages/film13.html";
		} else if(search_input_case == "пипец") {
			window.location = "catigories/comedys/film5.html";
		} else if(search_input_case == "тупой и умный") {
			window.location = "Films-Pages/film9.html";
		} else if(search_input_case == "брестская крепость") {
			window.location = "Films-Pages/film16.html";
		} else if(search_input_case == "центурион") {
			window.location = "catigories/historical/film4.html";
		} else if(search_input_case == "находка") {
			window.location = "Films-Pages/film14.html";
		} else if(search_input_case == "во имя короля") {
			window.location = "Films-Pages/film4.html";
		} else if(search_input_case == "глаз") {
			window.location = "Films-Pages/film6.html";
	    } else if(search_input_case == "небоскреб") {
	    	window.location = "Films-Pages/film12.html"
	    } else {
			alert("Введенный вами фильм не найден");
		}
	}

	// BUTTONS search

	// Find btn search_catigories
	let search_catigories = document.getElementById("search_catigories");
	search_catigories.addEventListener("click", start_search_catigories);

	// Find btn search
	let nav_search = document.getElementById("search");
	nav_search.addEventListener("click", show_search);

	// Find input search
	let input_search = document.getElementById("search_input");

	// Find and hide btn start_search
	$(".nav").append('<div id="start-search"><a href="#">Начать поиск</a></div>');
	let nav_start_search = document.getElementById("start-search");
	$(nav_start_search).css({ "display":"none" }); // hide start_search
	nav_start_search.addEventListener("click", start_search);
});