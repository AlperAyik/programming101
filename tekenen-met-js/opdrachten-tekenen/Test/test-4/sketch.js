let x = 0;
let y = 0;
let gravity = 0.4;
let stop = false

function setup() {
    createCanvas(300, 300);
}

function draw() {
    if (!stop) {
        background(220);
        x += 2
        y += gravity
        if (x > width + 100) {
            x = 0
        }
        if (y > height + 5) {
            y = 0
        }
        fill(y)
        circle(x, y, 30)
    }
}


function mousePressed() {
    fill(y)
    circle(x,y,30)
    console.log(x, y)
    stop = !stop;
}