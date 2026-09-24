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
        color: random(60, 220)
    })
  }
  console.log(circles)
//   Ik gebruik vx express niet zodat ik direct met random kan werken (oefenen)
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

    if (mouseIsPressed) {
        let distance = dist(mouseX, mouseY, ball.x, ball.y)

        if (distance < ball.diameter / 2) {
            circles.splice(i, 1)
            i--
        }
    }

    if(mouseX < width / 2) {
        fill(x + 5 * 5, y + 5 * 5, x + y + 5 * 5)
    } else {
        fill(x + 10 * 10, y + 10 * 10, x + y + 10 * 10)
    }
    
    
    circle(x, y, diameter)
  }
}