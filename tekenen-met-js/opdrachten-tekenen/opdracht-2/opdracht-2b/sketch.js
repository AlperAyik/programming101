let aantal = 30;
function setup() {
    createCanvas(300, 300);
}

function draw() {
    background(220);
    let afstand = width / aantal;

    for(let y = 0; y < aantal; y++) {
        let posY = afstand / 2 + y * afstand;
        for(let x = 0; x < aantal; x++) {
            let posX = afstand / 2 + x * afstand;

            circle(posX, posY, afstand)
        }
    }
}
