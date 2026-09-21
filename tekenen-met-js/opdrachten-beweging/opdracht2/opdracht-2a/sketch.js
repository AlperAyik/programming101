let circles = [];
let aantal = 50;

function setup() {
  createCanvas(320, 200);
  noStroke();
  fill(60);

  for(let i = 0; i < aantal; i++) {
    circles.push({
        x: random(width),
        y: random(height),
        size: random(0.5, 35)
    })
  }
  console.log(circles)
  
}

function draw() {
  background(220);
  
  for(let obj of circles) {
    let {x, y, size} = obj
    x += 5;
    circle(x, y, size)
  }
}