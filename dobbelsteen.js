/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// variabelen
var spelers = [];
var beurt;
var superBeurt;
var coolBeurt;
var ogen;
var ogen2;
var mm = 0;
var v = 0;


//functie die input form leest en opslaat in variabelen
function tellen() {
	var y = document.getElementById("nummer").value;
	var i;
	for (i = 0; i < y; i++) {
		spelers.push(i);
		console.log(spelers);
		beurt = (spelers[i] + 1);
		superBeurt = beurt;
		coolBeurt = (superBeurt * 3);
	}
}

//code die de input koppelt aan de knop
var aantal = document.getElementById("send");
aantal.addEventListener("click", tellen);


var worp = document.getElementById("gooi");


function spel() {
	//functie voor dobbelstenen met random getal generator. Bron: opdracht dobbelsteen, moodle
	ogen = Math.floor((Math.random() * 6) + 1);

	var imgArray = ["images/one.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png"];
	var dobbelsteenImg;
	dobbelsteenImg = imgArray[ogen - 1];
	document.querySelector("img").src = (dobbelsteenImg);

	ogen2 = Math.floor((Math.random() * 6) + 1);
	var dobbelsteenImgTwee = imgArray[ogen2 - 1];
	document.getElementById("2").src = (dobbelsteenImgTwee);
	console.log(ogen, ogen2);

	if (ogen > ogen2) {
		document.querySelector("p").textContent = (ogen + '' + ogen2);
	} else {
		document.querySelector("p").textContent = (ogen2 + '' + ogen);
	}


	//hier alle regels voor het spel

	//11
	if (ogen === 1 && ogen2 === 1) {
		document.querySelector("p").textContent = "100"
	}

	//21
	if ((ogen === 2 && ogen2 === 1) || (ogen === 1 && ogen2 === 2)) {
		document.querySelector("p").textContent = "MikMak!, volgende speler is aan de beurt"
		mm++;
		document.querySelector("h3").textContent = "MikMak's:" + mm;
	}


	//22
	if (ogen === 2 && ogen2 === 2) {
		document.querySelector("p").textContent = "200"
	}

	//31
	if ((ogen === 3 && ogen2 === 1) || (ogen === 1 && ogen2 === 3)) {
		if (v == 0) {
			document.querySelector("p").textContent = "31! de speler links van de speler die nu aan de beurt is moet 3 slokken drinken. Da's niet zo leuk van je Right Hand Man!"

			document.querySelector("h3").textContent = "MikMak's: 0";
			beurt = superBeurt;
			mm = 0;
		} else {
			document.querySelector("p").textContent = "31";
			worp.addEventListener("click");
		}
	}


	//32
	if ((ogen === 3 && ogen2 === 2) || (ogen === 2 && ogen2 === 3)) {
		document.querySelector("p").textContent = "Oh nee, je staat vast! je medespelers mogen ieder 3 keer gooien. Het spel geeft aan wat er gebeuren moet...";
		v++;
		coolBeurt = (superBeurt * 3);
		document.querySelector("h4").textContent = "er staat iemand vast!";
	}

	//33
	if (ogen === 3 && ogen2 === 3) {
		document.querySelector("p").textContent = "300"
	}

	//41
	if ((ogen === 1 && ogen2 === 4) || (ogen === 4 && ogen2 === 1) && (v = 0)) {
		worp.addEventListener("click");
	}

	//44
	if (ogen === 4 && ogen2 === 4) {
		if (v == 0) {
			document.querySelector("p").textContent = "400! Speler aan de beurt moet halve glas op drinken. Jammer man..."
		} else {
			document.querySelector("p").textContent = "400";
		}
	}

	//54
	if ((ogen === 5 && ogen2 === 4) || (ogen === 4 && ogen2 === 5)) {
		if (v == 0) {
			document.querySelector("p").textContent = "54! de speler rechts van de speler die nu aan de beurt is moet 3 slokken drinken. Volgende keer toch maar anders gaan zitten man!"
			document.querySelector("h3").textContent = "MikMak's: 0";
			beurt = superBeurt;
			mm = 0;
		} else {
			document.querySelector("p").textContent = "54";
		}
	}


	//55
	if (ogen === 5 && ogen2 === 5) {
		document.querySelector("p").textContent = "500"
	}
	//64
	if ((ogen === 6 && ogen2 === 4) || (ogen === 4 && ogen2 === 6)) {
		if (v == 0) {
			document.querySelector("p").textContent = "64! De laatse speler die 'Jack in the Box!' roept moet een half glas drinken! Jack in the Box!"
		} else {
			document.querySelector("p").textContent = "64";
		}
	}
	//66
	if (ogen === 6 && ogen2 === 6) {
		if (v == 0) {
			document.querySelector("p").textContent = "600! Speler aan de beurt mag andere speler uitkiezen om een half glas te drinken. Ai Ai Ai..."
		} else {
			document.querySelector("p").textContent = "600"
		}

	}
	console.log(coolBeurt);
	console.log(beurt);
}

//functie die tekst onderaan verandert zodra het spel begint
function start() {
	document.getElementById("start").textContent = "klik op dobbelstenen om te gooien";

}

//functie voor minigame 21 die aantal beurten telt
function twentyOne() {
	if ((mm > 0) && (v == 0)) {
		beurt--;
	}
	if (beurt === 0) {
		document.querySelector("h3").textContent = "MikMak's: 0";
		beurt = superBeurt;
		mm = 0;
	}
}

//functie voor minigame 32 die aantal beurten x3 telt
function thirtyTwo() {
	if (v > 0) {
		coolBeurt--;


	}
	if (coolBeurt === 0) {
		document.querySelector("h4").textContent = "er staat niemand vast";
		document.querySelector("h3").textContent = "MikMak's: 0";
		coolBeurt = (superBeurt * 3);
		v = 0;
	}

}

//functie die de gooi knop alle functies laat uitvoeren
worp.addEventListener("click", spel);
worp.addEventListener("click", twentyOne);
worp.addEventListener("click", thirtyTwo);
worp.addEventListener("click", start);
