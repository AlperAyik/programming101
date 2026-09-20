let num = 2;

function setup() {
  createCanvas(300, 300);
  noStroke();
  fill(60);
}

function draw() {
  background(220);

 let count = 20;
 let cellSize = width / count;

 for(let row = 0; row < count; row++) {
    for(let col = 0; col < count; col++) {
        let x = col * cellSize;
        let y = row * cellSize;

        let even = (col + row) % num === 0

        if(even) {
            fill(252, 30, 3)
            square(x, y, cellSize)
        } else {
            fill(252, 186, 3)
            circle(x + cellSize / 2, y + cellSize / 2, cellSize)
        }
    }
 }

   num = (num === 2) ? 3 : 2;
}