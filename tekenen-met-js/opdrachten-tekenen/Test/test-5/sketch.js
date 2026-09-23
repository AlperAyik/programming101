let x = 40;
let y = 60;
let vx = 3;
let vy = 2;
let stop = false


function setup() {
    createCanvas(320, 160);
    noStroke();
    fill(80, 140, 255);
}

function draw() {

    if (!stop) {
        background(220);

        x += vx;
        y += vy;
        let radius = 40 / 2

        if (x + radius > width || x - radius < 0) vx = -vx
        if (y + radius > height || y - radius< 0) vy = -vy

        circle(x, y, 40)
    }
}


function mousePressed() {
    stop = !stop
    circle(x, y, 40)
}