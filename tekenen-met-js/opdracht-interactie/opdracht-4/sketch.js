let ball = {
    x: 60,
    y: 50,
    vx: 3.5,
    vy: 2.4,
    diameter: 36
}

let paddle = {
    x: 160,
    width: 80,
    height: 12,
    speed: 5
};

let counter = 0;

function setup() {
    createCanvas(320, 200);
    noStroke();
    fill(60);
}

function draw() {
    background(220);

    ball.x += ball.vx;
    ball.y += ball.vy;

    if (keyIsDown(LEFT_ARROW)) {
        paddle.x -= paddle.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        paddle.x += paddle.speed;
    }

    paddle.x = constrain(
        paddle.x,
        paddle.width / 2,
        width - paddle.width / 2
    );

    bounceBall(ball, paddle);

    let radius = ball.diameter / 2;

    if (ball.x + radius > width || ball.x - radius < 0) {
        ball.vx = -ball.vx;
    }

    if (ball.y + radius > height || ball.y - radius < 0) {
        ball.vy = -ball.vy;
    }

    fill(60);
    circle(ball.x, ball.y, ball.diameter);

    fill(100, 100, 255);

    rect(
        paddle.x - paddle.width / 2,
        height - 30,
        paddle.width,
        paddle.height,
        4
    );
}

function bounceBall(ball, paddle) {
    let paddleY = height - 30;

    if (
        ball.y + ball.diameter / 2 >= paddleY &&
        ball.y - ball.diameter / 2 <= paddleY + paddle.height &&
        ball.x + ball.diameter / 2 >= paddle.x - paddle.width / 2 &&
        ball.x - ball.diameter / 2 <= paddle.x + paddle.width / 2 &&
        ball.vy > 0
    ) {

        ball.y = paddleY - ball.diameter / 2;

        ball.vy = -ball.vy;
    }
}
