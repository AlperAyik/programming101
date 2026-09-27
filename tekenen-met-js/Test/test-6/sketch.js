const amountSlider = document.getElementById('ballCount');
const ballCountValue = document.getElementById('ballCountValue');

let amount = 20;
let circles = [];
let time = 0;
let playing = false;
let pause = false;

const savedScore = localStorage.getItem('score') || 0;


amountSlider.addEventListener('change', (e) => {
    amount = Number(e.target.value);
    ballCountValue.textContent = amount;
});

function setup() {
    createCanvas(640, 480);
    
    drawStart();
}

function createBalls() {
    for (let i = 0; i < amount; i++) {
        circles.push({
            x: random(0, width),
            y: random(0, 0),
            vx: random(0, 3),
            vy: random(0.5, 1.5),
            diameter: random(30, 80)
        })
    }
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
            highScore();
            time++;
        }
    } else {
        drawStart();
    }

    if(time > savedScore * 60) {
        localStorage.setItem('score', Math.floor(time / 60));
    }
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
            ball.x = random(0, width);
        }

        ball.y += vy;

        circle(x, y, radius);
    }

}

function drawStart() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Klik om te starten`, 10, 20);
}

function highScore() {
    fill(0);
    textSize(16);
    textAlign(RIGHT, TOP);
    text(`High score: ${savedScore}`, width - 10, 20);
}


function drawInfo() {
    fill(0);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Tijd: ${Math.floor(time / 60)}`, 10, 20);
}

function drawPause() {
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(`Pauze`, width / 2, height / 2);
}

function mousePressed() {
    if (playing === false) {
        createBalls();
        playing = true;
        let amountSliderValue = amountSlider.value;
        ballCountValue.textContent = amountSliderValue;
        amount = Number(amountSliderValue);
    }
}

function keyPressed() {
    if (keyCode === 32) {
        pause = !pause;
    }
}