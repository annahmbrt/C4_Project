/*var v = document.getElementById('music');

function muteMusic() {
    v.volume = 0.0;
}*/



function VolumeDown() {
  var v = document.getElementById('music');
  if ($(window).width() < 870) {
    v.volume = 0.0;
  }
  else {
    v.volume = 0.1;
    v.play();
  }

}

function playPause() {
  var v = document.getElementById('music');
  var p = document.getElementById("audio-pause-or-play");
  if (!music.paused) {
    v.pause();
    p.src = "img/play.png"
  }
  else {
    v.play();
    p.src = "img/pause.png"
  }
}

function volumeUp() {
  document.getElementById("music").volume += 0.1;
}

function volumeDown() {
  document.getElementById("music").volume -= 0.1;
}

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
