var delay = 0;
var s;
var v;
let soundLoop;

function setup() {
  noCanvas();
  s = loadSound("anidiot.mp3",onSoundLoop)
  v = createVideo("youare.mp4")
  let intervalInSeconds = 5.25;
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  v.size(650,500);
  v.loop();
}

function draw() {
  delay += 1/60;
  s.setVolume(0.5)
  if (delay >= 4.75) {
    proCreate();
    delay = -10.75;
  }
}

function onSoundLoop() {
  s.play();
  soundLoop.start();
}

function bookmark() {
if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		var title = "Idiot!";
        var url = "https://editor.p5js.org/Snoworange69/sketches/IRWJWXtdh/lol.html";
		window.external.AddFavorite(url, title);
	}
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function proCreate() {	
	for (var i = 0; i < 5; i++) {
		openWindow('lol.html');
	}
}

function keyPressed() {
  if (keyCode == 8 || 16 || 17 || 27 || 18 || 91 || 87 || 81) {
    alert("you are an idiot!");
    proCreate();
    s.play();
    onSoundLoop();
  }
}

function mouseClicked() {
  if (mouseClicked) {
    proCreate();
    s.play();
    onSoundLoop();
  }
}

function changeTitle(title) {
  title = 'you are an idiot!'
  document.title = title;
} //["www.youareanidiot.org" Remake by Snow_orange__. 15/06/'22]