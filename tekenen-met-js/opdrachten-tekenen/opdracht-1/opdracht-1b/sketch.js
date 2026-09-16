function setup() {
    createCanvas(200, 500);
    noStroke();
}

function draw() {
    background(220);

    let currentWidth = width / 2;
    let currentHeight = height / 2;
    let grootsteZijde = max(width, height)

    fill(60);
    circle(currentWidth, currentHeight, grootsteZijde)
}