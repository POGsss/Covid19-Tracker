/*--------------- ONLOAD ---------------*/		

window.addEventListener("load", function(){
 setTimeout(loading, 1500);
	setTimeout(loaded, 2000);
	
	update();
	
	if (screen.width <= 320) {
		var mvp = document.getElementById("vp");
		mvp.setAttribute("content","user-scalable=no, width=320");
	} else {
		mvp.setAttribute("content","width=device-width, user-scalable=no, initial-scale=1.0")
	}
});

function loading(){
	var preload = document.getElementById("preloader");
	preload.style.opacity = "0";
	preload.style.visibility = "hidden";
}

function loaded(){
	var load = document.getElementById("loader");
	load.style.opacity = "0";
	load.style.visibility = "hidden";
}

/*--------------- ONLOAD ---------------*/		
/*--------------- NAV ---------------*/		

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

hamburger.addEventListener("click", function(){
	menu.classList.toggle("active");
})

function frst(evt){
	menu.classList.toggle("active");
 document.querySelector(".update").classList.remove("active");
 document.querySelector(".prevent").classList.remove("active");
 document.querySelector(".about").classList.remove("active");
 document.querySelector(".symptoms").classList.remove("active");
 evt.currentTarget.className += " active";
}

function scnd(evt){
	menu.classList.toggle("active");
 document.querySelector(".home").classList.remove("active");
 document.querySelector(".prevent").classList.remove("active");
 document.querySelector(".about").classList.remove("active");
 document.querySelector(".symptoms").classList.remove("active");
 evt.currentTarget.className += " active";
}

function thrd(evt){
	menu.classList.toggle("active");
 document.querySelector(".update").classList.remove("active");
 document.querySelector(".home").classList.remove("active");
 document.querySelector(".about").classList.remove("active");
 document.querySelector(".symptoms").classList.remove("active");
 evt.currentTarget.className += " active";
}

function frth(evt){
	menu.classList.toggle("active");
 document.querySelector(".update").classList.remove("active");
 document.querySelector(".prevent").classList.remove("active");
 document.querySelector(".home").classList.remove("active");
 document.querySelector(".symptoms").classList.remove("active");
 evt.currentTarget.className += " active";
}

function ffth(evt){
	menu.classList.toggle("active");
 document.querySelector(".update").classList.remove("active");
 document.querySelector(".prevent").classList.remove("active");
 document.querySelector(".about").classList.remove("active");
 document.querySelector(".home").classList.remove("active");
 evt.currentTarget.className += " active";
}

var Info = document.querySelector("#modal1Container");
var Note = document.querySelector("#modal2Container");
var Shade = document.querySelector("#shade");

function info(){
	Info.classList.toggle("nf");
	Shade.classList.toggle("shaded");
}

function note(){
	Note.classList.toggle("nt");
	Shade.classList.toggle("shaded");
}

/*--------------- NAV ---------------*/		
/*--------------- SCROLL ---------------*/		

$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
				}, 1500, function(){
				window.location.hash = hash;
			});
		}
	});
});

/*--------------- SCROLL ---------------*/		
/*--------------- API ---------------*/		

function update(){
	fetch("https://corona.lmao.ninja/v2/countries/Philippines")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("totalP").innerHTML = data.cases.toLocaleString();
		document.getElementById("deathP").innerHTML = data.deaths.toLocaleString();
		document.getElementById("recoverP").innerHTML = data.recovered.toLocaleString();
	})

	fetch("https://corona.lmao.ninja/v2/all")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("totalW").innerHTML = data.cases.toLocaleString();
		document.getElementById("deathW").innerHTML = data.deaths.toLocaleString();
		document.getElementById("recoverW").innerHTML = data.recovered.toLocaleString();
	})
}

setInterval(update, 10000);

/*--------------- API ---------------*/	
