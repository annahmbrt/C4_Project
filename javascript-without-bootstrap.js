var audio = document.getElementById("hintergrundmusik");
audio.volume = 0.0;

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
/*
$( window ).resize(function() {
  if($(window).width() <=870) $('.navbar').addClass("sticky");
  else $('.navbar').removeClass("sticky");
});
*/
