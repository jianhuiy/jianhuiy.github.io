///////////////////////////////////////////
/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/
///////////////////////////////////////////
//SETUP FUNCTION : EXECUTED ONLY ONCE
var beep = document.getElementById("beep");
var win = document.getElementById("win");
var lose = document.getElementById("lose");

var mouseX, mouseY;
var keyPressed;
var pressedKey;
var score = 0;
var timer = 300;
var number;
var distance1;
var distance2;
var rad1 = 75;
var rad2 = 75;
var yes = new Image();
var no = new Image();
var doge = new Image();
var bg = new Image();
var x,y;

var isPlaying = true;
var keysDown = {};

function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	number = Math.floor((Math.random() * 20) + 1);
	x=0;
	y= cv.height*0.75;
}

function draw() {

	if(timer>0){
			isPlaying = true;
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.fillRect(0,0,cv.width,cv.height);

			ctx.beginPath();
			ctx.arc(cv.width/3+100,cv.height/2,rad1,0,Math.PI*2);
			ctx.fillStyle = "rgba(255,255,255,0)";
			ctx.fill();
			ctx.closePath();

			ctx.beginPath();
			ctx.arc(cv.width/3*2-100,cv.height/2,rad2,0,Math.PI*2);
			ctx.fillStyle = "rgba(255,255,255,0)";
			ctx.fill();
			ctx.closePath();

			//images
			bg.src = "images/bg.png";
			ctx.drawImage(bg,0,0,cv.width,cv.height);

			yes.src = "images/yes.png";
			ctx.drawImage(yes,cv.width/3+25,cv.height/2-75,150,150);

			no.src = "images/no.png";
			ctx.drawImage(no,cv.width/3*2-175,cv.height/2-75,150,150);

			doge.src = "images/doge.png";
			ctx.drawImage(doge,x,y,150,100);

			//text
			ctx.font = "50px Comic Sans MS";
			ctx.fillStyle = "rgb(255,200,255)";
			ctx.textAlign="center";
			ctx.fillText("Identify Prime Numbers",cv.width/2,60);

			ctx.font = "150px Comic Sans MS";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.textAlign="center";
			ctx.fillText(number,cv.width/2,cv.height/3-20);

			ctx.font = "30px Arial";
			ctx.fillStyle = "rgb(0,0,0)";
			ctx.textAlign="left";
			ctx.fillText("Score : " + score,25,50);
			ctx.fillText("Timer : " + timer/10 + "s",25,100);

			ctx.font = "20px Arial";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.fillText("Prime Number : ",25,140);
			ctx.fillText("A natural number greater than 1",25,170);
			ctx.fillText("that can only be divided evenly by 1, or itself.",25,200);



			if (score>10) {
				isPlaying = false;
				ctx.font = "30px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillRect(0,0,cv.width,cv.height);
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.textAlign="center";
				ctx.fillText("YOU WIN!",cv.width/2,cv.height/2-50);
				ctx.fillText("Press [Enter] to Restart",cv.width/2,cv.height/2);

				if ("Enter" in keysDown) {
					setup();
					timer = 300;
					score = 0;
				}
			}

	}else{
				if (score < 10) {
					if(timer == 0) {
						lose.play();
				}
				isPlaying = false;
				ctx.font = "30px Arial";
				ctx.fillStyle = "rgb(0,0,0)";
				ctx.fillRect(0,0,cv.width,cv.height);
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.textAlign="center";
				ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
				ctx.fillText("YOUR SCORE : " + score,cv.width/2,cv.height/2);
				ctx.fillText("Press [Enter] to Restart",cv.width/2,cv.height/2+50);

				if ("Enter" in keysDown) {
					setup();
					timer = 300;
					score = 0;
				}
			}
		}
		timer--;
}



function dist(x1,y1,x2,y2){
	var a = x1 - x2;
	var b = y1 - y2;
	var d = Math.sqrt(a*a + b*b);

	return d;
}

/*Event Functions*/
function mouseDown() {
	if(isPlaying){
		distance1 = dist(cv.width/3+100,cv.height/2,mouseX,mouseY);
		if(distance1 < rad1){
			if (number == 2 || number == 3 || number == 5 || number == 7 || number == 11 || number == 13 || number == 17 || number == 19) {
				score++;
				x=x+cv.width/10;
				beep.play();
			}else{
				score--;
				x=x-cv.width/10;
				beep.play();
			}
			number = Math.floor((Math.random() * 20) + 1);
		}

		distance2 = dist(cv.width/3*2-100,cv.height/2,mouseX,mouseY);
		if(distance2 < rad2){
			if (number == 2 || number == 3 || number == 5 || number == 7 || number == 11 || number == 13 || number == 17 || number == 19) {
				score--;
				x=x-cv.width/10;
				beep.play();
			}else{
				score++;
				x=x+cv.width/10;
				beep.play();
			}
			number = Math.floor((Math.random() * 20) + 1);
		}

		if(score >10){
			win.play();
		}
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
setInterval(draw, 100);
addEventListener("keydown", function (e) {
	keysDown[e.key] = true;
	console.log(keysDown);
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.key];
}, false);



//2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
