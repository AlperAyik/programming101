let x = 0;
let y = 0;

let x2 = 150;
let y2 = 150;


function setup() {
  createCanvas(300, 300);
  noStroke();
  fill(80, 140, 255);
}

function draw() {
  background(240);
  // ← elk frame opnieuw 0
  x = x + 5;
  y = y + 5;

  x2 = x2 + 5
  y2 = y2 += 5
  
  if(x > width + 15) {
    x = 0;
  }

  if(y > height + 15) {
    y = 0;
  }

  fill(0, x, y)
  square(x, y, 30)

//   for(let i = 0; i < 5; i++) {
//     for(let j = 0; j < 5; j++) {
//         let even = i % 2 === 0;

//         if(even) {
//             square(x + j, y * j, 30)
//         } else {
//             circle(x + i, y * i + 3, 30);
//         }
        
//     }
//   }
}