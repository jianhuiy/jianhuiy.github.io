///////////////////////////////////////////
/*setting up canvas from here*/
var cv = document.getElementById("canvas");
var ctx = cv.getContext("2d");
/*to here setting up canvas*/
///////////////////////////////////////////



var sz = 50;
var r,g,b;


//SETUP FUNCTION : EXECUTED ONLY ONCE
function setup() {
	ctx.canvas.width  = window.innerWidth;
	ctx.canvas.height = window.innerHeight;
}

//DRAW FUNCTION : EXECUTED REPEATEDLY - UNTIL YOU QUIT THE PROGRAM
function draw() {

	for (var w = 100; w<cv.width-100; w+=sz) {
			for (var h = 100; h<cv.height-100; h+=sz) {
					ctx.strokeStyle = "rgb(51,204,255)";
					ctx.lineWidth = 3;
					ctx.beginPath();
					ctx.moveTo(w-sz/3, h-sz/3);
					ctx.lineTo(w+sz/3, h+sz/3);
					ctx.lineTo(w+sz/3, h-sz/3);
					ctx.lineTo(w-sz/3, h+sz/3);
					ctx.closePath();
					ctx.stroke();


					ctx.beginPath();
					//ctx.arc(w,h,sz,0,1.5*Math.PI,true);
					ctx.arc(w,h,sz,0,2*Math.PI);
					ctx.closePath();
					ctx.stroke();



			}

		// for (var w = 1; w<cv.width/sz-1; w++) {
		// 			for (var h = 1; h<cv.height/sz-1; h++) {
		// 					ctx.strokeStyle = "rgb(255,0,0)";
		// 					ctx.beginPath();
		// 					ctx.rect(w*sz,h*sz,sz,sz);
		// 					ctx.stroke();
		// 					ctx.closePath();
		//
		// 					ctx.beginPath();
		// 					ctx.arc(w*sz,h*sz,sz,0,1*Math.PI);
		// 					ctx.stroke();
		// 					ctx.closePath();
		// 			}
	}

}








///////////////////////////////////////////
/*executing code setup from here*/
setup();
setInterval(draw, 100);
/*to here executing code setup*/
///////////////////////////////////////////
