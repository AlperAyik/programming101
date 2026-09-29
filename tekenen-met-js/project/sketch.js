const balls = [];
let start = false;
let amount = 20;
let playing = false;
let score = 0;

function setup() {
    createCanvas(640, 480);

    startMenu();
}

function draw() {
    background(125, 150, 175);

    if(playing) {
        fallingballs();
        movePlayer();
        scoreTracker();
        score++;
    } else {
        startMenu();
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

        if(ball.y + radius > height + radius + 10) {
            ball.y = -vy;
            ball.x = random(0 + radius, width - radius);
            ball.diameter = random(30, 80);
        }

        ball.y += vy;
        
        fill(color1, color2, color3)
        circle(x, y, radius);
    }
}

function movePlayer() {
    squareX = constrain(mouseX, 0, width - 20);

    fill(255, 100, 100);
    square(squareX, height - 30, 20, 20);
}


function startMenu() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Klik om te starten`, 10, 20);
}

function scoreTracker() {
    fill(0);
    textSize(16);
    textAlign(RIGHT, TOP);
    text(`Score: ${Math.floor(score / 60)}`, width - 10, 20);
}

function mousePressed() {
    if(playing === false) {
        createBalls();
        playing = true
    }
}