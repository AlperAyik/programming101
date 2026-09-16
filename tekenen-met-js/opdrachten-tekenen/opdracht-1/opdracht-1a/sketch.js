function setup() {
  createCanvas(200, 200);
  noStroke();
}

function draw() {
  background(220);

  let currentWidth = width / 2;
  let currentHeight = height / 2;
  
  fill(60);
  circle(currentWidth, currentHeight, 100)
}