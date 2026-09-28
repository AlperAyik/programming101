const balls = [];
let start = false;
let amount = 10;
let playing = false;

function setup() {
    createCanvas(640, 480);

    startMenu();
}

function draw() {
    background(125, 150, 175);

    if(playing) {
        fallingballs()
    } else {
        startMenu()
    }
}

function createBalls() {
    for(let i = 0; i < amount; i++) {
        balls.push({
            x: random(5, width - 10),
            y: random(0, 0),
            vx: random(0, 3),
            vy: random(0.5, 1.5),
            diameter: random(30, 80),
            color1: random(0, 255),
            color2: random(0, 255),
            color3: random(0, 255),
        })
    }
} 

function fallingballs() {
    for(let ball of balls) {
        const {x, y, vx, vy, diameter, color1, color2, color3} = ball

        let radius = diameter / 2;

        if(ball.y + radius > height + radius) {
            ball.y = -vy;
            ball.x = random(0 + radius, width - radius);
            ball.diameter = random(30, 80);
        }

        ball.y += vy;

        fill(color1, color2, color3)
        circle(x, y, radius);
    }
}


function startMenu() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Klik om te starten`, 10, 20);
}

function mousePressed() {
    if(playing === false) {
        createBalls();
        playing = true
    }
}