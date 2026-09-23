let x = 60;
let y = 50;
let vx = 3.5;
let vy = 2.4;
let diameter = 36;

function setup() {
  createCanvas(320, 200);
  noStroke();
  fill(60);
}

function draw() {
  background(220);

   x += vx;
   y += vy;

   let radius = diameter / 2;

   if(x + radius > width || x - radius < 0) vx = -vx
   if(y + radius > height || y - radius < 0) vy = -vy

  circle(x, y, diameter);
}