let aantal = 5;
function setup() {
    createCanvas(400, 60);
    noStroke();
    fill(60);
}

function draw() {
    background(220);

    let afstand = width / aantal

    for (i = 0; i < aantal; i++) {
        let x = afstand / 2 + i * afstand;

        circle(x, 30, afstand)
    }
}