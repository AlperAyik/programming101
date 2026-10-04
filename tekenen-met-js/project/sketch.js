const balls = [];
const buttons = document.querySelectorAll('button');
const audio = document.querySelector('audio');

const CANVAS_WIDTH = 640;
const CANVAS_HEIGHT = 480;
const PLAYER_SIZE = 20;
const PLAYER_SPEED = 5;
const STARTING_LIVES = 3;
const EASY_BALL_AMOUNT = 20;
const EXTRA_HARD_BALL_AMOUNT = 25;
const SCORE_INTERVAL = 60;

let shipX = 310;
let shipY = 440;
let amount = EASY_BALL_AMOUNT;
let playing = false;
let score = 0;
let powerUpActive = false;
let pause = false;
let lives = STARTING_LIVES;
let num = 2;
let difficulty = 'Makkelijk';
let difficultyText = document.getElementById('current-difficulty');
let highScore = localStorage.getItem('highscore') || 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        setDifficulty(button.textContent);
        difficultyText.textContent = button.textContent;
    });
});

function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    drawBackground();
    startMenu();
}

function draw() {
    if (playing) {
        buttons.forEach((button) => {
            button.style.display = 'none';
        });

        if (pause) {
            pauseText();
        } else {
            updateBallSpeed();
            drawBackground();
            drawLives();
            drawFallingBalls();
            movePlayer();
            checkCollision();
            drawScore();

            score++;
        }
    } else {
        startMenu();
    }

    updateHighScore();
}

function playAudio(source) {
    audio.src = source;
    audio.loop = true;
    audio.play();
}

function setDifficulty(selectedDifficulty) {
    if (selectedDifficulty === 'Makkelijk') {
        amount = EASY_BALL_AMOUNT;
        difficulty = 'Makkelijk';
    } else if (selectedDifficulty === 'Moeilijk') {
        amount = EASY_BALL_AMOUNT;
        difficulty = 'Moeilijk';
    } else if (selectedDifficulty === 'Extra moeilijk') {
        amount = EXTRA_HARD_BALL_AMOUNT;
        difficulty = 'Extra moeilijk';
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
        let grayValue = random(70, 130);

        let craters = [
            {
                ox: random(-10, 10),
                oy: random(-10, 10),
                size: random(6, 15)
            },
            {
                ox: random(-15, 15),
                oy: random(-15, 15),
                size: random(5, 12)
            },
            {
                ox: random(-12, 12),
                oy: random(-12, 12),
                size: random(4, 10)
            }
        ];

        const speedMultiplier =
            difficulty === 'Makkelijk'
                ? 1
                : difficulty === 'Moeilijk'
                    ? 1.5
                    : 2;

        balls.push({
            x: random(5, width - 10),
            y: random(0, height / 2),
            vx: random(0, 3),
            vy: random(0.5, 1.5) * speedMultiplier,
            diameter: random(30, 80),
            color1: grayValue,
            color2: grayValue * 0.9,
            color3: grayValue * 0.8,
            craters: craters
        });
    }
}

function updateBallSpeed() {
    for (let ball of balls) {
        if (score / SCORE_INTERVAL > 100 && difficulty === 'Makkelijk') {
            ball.vy = 2.5;
            score += 0.5;
        } else if (
            score / SCORE_INTERVAL > 50 &&
            difficulty === 'Makkelijk'
        ) {
            ball.vy = 1.5;
            score += 0.3;
        }

        if (score / SCORE_INTERVAL > 100 && difficulty === 'Moeilijk') {
            ball.vy = 1.5;
            score += 0.5;
        } else if (
            score / SCORE_INTERVAL > 100 &&
            difficulty === 'Extra moeilijk'
        ) {
            ball.vy = 1.2;
            score += 0.5;
        }
    }
}

function drawFallingBalls() {
    for (let ball of balls) {
        let radius = ball.diameter / 2;

        if (ball.y + radius > height + radius + 10) {
            ball.y = -radius;
            ball.x = random(radius, width - radius);
            ball.diameter = random(30, 80);
        }

        ball.y += ball.vy;

        noStroke();
        fill(ball.color1, ball.color2, ball.color3);
        circle(ball.x, ball.y, ball.diameter);

        fill(
            ball.color1 * 0.5,
            ball.color2 * 0.5,
            ball.color3 * 0.5
        );

        for (let crater of ball.craters) {
            drawCrater(
                ball.x + crater.ox,
                ball.y + crater.oy,
                crater.size
            );
        }
    }
}

function drawCrater(x, y, size) {
    circle(x, y, size);
}

function checkCollision() {
    for (let ball of balls) {
        let radius = ball.diameter / 2;

        let closestX = constrain(
            ball.x,
            shipX,
            shipX + PLAYER_SIZE
        );

        let closestY = constrain(
            ball.y,
            height - PLAYER_SIZE,
            shipY
        );

        let distanceX = ball.x - closestX;
        let distanceY = ball.y - closestY;

        let distance = sqrt(
            distanceX * distanceX +
            distanceY * distanceY
        );

        if (distance < radius) {
            if (lives > 0) {
                if (powerUpActive === false) {
                    ball.y = -radius;
                    ball.x = random(radius, width - radius);
                    lives--;
                }
            } else {
                buttons.forEach((button) => {
                    button.style.display = 'block';
                });

                gameOver();
                playAudio('./assets/audio/Game Over.mp3');
            }
        }
    }
}

function movePlayer() {
    if (difficulty === 'Makkelijk') {
        shipX = constrain(mouseX, 0, width - PLAYER_SIZE);
        shipY = height - 40;
    } else {
        if (keyIsDown(LEFT_ARROW)) {
            shipX -= PLAYER_SPEED;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            shipX += PLAYER_SPEED;
        }

        if (keyIsDown(UP_ARROW)) {
            shipY -= PLAYER_SPEED;
        }

        if (keyIsDown(DOWN_ARROW)) {
            shipY += PLAYER_SPEED;
        }

        shipX = constrain(
            shipX,
            0,
            width - PLAYER_SIZE
        );

        shipY = constrain(
            shipY,
            40,
            height - PLAYER_SIZE
        );
    }

    drawShip(shipX, shipY);
}

function drawShip(x, y) {
    noStroke();

    if (num % 2 === 0) {
        fill(255, 100, 0);
        num = 3;
    } else {
        fill(255, 255, 100);
        num = 2;
    }

    triangle(
        x,
        y,
        x + 7,
        y,
        x + 3.5,
        y + 15
    );

    triangle(
        x + 6,
        y,
        x + 14,
        y,
        x + 10,
        y + 20
    );

    triangle(
        x + 13,
        y,
        x + 20,
        y,
        x + 16.5,
        y + 15
    );

    stroke(0);

    fill(0, 255, 0);

    triangle(
        x,
        y - 20,
        x + 20,
        y - 20,
        x + 10,
        y - 40
    );

    fill(255, 0, 0);
    square(x, y - 20, PLAYER_SIZE);
}

function startMenu() {
    fill(255);
    textSize(22);
    textAlign(CENTER, CENTER);

    text(
        'Welkom bij Space Dodger!',
        width / 2,
        height / 2 - 30
    );

    textSize(16);

    text(
        'Dubbel klik om te starten',
        width / 2,
        height / 2
    );

    text(
        `High score: ${highScore}`,
        width / 2,
        height / 2 + 30
    );
}

function drawLives() {
    fill(255);
    textSize(16);
    textAlign(LEFT, TOP);

    text(
        `Levens: ${lives}`,
        10,
        20
    );
}

function gameOver() {
    drawBackground();

    playing = false;

    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);

    text(
        'Game Over!',
        width / 2,
        height / 2
    );

    text(
        'Dubbel klik om opnieuw te starten',
        width / 2,
        height / 2 + 30
    );

    noLoop();
}

function resetGame() {
    drawBackground();

    balls.length = 0;
    score = 0;
    lives = STARTING_LIVES;
    pause = false;

    shipX = 310;
    shipY = 440;
}

function drawScore() {
    fill(255);
    textSize(16);
    textAlign(RIGHT, TOP);

    text(
        `Score: ${Math.floor(score / SCORE_INTERVAL)}`,
        width - 10,
        20
    );
}

function pauseText() {
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);

    text(
        'Pauze',
        width / 2,
        height / 2
    );
}

function updateHighScore() {
    const currentScore = Math.floor(
        score / SCORE_INTERVAL
    );

    if (currentScore > highScore) {
        highScore = currentScore;
        localStorage.setItem('highscore', highScore);
    }
}

function doubleClicked() {
    if (playing === false) {
        resetGame();
        createBalls();
        playing = true;

        playAudio('./assets/audio/playingSound1.mp3');

        loop();
    } else {
        resetGame();
        playing = false;

        audio.pause();

        buttons.forEach((button) => {
            button.style.display = 'block';
        });

        noLoop();
    }
}

function keyPressed() {
    if (keyCode === 32 && playing === true) {
        pause = !pause;

        if (pause) {
            audio.pause();
        } else {
            playAudio('./assets/audio/playingSound1.mp3');
        }

        return false;
    }
}