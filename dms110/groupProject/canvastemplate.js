/*
Instructions:
		1. Create an array for x-coordinate, y-coordinate, x-speed, y-speed for each point.
		2. In Setup, make for loop to assign random value to each value for each array.
		3. In Draw, create conditionals inside of a for-loop to check if the balls hit the edge of the scrren,
			 and update the velocity accordingly.
		4. Connect the balls with lines.
*/


var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");

var mouseX, mouseY;
var keyPressed;
var pressedKey;

var posX = [];
var posY = [];
var radius = [];
var spX = [];
var spY =[];
var lng = 50;


function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	for (var i = 0; i < lng; i ++){
		posX[i] = cv.width/2;
		posY[i] = cv.height/2;
		radius[i] = Math.random() * 35 + 5 ;
		spX[i] = Math.random() * 20 - 10;
		spY[i] = Math.random() * 20 - 10;
	}
}

function draw() {
	clear();
	for (var i = 0; i<lng; i++){
		ctx.beginPath();
		ctx.arc (posX[i],posY[i],radius[i],0,Math.PI*2);
		ctx.fillStyle = "black";
		ctx.fill();

		posX[i] += spX[i];
		posY[i] += spY[i];

		if (posX[i] < 0 + radius[i] || posX[i] > cv.width-radius[i]){
			spX[i] = spX[i] * -1;
		}

		if (posY[i] < 0 + radius[i] || posY[i] > cv.height - radius[i]){
			spY[i] = spY[i] *-1;
		}
	}

	for(var i = 0; i<lng; i++ ){
		for (var j = i+1; j< lng; j++){
			ctx.beginPath();
			ctx.moveTo(posX[i],posY[i]);
			ctx.lineTo(posX[i+j],posY[i+j]);
			ctx.stroke();
			ctx.lineWidth = .5;
		}
	}

}

function clear(){
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,cv.width,cv.height);
}
/*Event Functions*/
function mouseDown() {
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
