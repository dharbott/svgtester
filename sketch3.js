/**
	Strong Angles
	Empty Space
	Limited use of Color
	Lines suggesting Direction and Movement
	
	800 x 600



**/



var x = 120;
var y = 340;
var xspeed = 1;
var yspeed = 3.3;

var alternateColor = true;
var vector1;
var donutVector;
var ironGiantVector;
var noiseVal;
var noiseScale=0.02;
 
var positionv;
var velocityv;
var accelv;

 	
var img;
 
function setup() {
	var cvs1 = createCanvas(800, 600);
	
	cvs1.parent("canvas1");
	//noLoop();
	background(255);
	strokeWeight(0);
	
	vector1 = createVector(10,20);
	donutVector = createVector(625, 300);
	ironGiantVector = createVector(780,280);
	
	positionv = createVector(100,300);
	velocityv = createVector(2,1);
	accelv = createVector(0,1);
	
	/**
   //background(0);
   for (var y = 0; y < height; y++) {
	for (var x = 0; x < width; x++) {
       noiseDetail(2,0.2);
       noiseVal = noise(x * noiseScale, y * noiseScale);
       stroke(noiseVal*255);
       point(x,y);
	   }
	}
	**/
	//noLoop();


	image(img, 0, 0);
}
	function preload() {
		img = loadImage("../assets/test.svg");
	}

function draw() {
	
	alternateColor = true;
	
	//background(230, 168, 80);

	//var xspacing = width/6;
	//var yspacing = height/6;
	
	
	var black = color(0, 0, 0, 100);

	
	var count = 7;//11;
	var i = 0;
	//for (var i = 0; i < count * 2; i++)
	{		
		if (alternateColor)
		{
			fill(190, 60, 60);
		}
		else
		{
			fill(240, 168, 80);
		}
		
		alternateColor = !alternateColor;
		
		arc(donutVector.x, donutVector.y, width*PI, height*PI, i*(PI / count), (i+1)*(PI / count));
		/**
		triangle ((i-1)*xspacing,0, x, y, i*xspacing, 0);
		triangle ((i-1)*xspacing,height, x, y, i*xspacing, height);
		triangle (0, (i-1)*yspacing, x, y, 0, i*yspacing);
		triangle (width, (i-1)*yspacing, x, y, width, i*yspacing);
		**/
	}
		
	
	//fill(200,60,60, 255);
	//fill(21, 13, 10, 255);

	push();
	scale(0.5,0.5);
	
	fill(35, 15, 10, 255);
	stroke(255);
	strokeWeight(10);
	ellipse(positionv.x, positionv.y, 500, 500);
	

	fill(255);
	ellipse(positionv.x, positionv.y, 160, 160);
	
	stroke(255);
	noFill();
	strokeWeight(20);
	arc(positionv.x, positionv.y, 420, 420, 0, HALF_PI*.8);
	strokeWeight(12);
	arc(positionv.x, positionv.y, 220, 220, PI, PI + HALF_PI*.8);
	strokeWeight(0);
	scale(4,4);

	pop();
	
	
			
	velocityv.add(accelv);
	positionv.add(velocityv);
	
	if ((positionv.y > (height*2)) || (positionv.y < 0))
	{
		velocityv.y = -velocityv.y;
		//accelv.y = accelv.y - 0.001;
	}
	if ((positionv.x > (width*2)) || (positionv.x < 0))
		velocityv.x = -velocityv.x;
	

	
	fill(35, 15, 10, 255);
	stroke(255);
	
	strokeWeight(10);
	
	arc(ironGiantVector.x+8, ironGiantVector.y, 440, 380, PI, 0);
	arc(ironGiantVector.x+8, ironGiantVector.y, 440, 500, PI*3/4, PI);
	
	arc(ironGiantVector.x, ironGiantVector.y, 400, 320, PI, 0);

	
	strokeWeight(0);

	quad(ironGiantVector.x -200, ironGiantVector.y, ironGiantVector.x+200, ironGiantVector.y, 
	ironGiantVector.x+200, ironGiantVector.y+100, ironGiantVector.x -200, ironGiantVector.y+200);
	
	strokeWeight(10);
	line(ironGiantVector.x -200, ironGiantVector.y, ironGiantVector.x -200, ironGiantVector.y+200);
	
	ellipse(ironGiantVector.x -155, ironGiantVector.y+20, 60, 120);
	
	quad(ironGiantVector.x -220, ironGiantVector.y +150, ironGiantVector.x +200, ironGiantVector.y +60, ironGiantVector.x +200, ironGiantVector.y +130, ironGiantVector.x -220, ironGiantVector.y +280);
	
	strokeWeight(0);
	quad(ironGiantVector.x -220, ironGiantVector.y +150, ironGiantVector.x +200, ironGiantVector.y +60, ironGiantVector.x +200, ironGiantVector.y +130, ironGiantVector.x -220, ironGiantVector.y +280);
	
	

	ellipse(ironGiantVector.x -155, ironGiantVector.y+20, 60, 120);
	
	
	
	
	
	for (var i = 0; i < count * 2; i++)
	{
	//var i = 1;
		
		if (alternateColor)
		{
			fill(200, 60, 60);
		}
		else
		{
			fill(250, 168, 80);
		}
		
		alternateColor = !alternateColor;
		
		//arc(donutVector.x, donutVector.y, 60, 120, i*(PI / count), (i+1)*(PI / count));
		/**
		triangle ((i-1)*xspacing,0, x, y, i*xspacing, 0);
		triangle ((i-1)*xspacing,height, x, y, i*xspacing, height);
		triangle (0, (i-1)*yspacing, x, y, 0, i*yspacing);
		triangle (width, (i-1)*yspacing, x, y, width, i*yspacing);
		**/
	}
	
	//blendMode(ADD);

	
	//fill()
	
/**
	x = x + xspeed;
	y = y + yspeed;
	
	if ((x > width) || (x < 0)) {
		xspeed = xspeed * -1;
	}
	
	if ((y > height) || (y < 0)) {
		yspeed = yspeed * -1;
	}

	fill(50);
	ellipse(x,y,50,50);
	**/
}


function mouseDragged()
{
//	console.log(mouseX - ironGiantVector.x);
//	console.log(mouseY - ironGiantVector.y);
	donutVector.x = mouseX;
	donutVector.y = mouseY;
}