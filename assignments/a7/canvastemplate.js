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

var grey = 0;
var greySp = 2;
var x = [];
var y = [];
var radius = [];
var currentRing = 0;
var lng = 15;
var a = [];
var r = [];
var g = [];
var b = [];
var c = [];

function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;


}

function draw() {
	clear();

	for (var i = 0; i < lng; i++) {
		ctx.beginPath();
		radius[i] += 1;
		a [i] -= 0.01;
		ctx.arc(x[i],y[i],radius[i],0,Math.PI*2);
		r[i] = Math.floor(Math.random()*255);
		g[i] = Math.floor(Math.random()*255);
		b[i] = Math.floor(Math.random()*255);

		if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9 || i == 11 || i == 13) {
			c[i] = "rgba("+r[i]+","+g[i]+","+b[i]+","+a[i]+")";
			ctx.fillStyle = c[i];
			ctx.fill();
		}else{
			c[i] = "rgba("+r[i]+","+g[i]+","+b[i]+","+a[i]+")";
			ctx.strokeStyle = c[i];
			ctx.stroke();
		}
	}
}

function clear() {
			ctx.fillStyle = "rgb(" + grey + "," + grey + "," + grey + ")";
			ctx.fillRect(0,0,cv.width,cv.height);
	    grey += greySp;
	    if (grey > 255 || grey < 0) {
	      greySp = greySp * -1;
	    }
}


/*Event Functions*/
function mouseDown() {
	x [currentRing] = mouseX;
	y [currentRing] = mouseY;

	radius[currentRing] = 10;
	a[currentRing] = 1;

	if (currentRing == lng) {
		currentRing = 0;

	}else{
		currentRing++;
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
