let x = 60;
let y = 50;
let vx = 3.5;
let vy = 2.4;
let diameter = 36;

let paddle = { width: 80, height: 12 };

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
<<<<<<< HEAD
  
=======
>>>>>>> c5e7cd591aaa1cb06b09f8988f36d6fdb962d3d6
  let halfwidth = paddle.width / 2;
  let xRect = constrain(mouseX, halfwidth, width - halfwidth);

  if (x + radius > width || x - radius < 0) vx = -vx
  if (y + radius > height || y - radius < 0) vy = -vy

  circle(x, y, diameter);


  rect(xRect - halfwidth, height - paddle.height, paddle.width, paddle.height, 4);
}