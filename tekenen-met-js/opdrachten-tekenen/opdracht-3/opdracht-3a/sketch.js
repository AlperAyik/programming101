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
        let redValue = map(x, 0, aantal - 1, 0, 255)
        
        for (let y = 0; y < aantal; y++) {
            let posY = afstand / 2 + y * afstand;

            fill(redValue, 0, 0)
            circle(posX, posY, afstand)
        }
    }
}