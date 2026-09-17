let aantal = 12;

function setup() {
    createCanvas(300, 300);
    noStroke();
}

function draw() {
    background(220);

    // 12 x 12 = 144 cirkels, met een kleurverloop over de kolommen
    let afstand = width / aantal

    for (let x = 0; x < aantal; x++) {
        let posX = afstand / 2 + x * afstand;
        let color = map(x, 0, 3, 0, 180);

        for (let y = 0; y < aantal; y++) {
            let posY = afstand / 2 + y * afstand;

            if (y < 4) {
                fill(color, 0, 0);
            } else if (y < 8) {
                fill(0, color, 0);
            } else {
                fill(0, 0, color);
            }

            circle(posX, posY, afstand)
        }
    }
}