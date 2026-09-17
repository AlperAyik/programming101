function setup() {
  createCanvas(300, 200);
  stroke(40);
}

function draw() {
  background(220);

  let count = 12
  // Teken hier een aantal evenwijdige lijnen.
  for(let i = 0; i < 12; i++) {
    let y = map(i, 0, count - 1, 10, height - 10)
    line(10, y, width - 10, y)
  }
}