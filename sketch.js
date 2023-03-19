let wavey;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(4);
    
  }
  function draw() {
    background(0);
    momo();
    fill('#f1f1f1');
    rectMode(CENTER);
    noStroke();
    let menge = int(1 + mouseX * 0.4);
    let abstand = width / menge; 
    translate(abstand/2, abstand/2);
    for (let x = 0; x < menge; x++) { 
      for (let y = 0; y < menge; y++) { 
        let posX = x*abstand;
        let posY = y*abstand;
        let w = abstand;
        let h = abstand;
        if (random(1) < 0.5) {
          ellipse(posX, posY, w, h);
        } else {
          if (random(1) < 0.5) { 
            let mag = w/2;
            let x1 = 0;
            let y1 = -mag;
            let x2 = mag;
            let y2 = mag;
            let x3 = -mag;
            let y3 = mag;
            push();
            translate(posX, posY);
            triangle(x1, y1, x2, y2, x3, y3);
            pop();
          } else {
            push();
            translate(posX, posY);
            rect(0,0, w, h);
            pop();
          }
        }
      }
    }
  }