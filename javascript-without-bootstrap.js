/* Funktion Getränke anzeigen */
function showDrinks(getraenke_auswahl) {
	var x = document.getElementById(getraenke_auswahl);
	if (x.style.display==="block") {
		x.style.display = "none";
	}
	else {
		x.style.display = "block";
	}
}

function play_pause_audio() {
	var v = document.getElementById("hintergrundmusik");
	if (v.volume!="0.0") {
	v.pause();
}
	else {
		v.play();
	}

}
