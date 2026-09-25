function setup() {
  createCanvas(300, 150);
  noStroke();
  fill(80, 140, 255);
}

function draw() {
  background(240);

  // random() wordt 60 keer per seconde opnieuw uitgevoerd
  circle(random(width), random(height), 30);
}