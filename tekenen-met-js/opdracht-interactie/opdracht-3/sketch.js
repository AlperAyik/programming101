let ball = {
    x: 60,
    y: 50,
    vx: 3.5,
    vy: 2.4,
    diameter: 36
}

let paddle = {
    width: 80,
    height: 12
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

    let distance = dist(ball.x, ball.y, mouseX, height - paddle.height / 2);

    bounceBall(ball, paddle, distance);

    if(ball.y >= height - 20) {
        gameOver();
    }

    // bounceBall();

    // circle
    let radius = ball.diameter / 2;
    //   rect
    let halfwidth = paddle.width / 2;
    let xRect = constrain(mouseX, halfwidth, width - halfwidth);

    if (ball.x + radius > width || ball.x - radius < 0) ball.vx = -ball.vx
    if (ball.y + radius > height || ball.y - radius < 0) ball.vy = -ball.vy

    circle(ball.x, ball.y, ball.diameter);

    fill(100, 100, 255);
    rect(xRect - halfwidth, height - 30, paddle.width, paddle.height, 4);
}

function bounceBall(ball, paddle, distance) {
    if (distance < ball.diameter + paddle.height / 2) {
        ball.vy = -ball.vy;
    }
}

function gameOver() {
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
    noLoop();

    ResetGame();
}

function ResetGame() {
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text("Klik om opnieuw te spelen", width / 2, height / 2 + 40);

    ball.x = 60;
    ball.y = 50;
    ball.vx = 3.5;
    ball.vy = 2.4;
}
function mousePressed() {
    draw()
    loop()
}