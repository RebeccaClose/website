

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 255);
}

function draw() {
	strokeWeight (10)
  stroke(255, 255, 255);
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
