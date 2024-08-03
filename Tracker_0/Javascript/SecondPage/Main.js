/*--------------- ONLOAD ---------------*/		

window.addEventListener("load", function(){
	setTimeout(loading, 1500);
	setTimeout(loaded, 2000);
	
	list();
	
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
	document.querySelector("#tab1").style.display = "block";
	document.querySelector("#tab2").style.display = "none";
	document.querySelector("#tab3").style.display = "none";
	document.querySelector(".cou").classList.remove("active");
	document.querySelector(".cnt").classList.remove("active");
 evt.currentTarget.className += " active";
}

function scnd(evt){
	menu.classList.toggle("active");
	document.querySelector("#tab1").style.display = "none";
	document.querySelector("#tab2").style.display = "block";
	document.querySelector("#tab3").style.display = "none";
	document.querySelector(".sts").classList.remove("active");
	document.querySelector(".cnt").classList.remove("active");
 evt.currentTarget.className += " active";
}

function thrd(evt){
	menu.classList.toggle("active");
	document.querySelector("#tab1").style.display = "none";
	document.querySelector("#tab2").style.display = "none";
	document.querySelector("#tab3").style.display = "block";
	document.querySelector(".sts").classList.remove("active");
	document.querySelector(".cou").classList.remove("active");
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
/*--------------- SVG ---------------*/		

function eur(evt){
	document.querySelector(".asia").classList.remove("active");
	document.querySelector(".australia").classList.remove("active");
	document.querySelector(".africa").classList.remove("active");
	document.querySelector(".north").classList.remove("active");
	document.querySelector(".south").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/continents/Europe")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.continent.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

function asi(evt){
	document.querySelector(".europe").classList.remove("active");
	document.querySelector(".australia").classList.remove("active");
	document.querySelector(".africa").classList.remove("active");
	document.querySelector(".north").classList.remove("active");
	document.querySelector(".south").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/continents/Asia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.continent.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

function aus(evt){
	document.querySelector(".asia").classList.remove("active");
	document.querySelector(".europe").classList.remove("active");
	document.querySelector(".africa").classList.remove("active");
	document.querySelector(".north").classList.remove("active");
	document.querySelector(".south").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/countries/Australia")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.country.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

function afr(evt){
	document.querySelector(".asia").classList.remove("active");
	document.querySelector(".australia").classList.remove("active");
	document.querySelector(".europe").classList.remove("active");
	document.querySelector(".north").classList.remove("active");
	document.querySelector(".south").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/continents/Africa")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.continent.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

function nor(evt){
	document.querySelector(".asia").classList.remove("active");
	document.querySelector(".australia").classList.remove("active");
	document.querySelector(".africa").classList.remove("active");
	document.querySelector(".europe").classList.remove("active");
	document.querySelector(".south").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/continents/North America")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.continent.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

function sou(evt){
	document.querySelector(".asia").classList.remove("active");
	document.querySelector(".australia").classList.remove("active");
	document.querySelector(".africa").classList.remove("active");
	document.querySelector(".north").classList.remove("active");
	document.querySelector(".europe").classList.remove("active");
 evt.currentTarget.classList.add("active");
 
 fetch("https://corona.lmao.ninja/v2/continents/South America")
	.then(function (response){
		return response.json();
	})
	.then(function (data){
		document.getElementById("one").innerHTML = data.continent.toLocaleString();
		document.getElementById("two").innerHTML = data.population.toLocaleString();
		document.getElementById("three").innerHTML = data.cases.toLocaleString();
		document.getElementById("four").innerHTML = data.recovered.toLocaleString();
		document.getElementById("five").innerHTML = data.deaths.toLocaleString();
		document.getElementById("six").innerHTML = data.active.toLocaleString();
	})
}

/*--------------- SVG ---------------*/		