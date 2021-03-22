///////////////////////////////////////////
/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/
///////////////////////////////////////////


var x = 0;



//SETUP FUNCTION : EXECUTED ONLY ONCE
function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

//DRAW FUNCTION : EXECUTED REPEATEDLY - UNTIL YOU QUIT THE PROGRAM
function draw() {
  //background
  ctx.fillStyle = "rgb("+x+", "+x+", "+x+")";

	x = x+2;

  ctx.fillRect(0,0,cv.width,cv.height*0.95);

  //base
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0,cv.height*0.95,cv.width,cv.height*0.05);





  //buildings
  ctx.fillStyle = "rgb(0, 0, 0)";
  ctx.fillRect(0,400,100,cv.height);


  ctx.fillRect(158,240,80,60);

  ctx.fillRect(108,300,180,cv.height);


  ctx.fillRect(300,370,150,cv.height);


  ctx.fillRect(450,480,14,cv.height);


  //roof
  ctx.beginPath();
  ctx.moveTo(524,170);
  ctx.lineTo(464,310);
  ctx.lineTo(584,310);
  ctx.closePath();
  ctx.fill();


  ctx.fillRect(464,310,120,cv.height);

  //

  ctx.fillRect(595,460,70,cv.height);
  ctx.fillRect(665,540,20,cv.height);
  ctx.fillRect(685,460,70,cv.height);
  //

  ctx.fillRect(765,360,75,cv.height);

  ctx.fillRect(840,220,40,30);
  ctx.fillRect(930,220,40,30);
  ctx.fillRect(840,250,130,cv.height);


  //
  ctx.beginPath();
  ctx.moveTo(980,120);
  ctx.lineTo(980,180);
  ctx.lineTo(1060,180);
  ctx.closePath();
  ctx.fill();

  ctx.fillRect(980,180,80,cv.height);

  //

  ctx.fillRect(1060,480,15,cv.height);


  ctx.fillRect(1075,415,75,cv.height);

  //
  ctx.beginPath();
  ctx.moveTo(1230,305);
  ctx.lineTo(1230,375);
  ctx.lineTo(1160,375);
  ctx.closePath();
  ctx.fill();


  ctx.fillRect(1160,375,70,cv.height);

  //

  ctx.fillRect(1230,510,12,cv.height);

  //
  ctx.beginPath();
  ctx.moveTo(1257,195);
  ctx.lineTo(1257,230);
  ctx.lineTo(1242,230);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(1242,230,15,cv.height);

  ctx.beginPath();
  ctx.moveTo(1257,110);
  ctx.lineTo(1337,110);
  ctx.lineTo(1327,75);
  ctx.lineTo(1267,75);
  ctx.closePath();
  ctx.fill();

  ctx.fillRect(1257,110,80,cv.height);

  ctx.beginPath();
  ctx.moveTo(1337,265);
  ctx.lineTo(1337,280);
  ctx.lineTo(1352,280);
  ctx.closePath();
  ctx.fill();
  ctx.fillRect(1337,280,15,cv.height);

  //
  ctx.beginPath();
  ctx.moveTo(1420,00);
  ctx.lineTo(1405,170);
  ctx.lineTo(1435,170);
  ctx.closePath();
  ctx.fill();

  ctx.fillRect(1405,170,30,25);

  ctx.beginPath();
  ctx.arc(1420,200,30,0,2*Math.PI);
  ctx.closePath();
  ctx.fill();

  ctx.fillRect(1405,180,30,60);
  ctx.fillRect(1360,240,120,cv.height);


  ctx.fillRect(1485,355,50,cv.height);

  ctx.fillRect(1550,400,100,cv.height);

  ctx.fillRect(1570,200,150,cv.height);

  ctx.fillRect(1700,350,120,cv.height);

  ctx.fillRect(1840,120,80,cv.height);






  //widnows
  ctx.fillStyle = "rgb(255, 255, 255)";
  //ctx.fillRect(595,460,70,cv.height);

  ctx.fillRect(605,480,20,20);
  ctx.fillRect(635,510,20,20);

  //ctx.fillRect(685,460,70,cv.height);
  ctx.fillRect(725,480,20,20);
  ctx.fillRect(695,510,20,20);

  ctx.fillRect(665,550,20,20);
  ctx.fillRect(665,585,20,20);
  ctx.fillRect(665,620,20,20);
	ctx.fillRect(665,655,20,20);
  ctx.fillRect(665,690,20,20);
	ctx.fillRect(665,725,20,20);
	ctx.fillRect(665,760,20,20);
	ctx.fillRect(665,795,20,20);
	ctx.fillRect(665,830,20,20);
	ctx.fillRect(665,865,20,20);
	ctx.fillRect(665,900,20,20);
	ctx.fillRect(665,935,20,20);
	ctx.fillRect(665,970,20,20);
	ctx.fillRect(665,1005,20,20);


}








///////////////////////////////////////////
/*executing code setup from here*/
setup();
setInterval(draw, 100);
/*to here executing code setup*/
///////////////////////////////////////////
