let circles = [];
let aantal = 100;

function setup() {
  createCanvas(600, 600);
  noStroke();
  fill(60);

  for(let i = 0; i < aantal; i++) {
    circles.push({
        x: random(width),
        y: random(height),
        vx: random(-2, 2),
        vy: random(-2, 2),
        diameter: random(10,40),
        color: random(128, 169)
    })
  }
  console.log(circles)
}

function draw() {
  background(220);
  
  for(let i = 0; i < circles.length; i++) {
    let ball = circles[i]
    let {x, y, vx, vy, diameter, color} = ball

    ball.x += vx
    ball.y += vy

    if (ball.x < -ball.diameter) ball.x = width + ball.diameter;
    if (ball.x > width + ball.diameter) ball.x = -ball.diameter;
    if (ball.y < -ball.diameter) ball.y = height + ball.diameter;
    if (ball.y > height + ball.diameter) ball.y = -ball.diameter;

    fill(x + 2 * 2, y + 2 * 2, color)
    circle(x, y, diameter)
  }
}