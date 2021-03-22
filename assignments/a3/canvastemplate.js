///////////////////////////////////////////
/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/
///////////////////////////////////////////

var x = 100;
var y = 500;
var rad = 60;
var xsp = 10;
var ysp = 5;
var c;
var r,g,b;

var x2 = 800;
var y2 = 200;
var rad2 = 80;
var xsp2 = 5;
var ysp2 = 10;
var c2;
var r2,g2,b2;

var x3 = 400;
var y3 = 600;
var rad3 = 35;
var xsp3 = 8;
var ysp3 = 8;
var c3;
var r3,g3,b3;

var grey = 0;
var greySp = 5;


//SETUP FUNCTION : EXECUTED ONLY ONCE
function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
  xsp = Math.random()*100+1;
  ysp = Math.random()*100+1;

  xsp2 = Math.random()*100+2;
  ysp2 = Math.random()*100+5;

	xsp3 = Math.random()*100+4;
	ysp3 = Math.random()*100+3;

  r = Math.floor(Math.random()*255);
  g = Math.floor(Math.random()*255);
  b = Math.floor(Math.random()*255);

  r2 = Math.floor(Math.random()*255);
  g2 = Math.floor(Math.random()*255);
  b2 = Math.floor(Math.random()*255);

	r3 = Math.floor(Math.random()*255);
	g3 = Math.floor(Math.random()*255);
	b3 = Math.floor(Math.random()*255);

}

//DRAW FUNCTION : EXECUTED REPEATEDLY - UNTIL YOU QUIT THE PROGRAM
function draw() {

 		clear();
		//Circle 1
 	  ctx.beginPath();
  	ctx.arc(x,y,rad,0,Math.PI*2);
    c = "rgba(" + r + "," + g + "," + b + ",.6)";
    ctx.fillStyle = c;
  	ctx.fill();
    ctx.stroke();
  	ctx.closePath();

		//Dot 1
		ctx.beginPath();
		ctx.arc(x,y,5,0,Math.PI*2);
		ctx.fillStyle = "rgb(255,0,0)";
		ctx.fill();
		ctx.closePath();

		//Rope 1
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(x,y);
		ctx.lineTo(cv.width, cv.height);
		ctx.stroke();


		//Circle 2
    ctx.beginPath();
    ctx.arc(x2,y2,rad2,0,Math.PI*2);
    c2 = "rgba(" + r2 + "," + g2 + "," + b2 + ",.6)";
    ctx.fillStyle = c2;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

		//Dot 2
		ctx.beginPath();
		ctx.arc(x2,y2,5,0,Math.PI*2);
		ctx.fillStyle = "rgb(0,255,0)";
		ctx.fill();
		ctx.closePath();

		//Rope 2
		ctx.beginPath();
		ctx.moveTo(cv.width,0);
		ctx.lineTo(x2,y2);
		ctx.lineTo(0, cv.height);
		ctx.stroke();

		//Circle3
		ctx.beginPath();
		ctx.arc(x3,y3,rad3,0,Math.PI*2);
		c3 = "rgba(" + r3 + "," + g3 + "," + b3 + ",.6)";
		ctx.fillStyle = c3;
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		//Dot3
		ctx.beginPath();
		ctx.arc(x3,y3,5,0,Math.PI*2);
		ctx.fillStyle = "rgb(0,0,255)";
		ctx.fill();
		ctx.closePath();


		//Rope 3
		ctx.beginPath();
		ctx.moveTo(0.5*cv.width,0);
		ctx.lineTo(x3,y3);
		ctx.lineTo(0.5*cv.width, cv.height);
		ctx.stroke();


		//Connect Circles
		ctx.beginPath();
		ctx.moveTo(x,y);
		ctx.lineTo(x2,y2);
		ctx.lineTo(x3,y3);
		ctx.lineTo(x,y);
		ctx.lineWidth = 5;
		ctx.fillStyle = "rgba(120,120,120,.4)";
		ctx.fill();
		ctx.closePath();

  	if (x > cv.width-rad || x < 0+rad) {
      r = Math.floor(Math.random()*255);
      g = Math.floor(Math.random()*255);
      b = Math.floor(Math.random()*255);
  		xsp = xsp*-1;
			enlarge();

  	}

  	if (y > cv.height-rad || y < 0+rad) {
      r = Math.floor(Math.random()*255);
      g = Math.floor(Math.random()*255);
      b = Math.floor(Math.random()*255);
  		ysp = ysp*-1;
			enlarge();

  	}



    if (x2 > cv.width-rad2 || x2 < 0+rad2) {
      r2 = Math.floor(Math.random()*255);
      g2 = Math.floor(Math.random()*255);
      b2 = Math.floor(Math.random()*255);
      xsp2 = xsp2*-1;
			enlarge2();

    }

    if (y2 > cv.height-rad2 || y2 < 0+rad2) {
      r2 = Math.floor(Math.random()*255);
      g2 = Math.floor(Math.random()*255);
      b2 = Math.floor(Math.random()*255);
      ysp2 = ysp2*-1;
			enlarge2();
    }


		if (x3 > cv.width-rad3 || x3 < 0+rad3) {
			r3 = Math.floor(Math.random()*255);
			g3 = Math.floor(Math.random()*255);
			b3 = Math.floor(Math.random()*255);
			xsp3 = xsp3*-1;
			enlarge3();
		}

		if (y3 > cv.height-rad3 || y3 < 0+rad3) {
			r3 = Math.floor(Math.random()*255);
			g3 = Math.floor(Math.random()*255);
			b3 = Math.floor(Math.random()*255);
			ysp3 = ysp3*-1;
			enlarge3();
		}

  		x = x+xsp;
  		y = y+ysp;

      x2 = x2+xsp2;
      y2 = y2+ysp2;

			x3 = x3+xsp3;
  		y3 = y3+ysp3;

      //console.log(x);

}


function clear() {

  	ctx.fillStyle = "rgb(" + grey + "," + grey + "," + grey + ")";
		ctx.fillRect(0,0,cv.width,cv.height);

    grey = grey + greySp;
    if (grey > 255 || grey < 0) {
      greySp = greySp * -1;
    }

}

function enlarge() {
	ctx.beginPath();
	ctx.arc(x,y,4*rad,0,Math.PI*2);
	c = "rgba(" + r + "," + g + "," + b + ",.2)";
	ctx.fillStyle = c;
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function enlarge2() {
	ctx.beginPath();
	ctx.arc(x2,y2,4*rad2,0,Math.PI*2);
	c2 = "rgba(" + r2 + "," + g2 + "," + b2 + ",.2)";
	ctx.fillStyle = c2;
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function enlarge3() {
	ctx.beginPath();
	ctx.arc(x3,y3,4*rad3,0,Math.PI*2);
	c3 = "rgba(" + r3 + "," + g3 + "," + b3 + ",.2)";
	ctx.fillStyle = c3;
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

///////////////////////////////////////////
/*executing code setup from here*/
setup();
setInterval(draw, 100);
/*to here executing code setup*/
///////////////////////////////////////////
