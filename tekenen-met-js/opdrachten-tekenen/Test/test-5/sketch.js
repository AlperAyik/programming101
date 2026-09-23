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

        if (x > width || x < 0) vx = -vx
        if (y > height || y < 0) vy = -vy

        circle(x, y, 40)
    }
}


function mousePressed() {
    stop = !stop
    circle(x, y, 40)
}