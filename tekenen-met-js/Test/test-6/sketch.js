const amount = 20;
let circles = [];
let time = 0;
let playing = false;
let pause = false;

const savedScore = localStorage.getItem('score') || 0;

function setup() {
    createCanvas(640, 480);

    for (let i = 0; i < amount; i++) {
        circles.push({
            x: random(0, width),
            y: random(0, 0),
            vx: random(0, 3),
            vy: random(0.5, 1.5),
            diameter: 40
        })
    }
    drawStart();

    console.log(`De hoogste score is: ${savedScore}`);
}

function draw() {
    background(220);

    if (playing === true) {
        if (pause === true) {
            drawPause();
        } else {
            fallingballs();
            playerMovement();
            drawInfo();
            time++;
        }
    } else {
        drawStart();
    }

    localStorage.setItem('score', Math.floor(time / 60));
}

function playerMovement() {


    squareX = constrain(mouseX, 0, width - 20);

    fill(255, 100, 100);
    square(squareX, height - 30, 20, 20);
}

function fallingballs() {

    for (let ball of circles) {
        const { x, y, vx, vy, diameter } = ball;

        let radius = diameter / 2;

        if (ball.y + radius > height) {
            ball.y = -vy;
        }
        ball.y += vy;

        circle(x, y, radius);
    }

}

function drawStart() {
    fill(0);
    textSize(16);
    text(`Klik om te starten`, 10, 20);
}


function drawInfo() {
    fill(0);
    textSize(16);
    text(`Tijd: ${Math.floor(time / 60)}`, 10, 20);
}

function drawPause() {
    fill(0);
    textSize(16);
    text(`Pauze`, 10, 20);
}

function mousePressed() {
    if (playing === false) {
        playing = true;
    }
}

function keyPressed() {
    if (keyCode === 32) {
        pause = !pause;
    }
}