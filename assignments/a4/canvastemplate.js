///////////////////////////////////////////
/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/
///////////////////////////////////////////
//SETUP FUNCTION : EXECUTED ONLY ONCE

var mouseX, mouseY;
var keyPressed;
var pressedKey;
var x,y;
var rad = 200;
var xsp,ysp;
var clicks = 0;
var c;
var r,g,b;

function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	x = cv.width/3;
 	y = cv.height/3;
	xsp = Math.random()*10+5;
	ysp = Math.random()*10+5;
  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);
}

function draw() {
	reset();
	ctx.beginPath();
	ctx.arc(x,y,rad,0,Math.PI*2);
	ctx.closePath();
	c = "rgb(" + r + "," + g + "," + b + ")";
	ctx.fillStyle = c;
	ctx.fill();
	ctx.stroke();



	if (x > cv.width-rad || x < 0+rad) {
		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		xsp = xsp*-1; //xsp *= -1;
	}

	if (y > cv.height-rad || y < 0+rad) {
		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		ysp = ysp*-1; //x += xsp;
	}

		x = x+xsp;
		y = y+ysp;

		ctx.fillStyle = "rgba(0,0,0,0.3)";
		ctx.textAlign="center";
		ctx.font = "40px Arial";
		ctx.fillText("Win this in less than 20 improper clicks!", cv.width/2, 60);

		if (clicks <= 19 && rad == 0) {
		 reset();
		 clicks = 0;
		 ctx.fillStyle = "rgb(0,0,0)";
		 ctx.textAlign="center";
		 ctx.font = "100px Arial";
		 ctx.fillText("You Win!", cv.width/2, cv.height/2);
		 }

	 	if (clicks > 19 && rad != 0) {
		//rad = cv.width;
		reset();
		ctx.fillStyle = "rgb(0,0,0)";
 		ctx.textAlign="center";
 		ctx.font = "100px Arial";
 		ctx.fillText("You Lose!", cv.width/2, cv.height/2);

	 }

}

function dist(x1,y1,x2,y2){
	var a = x1 - x2;
	var b = y1 - y2;
	var d = Math.sqrt(a*a + b*b);
	return d;
}

function reset() {
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.fillRect(0,0,cv.width,cv.height);
}

/*Event Functions*/
function mouseDown() {
	distance = dist(x,y,mouseX,mouseY);

	if(distance < rad){
		r = Math.floor(Math.random()*255);
		g = Math.floor(Math.random()*255);
		b = Math.floor(Math.random()*255);
		rad = rad - 10;
	}

	if (distance > rad) {
		clicks = clicks + 1;
	}
}

function mouseUp() {
}

function mouseMove(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
}

window.addEventListener("resize", setup);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseUp);
//canvas.addEventListener('mouseleave', mouseUp);
setup();
setInterval(draw, 30);
