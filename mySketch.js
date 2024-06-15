
var canvas;

function setup() {
  createMetaTag();
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position (0,0);
  canvas.style('z-index','-1');
  background(255, 0, 153);
} 

function draw() {
	strokeWeight (80)
  stroke(255, 255, 255);
  {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function touchMoved() {
  // prevent the display from moving around when you touch it
  return false;
}

function createMetaTag() {
  let meta = createElement('meta');
  meta.attribute('name', 'viewport');
  meta.attribute('content', 'user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1,width=device-width,height=device-height');
  
  let head = select('head');
  meta.parent(head);
}







