function setup() {
  createCanvas(400, 60);
  noStroke();
  fill(60);
}

function draw() {
  background(220);

 let count = 10;
 let cellSize = width / count;
 console.log(cellSize)

 for(let i = 0; i < count; i++) {
    let x = cellSize / 2 + i * cellSize;

    if(i % 2 === 0) {
        square(x - cellSize / 2, height / 2 - cellSize / 2, cellSize)
    } else {
        circle(x, height / 2, cellSize)
    }
 }
}