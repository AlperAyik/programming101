const balls = [];
const buttons = document.querySelectorAll('button');
let amount = 20;
let playing = false;
let score = 0;
let pause = false;

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        gameDifficulty(btn.textContent);
    })
})

const highScore = localStorage.getItem('highscore') || 0;

function setup() {
    createCanvas(640, 480);
    drawBackground();
    startMenu();
}

function draw() {
    

    if (playing) {
        if (pause) {
            pauzeTekst();
        } else {
            drawBackground();
            fallingballs();
            movePlayer();
            checkCollision();
            scoreTracker();
            score++;
        }
    } else {
        startMenu();
    }

    if (score > highScore * 60) {
        localStorage.setItem('highscore', Math.floor(score / 60));
    }
}

function gameDifficulty(diff) {
    if (diff === 'Makkelijk') {
        amount = 20;
    } else if (diff === 'Moeilijk') {
        amount = 30;
    } else if (diff === 'Extra moeilijk') {
        amount = 40;
    }
}

function drawBackground() {
    background(10, 15, 35);

    fill(255);
    noStroke();

    ellipse(random(width), random(height), 3, 3);
    ellipse(random(width), random(height), 5, 5);
    ellipse(random(width), random(height), 1, 1);
    ellipse(random(width), random(height), 2, 2);
    ellipse(random(width), random(height), 5, 5);
}

function createBalls() {
    for (let i = 0; i < amount; i++) {
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
    for (let ball of balls) {
        const { x, y, vx, vy, diameter, color1, color2, color3 } = ball;

        let radius = diameter / 2;

        if (ball.y + radius > height + radius + 10) {
            ball.y = -vy;
            ball.x = random(radius, width - radius);
            ball.diameter = random(30, 80);
        }

        ball.y += vy;

        fill(color1, color2, color3);
        circle(x, y, diameter);
    }
}

function checkCollision() {
    for (let ball of balls) {
        let radius = ball.diameter / 2;

        let closestX = constrain(ball.x, squareX, squareX + 20);
        let closestY = constrain(ball.y, height - 30, height - 10);

        let distanceX = ball.x - closestX;
        let distanceY = ball.y - closestY;

        let distance = sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < radius) {
            gameOver();
        }
    }
}

function movePlayer() {
    squareX = constrain(mouseX, 0, width - 20);

    fill(255, 100, 100);
    square(squareX, height - 30, 20, 20);
}


function startMenu() {
    fill(255, 255, 255);
    textSize(16);
    textAlign(LEFT, TOP);
    text(`Dubbel klik om te starten`, 10, 20);
}

function gameOver() {
    background(125, 150, 175);
    playing = false;

    fill(255, 255, 255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(`Game Over!`, width / 2, height / 2);
    text(`Dubbel klik om opnieuw te starten`, width / 2, height / 2 + 30);
    text(`Highscore: ${highScore}`, width / 2, height / 2 + 60);

    noLoop();
}


function resetGame() {
    balls.length = [];
    score = 0;
    levens = 3;
    playing = false;
    console.log(playing)
}

function scoreTracker() {
    fill(255, 255, 255);
    textSize(16);
    textAlign(RIGHT, TOP);
    text(`Score: ${Math.floor(score / 60)}`, width - 10, 20);
}

function highScoreText() {
    fill(255, 255, 255);
    textSize(12);
    textAlign(CENTER, CENTER);

    if (score > highScore) {
        text(`nieuwe highscore: ${highScore}`, width - 10, 20);
    } else {
        text(`highscore: ${highScore}`, width - 10, 20);
    }

}

function pauzeTekst() {
    fill(255, 255, 255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text('Pauze', width / 2, height / 2)
}

function doubleClicked() {
    if (playing === false) {
        resetGame();
        createBalls();
        playing = true;
        loop();
    }
}

function keyPressed() {
    if (keyCode === 32 && playing === true) {
        pause = !pause;
    }
}