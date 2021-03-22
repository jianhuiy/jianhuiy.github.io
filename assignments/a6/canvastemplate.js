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
var sz = 50;
var clicks = 0;

function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

function draw() {
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillRect(0,0,cv.width,cv.height);
	ctx.lineWidth = 2;
	ctx.strokeStyle = "rgb(51,204,255)";

	if (clicks == 0) {
		for (var i = 100; i < cv.width-100; i+= sz) {
			for (var j = 100; j < cv.height-100; j+= sz) {
				ctx.beginPath();
				ctx.arc(i,j,sz-15,1.5,2*Math.PI,true);
				ctx.arc(i,j,sz-25,1.5,2*Math.PI,true);
				ctx.closePath();
				ctx.stroke();


			}
		}
	}

	else if (clicks == 1) {
		for (var i = 100; i < cv.width-100; i+= sz) {
			for (var j = 100; j < cv.height-100; j+= sz) {
				ctx.beginPath();
				ctx.arc(i-25,j+50,sz,0,1.7*Math.PI,true);
				ctx.arc(i-25,j,sz,0,0.3*Math.PI);
				ctx.stroke();
				ctx.closePath();

			}
		}
	}

	else if (clicks == 2) {
		for (var i = 100; i < cv.width-100; i+= sz) {
			for (var j = 100; j < cv.height-100; j+= sz) {
				ctx.beginPath();
				ctx.arc(i,j+25,sz-5,1,2*Math.PI,true);
				//ctx.arc(i,j,sz-15,0.7,1*Math.PI,true);
				ctx.arc(i,j+25,sz-25,0.5,1.5*Math.PI);
				ctx.closePath();
				ctx.stroke();

			}
		}
	}
		else {
			for (var i = 100; i < cv.width-100; i+= sz) {
				for (var j = 100; j < cv.height-100; j+= sz) {
				ctx.beginPath();
				ctx.moveTo(i-sz/3, j-sz/3+25);
				ctx.lineTo(i-sz/3, j+sz/3+25);

				ctx.moveTo(i-sz/3+20, j-sz/3+25);
				ctx.lineTo(i-sz/3+20, j+sz/3+25);

				ctx.moveTo(i-sz/3, j-sz/3+25);
				ctx.lineTo(i-sz/3+20, j+sz/3+25);

				ctx.moveTo(i-sz/3-10, j-sz/3+40);
				ctx.lineTo(i-sz/3+30, j-sz/3+40);

				ctx.closePath();
				ctx.stroke();
			}
		}
	}
}



/*Event Functions*/
function mouseDown() {
	clicks++;
	if (clicks > 3 ){
		clicks=0;
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
