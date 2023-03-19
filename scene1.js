function momo() {
    wavey = sin(radians(frameCount*12))*windowWidth/2;
fill("yellow");
    ellipse(windowWidth/2 + wavey,height/2,100,100);
}