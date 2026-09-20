function setup() {
  createCanvas(300, 300);
  noStroke();
  fill(60);
}

function draw() {
  background(220);

 let count = 10;
 let cellSize = width / count;

 for(let row = 0; row < count; row++) {
    for(let col = 0; col < count; col++) {
        let x = col * cellSize;
        let y = row * cellSize;

        let even = (col + row) % 2 === 0

        if(even) {
            square(x, y, cellSize)
        } else {
            circle(x + cellSize / 2, y + cellSize / 2, cellSize)
        }
    }
 }
}