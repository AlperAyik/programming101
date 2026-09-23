let circles = [];
let aantal = 100;

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(60);

  for (let i = 0; i < aantal; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      vx: random(-2, 2),
      vy: random(-2, 2),
      diameter: random(10, 40),
      color: random(128, 169)
    })
  }
  console.log(circles)
}

function draw() {
  background(220);
  updateBalls();
  drawBalls();
  drawInfo();
}

function updateBalls() {
  for (let i = 0; i < circles.length; i++) {
    let ball = circles[i]
    let { x, y, vx, vy, diameter, color } = ball

    ball.x += vx // is de snelheid en de x is de huidige positie
    ball.y += vy

    wrapAround(ball)
  }
}

function wrapAround(ball) {
  if (ball.x < -ball.diameter) ball.x = width + ball.diameter;
  if (ball.x > width + ball.diameter) ball.x = -ball.diameter;
  if (ball.y < -ball.diameter) ball.y = height + ball.diameter;
  if (ball.y > height + ball.diameter) ball.y = -ball.diameter;
}

function drawBalls() {
  for (let i = 0; i < circles.length; i++) {
    let ball = circles[i]
    let { x, y, vx, vy, diameter, color } = ball

    fill(x + 2 * 2, y + 2 * 2, color)
    circle(x, y, diameter)
  }
}

function drawInfo() {
  fill(40)
  textSize(12)
  text("Aantal:" + circles.length, 10, 18)
}

function mousePressed(){
  for(let i = 0; i < circles.length; i++) {
        circles.splice(i, 1)
    }
} // dit later ff checken