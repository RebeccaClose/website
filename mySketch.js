
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0,0);
  canvas.style('z-index','-1');
  background(0, 0, 255);
}

function draw() {
	strokeWeight (100)
  stroke(255, 255, 255);
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}



