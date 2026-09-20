function setup() {
    createCanvas(300, 300);
    noStroke();
    fill(60);
}

function draw() {
    background(220);

    let count = 20;
    let cellSize = width / count;


    for (let row = 0; row < count; row++) {
        for (let col = 0; col < 40; col++) {
            let x = col * cellSize;
            let y = row * cellSize;

            let color = map(row, 0, 5, 0, 180);
            let color2 = map(col, 0, 5, 0, 180);

            let even = (col + row) % 2 === 0

            if (even) {
                fill(y, x, color)
                square(x, y, cellSize)
            } else {
                fill(color2, y, x)
                circle(x + cellSize / 2, y + cellSize / 2, cellSize)
            }
        }
    }
}