/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/


var mouseX, mouseY;
var mPressed;
var keyPressed;
var pressedKey;
var keysDown = {};

var bgm1 = document.getElementById("fighting");
var win = document.getElementById("win");
var lose = document.getElementById("lose");

// images
var bg = new Image();
var narutoImg = new Image();
var zetsuImg = new Image();
var painImg = new Image();
var konanImg = new Image();
var nagatoImg = new Image();
var tobiImg = new Image();
var madaraImg = new Image();
var kaguya1Img = new Image();
var kaguya2Img = new Image();

// Sprite position
var zetsuX = [];
var zetsuY = [];
var painX = [];
var painY = [];
var konanX = [];
var konanY = [];
var nagatoX = [];
var nagatoY = [];
var tobiX, tobiY;
var madaraX, madaraY;
var kaguya1X, kaguya1Y;
var kaguya2X = [];
var kaguya2Y = [];

// other variables
var x,y,sz,sp;
var konanSpX = [];
var konanSpY = [];
var nagatoSpX = [];
var nagatoSpY = [];
var kaguya2SpX = [];
var kaguya2SpY= [];
var level = 1;
var capture = 0;
var timer1 = 300;
var timer2 = 350;
var timer3 = 400;
var timer4 = 450;
var timer5 = 500;
var timer6 = 550;
var timer7 = 600;
var timer8 = 650;
var tobiTimer = 40;
var madaraTimer = 35;
var kaguya1Timer = 30;
var kaguya2Timer = 25;
var	gameOver = false;



//SETUP FUNCTION : EXECUTED ONLY ONCE
function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
	x = cv.width/2-cv.width/24;
	y = cv.height/2-cv.width/24;
	sz = cv.width/12;
	sp = cv.width/100;
//randomly spawn sprite position setup
		for(var i = 0; i<10; i++){
			zetsuX[i] = Math.random()*(cv.width*0.8)+15;
			zetsuY[i] = Math.random()*(cv.height*0.8)+15;
		}


		for(var i = 0; i<15; i++){
			painX[i] = Math.random()*(cv.width*0.8)+15;
			painY[i] = Math.random()*(cv.height*0.8)+15;
		}

		for(var i = 0; i<10; i++){
			konanX[i] = Math.random()*(cv.width*0.8)+15;
			konanY[i] = Math.random()*(cv.height*0.8)+15;
			konanSpX[i] = Math.random() * 20 - 10;
			konanSpY[i] = Math.random() * 20 - 10;
		}

		for(var i = 0; i<15; i++){
			nagatoX[i] = Math.random()*(cv.width*0.8)+15;
			nagatoY[i] = Math.random()*(cv.height*0.8)+15;
			nagatoSpX[i] = Math.random() * 20 - 10;
			nagatoSpY[i] = Math.random() * 20 - 10;
		}

			tobiX = Math.random()*(cv.width*0.8)+15;
			tobiY = Math.random()*(cv.height*0.8)+15;

			madaraX = Math.random()*(cv.width*0.8)+15;
			madaraY = Math.random()*(cv.height*0.8)+15;

			kaguya1X = Math.random()*(cv.width*0.8)+15;
			kaguya1Y = Math.random()*(cv.height*0.8)+15;

			for(var i = 0; i<5; i++){
				kaguya2X[i] = Math.random()*(cv.width*0.8)+15;
				kaguya2Y[i] = Math.random()*(cv.height*0.8)+15;
				kaguya2SpX[i] = Math.random() * 20 - 10;
				kaguya2SpY[i] = Math.random() * 20 - 10;
			}
}

function draw() {
		//gameOver = false;
		background();
		 bgm1.play();
		//musicControl();
		gameControl();
		checkBoundary();

		  // if (capture <= 80) {
		  // 	musicControl();
		  // }

		if (level == 1){
			display1();
			level1();
		}

		if (level == 2) {
			display2();
			level2();
		}

		if (level == 3) {
			display3();
			level3();
		}

		if (level == 4) {
			display4();
			level4();
		}

		if (level == 5) {
				display5();
				level5();
		}

		if (level == 6) {
				display6();
				level6();
		}

		if (level == 7) {
				display7();
				level7();
		}

		if (level == 8) {
			if(!gameOver8){
				display8();
				level8();
			}else{
				gameEnds();
			 }
			}
	}
 // var musicOn = true;
 // function musicControl() {
 // 	if (capture <= 80) {
	// 	musicOn = true;
	// 	bgm1.play();
	// }else{
	// 	musicOn = false;
	// 	win.play();
	// }
 // }

function gameControl() {
	if ("ArrowUp" in keysDown || "w" in keysDown) {
		y-=sp;
	}
	if ("ArrowLeft" in keysDown || "a" in keysDown) {
		x-=sp;
	}
	if ("ArrowDown" in keysDown || "s" in keysDown) {
		y+=sp;
	}
	if ("ArrowRight" in keysDown || "d" in keysDown) {
		x+=sp;
	}
}

//check if sprite is off screen
function checkBoundary() {
	if (x < 0){
			x = 0;
	}else if (x > cv.width-sz){
			x = cv.width - sz;
		}

	if (y < 0){
			y = 0;
	}else if(y > cv.height-sz){
			y = cv.height - sz;
		}

}

function display1() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer1/10 + "s",25,150);
}

function display2() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer2/10 + "s",25,150);
}

function display3() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer3/10 + "s",25,150);
}

function display4() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer4/10 + "s",25,150);
}

function display5() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer5/10 + "s",25,150);
}

function display6() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer6/10 + "s",25,150);
}

function display7() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : " + level,25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer7/10 + "s",25,150);
}

function display8() {
	ctx.font = "30px Arial";
	ctx.fillStyle = "rgb(255,255,255)";
	ctx.textAlign="left";
	ctx.fillText("Level : FINAL",25,50);
	ctx.fillText("Capture : " + capture,25,100);
	ctx.fillText("Time : " + timer8/10 + "s",25,150);
}

function level1() {
	if(timer1>0){
		gameOver = false;
		timer1 --;
		naruto(x,y);

		//Spawn randomly
		for(var i=0; i<10; i++){
			zetsu(zetsuX[i],zetsuY[i]);
		}

		//collision detection
		for(var i=0; i<10; i++){
			if(x+sz/2 > zetsuX[i] && x+sz/2 < zetsuX[i]+sz){
					if(y+sz/2 > zetsuY[i] && y+sz/2 < zetsuY[i]+sz){
						capture ++;
						zetsuX[i] = -500;
						zetsuY[i] = -500;
				}
			}
		}

		if (capture == 10){
			gameOver = false;
			level ++;
		}

	 }else{
			gameOver = true;
			ctx.font = "50px Arial";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.textAlign="center";
			ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
			ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
	 }
}

function level2() {
	if(timer2>0){
		gameOver = false;
		timer2 --;
		naruto(x,y);

		//Spawn randomly
		for(var i=0; i<15; i++){
			pain(painX[i],painY[i]);
		}

		//collision detection
		for(var i=0; i<15; i++){
			if(x+sz/2 > painX[i] && x+sz/2 < painX[i]+sz){
					if(y+sz/2 > painY[i] && y+sz/2 < painY[i]+sz){
						capture ++;
						painX[i] = -500;
						painY[i] = -500;
				}
			}
		}

		if (capture == 25){
			gameOver = false;
			level ++;
		}

	 }else{
			gameOver = true;
			ctx.font = "50px Arial";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.textAlign="center";
			ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
			ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
	 }
}

function level3() {
	if(timer3>0){
		gameOver = false;
		timer3 --;
		naruto(x,y);

		//Spawn randomly
		for(var i=0; i<10; i++){
			konan(konanX[i],konanY[i]);
			konanX[i] += konanSpX[i];
			konanY[i] += konanSpY[i];
			if (konanX[i] < 0 || konanX[i] > cv.width-sz){
				konanSpX[i] *= -1;
			}

			if (konanY[i] < 0 || konanY[i] > cv.height-sz){
				konanSpY[i] *= -1;
			}
		}

		//collision detection
		for(var i=0; i<10; i++){
			if(x+sz/2 > konanX[i] && x+sz/2 < konanX[i]+sz){
					if(y+sz/2 > konanY[i] && y+sz/2 < konanY[i]+sz){
						capture ++;
						konanX[i] = -500;
						konanY[i] = -500;
				}
			}
		}

		if (capture == 35){
			gameOver = false;
			level ++;
		}

	 }else{
			gameOver = true;
			ctx.font = "50px Arial";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.textAlign="center";
			ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
			ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
	 }
}

function level4() {
	if(timer4>0){
		gameOver = false;
		timer4 --;
		naruto(x,y);

		//Spawn randomly
		for(var i=0; i<15; i++){
			nagato(nagatoX[i],nagatoY[i]);
			nagatoX[i] += nagatoSpX[i];
			nagatoY[i] += nagatoSpY[i];
			if (nagatoX[i] < 0 || nagatoX[i] > cv.width-sz){
				nagatoSpX[i] *= -1;
			}

			if (nagatoY[i] < 0 || nagatoY[i] > cv.height-sz){
				nagatoSpY[i] *=  -1;
			}
		}

		//collision detection
		for(var i=0; i<15; i++){
			if(x+sz/2 > nagatoX[i] && x+sz/2 < nagatoX[i]+sz){
					if(y+sz/2 > nagatoY[i] && y+sz/2 < nagatoY[i]+sz){
						capture ++;
						nagatoX[i] = -500;
						nagatoY[i] = -500;
				}
			}
		}

		if (capture == 50){
			gameOver = false;
			level ++;
		}

	 }else{
			gameOver = true;
			ctx.font = "50px Arial";
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.textAlign="center";
			ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
			ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
	 }
}


function level5() {
	if(timer5>0){
		gameOver5 = false;
		timer5 --;
		tobiTimer --;
		naruto(x,y);

		//Spawn randomly
		tobi(tobiX,tobiY);

		 if (tobiTimer == 0) {
			 tobiX = -sz;
			 tobiY = -sz;
			 tobiX = Math.random()*(cv.width*0.8)+15;;
			 tobiY = Math.random()*(cv.height*0.8)+15;;
			 tobi(tobiX,tobiY);
			 tobiTimer = 40;
		 }

		//collision detection
			if(x+sz/2 > tobiX && x+sz/2 < tobiX+sz){
					if(y+sz/2 > tobiY && y+sz/2 < tobiY+sz){
						capture ++;
						tobiX = -500;
						tobiY = -500;
				}
			}

			if (capture == 55){
				gameOver = false;
				level ++;
			}


		 }else{
				gameOver = true;
				ctx.font = "50px Arial";
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.textAlign="center";
				ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
				ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
		 }


}

function level6() {
	if(timer6>0){
		gameOver5 = false;
		timer6 --;
		madaraTimer --;
		naruto(x,y);

		//Spawn randomly
		madara(madaraX,madaraY);

		 if (madaraTimer == 0) {
			 madaraX = -sz;
			 madaraY = -sz;
			 madaraX = Math.random()*(cv.width*0.8)+15;
			 madaraY = Math.random()*(cv.height*0.8)+15;
			 madara(madaraX,madaraY);
			 madaraTimer = 35;
		 }

		//collision detection
			if(x+sz/2 > madaraX && x+sz/2 < madaraX+sz){
					if(y+sz/2 > madaraY && y+sz/2 < madaraY+sz){
						capture ++;
						madaraX = -500;
						madaraY = -500;
				}
			}

			if (capture == 60){
				gameOver = false;
				level ++;
			}


		 }else{
				gameOver = true;
				ctx.font = "50px Arial";
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.textAlign="center";
				ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
				ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
		 }

}

function level7() {
	if(timer7>0){
		gameOver5 = false;
		timer7 --;
		kaguya1Timer --;
		naruto(x,y);

		//Spawn randomly
		kaguya1(kaguya1X,kaguya1Y);


		 if (kaguya1Timer == 0) {
			 kaguya1X = -sz;
			 kaguya1Y = -sz;
			 kaguya1X = Math.random()*(cv.width*0.8)+15;
			 kaguya1Y = Math.random()*(cv.height*0.8)+15;
			 kaguya1(kaguya1X,kaguya1Y);
			 kaguya1Timer = 30;
		 }

		//collision detection
			if(x+sz/2 > kaguya1X && x+sz/2 < kaguya1X+sz){
					if(y+sz/2 > kaguya1Y && y+sz/2 < kaguya1Y+sz){
						capture ++;
						kaguya1X = -500;
						kaguya1Y = -500;
				}
			}

			if (capture == 65){
				gameOver = false;
				level ++;
			}


		 }else{
				gameOver = true;
				ctx.font = "50px Arial";
				ctx.fillStyle = "rgb(255,255,255)";
				ctx.textAlign="center";
				ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
				ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
		 }


}
var gameOver8 = false;
var end = false;
function level8() {
	if(timer8>0){
		gameOver8 = false;
		timer8 --;
		kaguya2Timer --;
		naruto(x,y);

		//Spawn randomly
		for(var i=0; i<5; i++){
			kaguya2(kaguya2X[i],kaguya2Y[i]);
			kaguya2X[i] += kaguya2SpX[i];
			kaguya2Y[i] += kaguya2SpY[i];
			if (kaguya2X[i] < 0 || kaguya2X[i] > cv.width-sz){
				kaguya2SpX[i] *= -1;
			}

			if (kaguya2Y[i] < 0 || kaguya2Y[i] > cv.height-sz){
				kaguya2SpY[i] *= -1;
			}
		}


		 if (kaguya2Timer == 0) {
			 for(var i=0; i<5; i++){
				 kaguya2X[i] = -sz;
				 kaguya2Y[i] = -sz;
				 kaguya2X[i] = Math.random()*(cv.width*0.8)+15;
				 kaguya2Y[i] = Math.random()*(cv.height*0.8)+15;
				 kaguya2(kaguya2X[i],kaguya2Y[i]);
				 kaguya2SpX[i] = Math.random() * 20 - 10;
				 kaguya2SpY[i] = Math.random() * 20 - 10;
				 kaguya2X[i] += kaguya2SpX[i];
				 kaguya2Y[i] += kaguya2SpY[i];
				 if (kaguya2X[i] < 0 || kaguya2X[i] > cv.width-sz){
					 kaguya2SpX[i] *= -1;
				 }

				 if (kaguya2Y[i] < 0 || kaguya2Y[i] > cv.height-sz){
					 kaguya2SpY[i] *= -1;
				 }
				 kaguya2Timer = 25;
			 }
		 }

		//collision detection
		 for(var i=0; i<5; i++){
			if(x+sz/2 > kaguya2X[i] && x+sz/2 < kaguya2X[i]+sz){
					if(y+sz/2 > kaguya2Y[i] && y+sz/2 < kaguya2Y[i]+sz){
						capture ++;
						kaguya2X[i] = -500;
						kaguya2Y[i] = -500;
					}
				}
			}

			if (capture == 80){
				gameOver8 = true;
				end = true;

			}
	 }else{
		 gameOver8 = true;
		 end = false;
	 }

}


function gameEnds(){
	if(end){
		ctx.font = "50px Arial";
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.textAlign="center";
		ctx.fillText("YOU WIN!",cv.width/2,cv.height/2-50);
		ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);

	}else{
		ctx.font = "50px Arial";
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.textAlign="center";
		ctx.fillText("GAME OVER!",cv.width/2,cv.height/2-50);
		ctx.fillText("Refersh to Restart",cv.width/2,cv.height/2+25);
	}
}

function background(){
	ctx.drawImage(bg,0,0,cv.width,cv.height);
	bg.src = "imgs/bg.jpg";
}

function naruto(narutoX, narutoY){
	ctx.drawImage(narutoImg,narutoX,narutoY,sz,sz);
	narutoImg.src = "imgs/naruto.png";
}

function zetsu(zetsuX,zetsuY){
	ctx.drawImage(zetsuImg,zetsuX,zetsuY,sz,sz);
	zetsuImg.src = "imgs/zetsu.png";
}

function pain(painX, painY){
	ctx.drawImage(painImg,painX,painY,sz,sz);
	painImg.src = "imgs/pain.png";
}

function konan(konanX, konanY){
	ctx.drawImage(konanImg,konanX,konanY,sz,sz);
	konanImg.src = "imgs/konan.png";
}

function nagato(nagatoX, nagatoY){
	ctx.drawImage(nagatoImg,nagatoX,nagatoY,sz,sz);
	nagatoImg.src = "imgs/nagato.png";
}

function tobi(tobiX, tobiY){
	ctx.drawImage(tobiImg,tobiX,tobiY,sz,sz);
	tobiImg.src = "imgs/tobi.png";
}

function madara(madaraX, madaraY){
	ctx.drawImage(madaraImg,madaraX,madaraY,sz,sz);
	madaraImg.src = "imgs/madara.png";
}

function kaguya1(kaguya1X, kaguya1Y){
	ctx.drawImage(kaguya1Img, kaguya1X,kaguya1Y,sz,sz);
	kaguya1Img.src = "imgs/kaguya1.png";
}

function kaguya2(kaguya2X, kaguya2Y){
	ctx.drawImage(kaguya2Img, kaguya2X,kaguya2Y,sz,sz);
	kaguya2Img.src = "imgs/kaguya2.png";
}

/*Event Function Added from here */
function mouseDown() {
	mPressed = true;
}
function mouseUp() {
	mPressed = false;
}

function mouseMove(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
}

setup();
setInterval(draw, 30);

window.addEventListener("resize", setup);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mouseleave', mouseUp);
addEventListener("keydown", function (e) {
	keysDown[e.key] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.key];
}, false);
