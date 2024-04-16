function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(200);

  //this is a call to myShape()
  myShape(width / 2, height / 2, 50, 50);
 
  myShape(50, 200, 60, 80); 
  myShape(400, 200, 170, 90);
  myShape(100, 100, 80, 150);
  
}

function myShape(x, y, w, h) {
  fill(80, 200, 200);
  ellipse( x, y, w, h);
  rectMode(CENTER);
  fill(900);
  rect(x, y - h/2, w, h);
}
