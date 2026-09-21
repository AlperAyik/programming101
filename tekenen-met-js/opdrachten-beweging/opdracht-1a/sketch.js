let x = 0;
function setup() {
  createCanvas(300, 120);
  noStroke();
  fill(60);
}

function draw() {
  background(220);

  x += 5;

  circle(x, height / 2, 30)
}