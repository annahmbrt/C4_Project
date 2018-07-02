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
<<<<<<< HEAD
/*
$( window ).resize(function() {
  if($(window).width() <=870) $('.navbar').addClass("sticky");
  else $('.navbar').removeClass("sticky");
});
*/
=======
>>>>>>> 80fe40b5f8a0d5feca959068f144656f1e99ea00
