
var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(30);

// The Ethereal Space House
background(0, 0, 50);

// space
for (var starX = -1; starX < width; starX += random(0, 1)) {
    for (var starY = -1; starY < height; starY += random(0, 100)) {
        stroke(255, 255, 255);
        point(starX, starY);
    }
}

// cloud "ground"
noStroke();
for (var cloudX = 0; cloudX < 401; cloudX += 50) {
    var cloudXOffset = cloudX - 10;
    for (var cloudY = 350; cloudY < 425; cloudY += 25) {
        var cloudYOffset = cloudY - 5;
        if (cloudY % 2) {
            fill(200, 0, 0, 50);
            ellipse(cloudXOffset, cloudYOffset, 75, 55);
            fill(200, 0, 0, 50);
            ellipse(cloudXOffset, cloudYOffset, 65, 45);
            fill(200, 0, 0, 50);
            ellipse(cloudXOffset, cloudYOffset, 55, 35);
            fill(200, 0, 0, 75);
            ellipse(cloudXOffset, cloudYOffset, 45, 25);
        } else {
            fill(0, 0, 200, 50);
            ellipse(cloudX, cloudY, 90, 70);
            fill(0, 0, 200, 50);
            ellipse(cloudX, cloudY, 80, 60);
            fill(0, 0, 200, 50);
            ellipse(cloudX, cloudY, 70, 50);
            fill(0, 0, 200, 75);
            ellipse(cloudX, cloudY, 60, 40);
        }
    }
}

// brickwork
strokeWeight(1.5);
stroke(120, 120, 120, 125);
fill(105, 105, 105, 125);
var aBrick = 12.5;
for (var brickX = 50; brickX < 350; brickX += 25) {
    for (var brickY = 150; brickY < 350; brickY += 13) {
        if (brickY % 2) {
        if (brickX < 325) {
            rect(brickX + aBrick, brickY, aBrick * 2, aBrick);
        }
        } else {
            rect(brickX, brickY, aBrick * 2, aBrick);
        }
    }
}
for (var brickHalf = 163; brickHalf < 350; brickHalf += 26) {
    rect(50, brickHalf, aBrick, aBrick);
    rect(337.5, brickHalf, aBrick - 0.5, aBrick);
}

// roof
rectMode(CENTER);
strokeWeight(1.5);
stroke(50, 50, 50, 150);
fill(150, 160, 160, 150);
for (var shakeX = 50; shakeX < 351; shakeX += 12) {
    for (var shakeY = 140; shakeY > 30; shakeY -= 24) {
        pushMatrix();
            rotate(random(-0.0025, 0.001));
            rect(shakeX, shakeY, 12, 25);
        popMatrix();
    }
}
for (var trimSides = 140; trimSides > 30; trimSides -= 24) {
    pushMatrix();
        rotate(4);
        rect(50, trimSides, 12, 25);
    popMatrix();
    pushMatrix();
        rotate(-3.5);
        rect(350, trimSides + 25, 12, 25);
    popMatrix();
}
for (var trimPeak = 50; trimPeak < 351; trimPeak += 25) {
    rect(trimPeak, 30, 25, 12);
}

// rect windows
rectMode(CORNER);
for (var winL = 76; winL < 175; winL += 54) {
    for (var winR = 238; winR < 325; winR += 54) {
        var winLMatte = winL - 2;
        var winRMatte = winR - 2;
        fill(0, 0, 50);
        rect(winLMatte, 180, 36, 52);
        rect(winRMatte, 180, 36, 52);
        rect(winLMatte, 280, 36, 52);
        rect(winRMatte, 280, 36, 52);
        strokeWeight(2);
        stroke(40, 40, 40, 125);
        fill(90, 140, 150, 125);
        // rect windows lvl 2
        rect(winL, 182, 32, 48);
        rect(winR, 182, 32, 48);
        line(winL, 189, winL + 31, 189);
        line(winR, 189, winR + 31, 189);
        line(winL, 223, winL + 31, 223);
        line(winR, 223, winR + 31, 223);
        line(winL + 7, 182, winL + 7, 229);
        line(winR + 7, 182, winR + 7, 229);
        line(winL + 25, 182, winL + 25, 229);
        line(winR + 25, 182, winR + 25, 229);
        // rect windows lvl 1
        rect(winL, 282, 32, 48);
        rect(winR, 282, 32, 48);
        line(winL, 289, winL + 31, 289);
        line(winR, 289, winR + 31, 289);
        line(winL, 323, winL + 31, 323);
        line(winR, 323, winR + 31, 323);
        line(winL + 7, 282, winL + 7, 329);
        line(winR + 7, 282, winR + 7, 329);
        line(winL + 25, 282, winL + 25, 329);
        line(winR + 25, 282, winR + 25, 329);
    }
}

// arc windows
var arcSize = 30;
for (var arcWin = 200; arcWin < 269; arcWin += 68) {
    stroke(80, 80, 80, 125);
    fill(0, 0, 50);
    ellipse(200, arcWin, 40, 40);
    // arc windows matte bkgrd
    fill(150, 160, 160, 50);
    ellipse(200, arcWin, 40, 40);
    // arc windows matte bkgrd end
    fill(90, 140, 150, 125);
    arc(200, arcWin, arcSize, arcSize, 5, 40);
    arc(200, arcWin, arcSize, arcSize, 50, 85);
    arc(200, arcWin, arcSize, arcSize, 95, 130);
    arc(200, arcWin, arcSize, arcSize, 140, 175);
    arc(200, arcWin, arcSize, arcSize, 185, 220);
    arc(200, arcWin, arcSize, arcSize, 230, 265);
    arc(200, arcWin, arcSize, arcSize, 275, 310);
    arc(200, arcWin, arcSize, arcSize, 320, 355);
}

// door assembly
rectMode(CENTER);
stroke(80, 80, 80, 125);
// door matte
fill(0, 0, 50);
rect(200, 314, 60, 88);
// door frame
fill(150, 160, 160, 60);
rect(200, 314, 56, 84);
// door
fill(166, 0, 0, 125);
rect(200, 317, 40, 76);
// doorknob
stroke(225, 225, 225, 225);
strokeWeight(8);
point(212, 324);

// foundation & steps
rectMode(CENTER);
noStroke();
fill(175, 175, 175, 175);
rect(200, 370, 297, 22);
strokeWeight(1);
stroke(80, 80, 80, 125);
fill(200, 200, 200, 175);
rect(200, 368, 50, 24);
rect(200, 362, 48, 12);

// cloud grass
noStroke();
for (var cloudGrassX = 0; cloudGrassX < 425; cloudGrassX += 30) {
    for (var cloudYardY = 395; cloudYardY < 425; cloudYardY += 25) {
        fill(200, 200, 200, 50);
        ellipse(cloudGrassX, cloudYardY, 30, 25);
        fill(175, 175, 175, 50);
        ellipse(cloudGrassX, cloudYardY, 25, 20);
        fill(150, 150, 150, 50);
        ellipse(cloudGrassX, cloudYardY, 20, 15);
        fill(100, 100, 100, 50);
        ellipse(cloudGrassX, cloudYardY, 15, 10);
        fill(200, 200, 200, 50);
        ellipse(cloudGrassX + 10, cloudYardY - 5, 30, 25);
        fill(175, 175, 175, 50);
        ellipse(cloudGrassX + 10, cloudYardY - 5, 25, 20);
        fill(150, 150, 150, 50);
        ellipse(cloudGrassX + 10, cloudYardY - 5, 20, 15);
        fill(100, 100, 100, 50);
        ellipse(cloudGrassX + 10, cloudYardY - 5, 15, 10);
    }
}

// lightning trunks
for (var boltX = 30; boltX < 300; boltX += 80) {
    var boltY = 320;
    stroke(255, 255, 255, 225);
    fill(250, 250, 10);
    beginShape();
    vertex(boltX + 40, boltY + 20);
    vertex(boltX + 50, boltY + 48);
    vertex(boltX + 42, boltY + 48);
    vertex(boltX + 44, boltY + 74);
    vertex(boltX + 36, boltY + 42);
    vertex(boltX + 44, boltY + 42);
    endShape(CLOSE);
    beginShape();
    vertex(boltX + 60, boltY + 30);
    vertex(boltX + 58, boltY + 56);
    vertex(boltX + 52, boltY + 54);
    vertex(boltX + 46, boltY + 84);
    vertex(boltX + 48, boltY + 48);
    vertex(boltX + 52, boltY + 50);
    endShape(CLOSE);
}

// cloud bushes
noStroke();
for (var bushCrownX = 75; bushCrownX < 375; bushCrownX += 80) {
    var bushCrownXOffset = bushCrownX + 15;
    var bushCrownYOffset = 345;
    // left crown
    fill(0, 200, 200, 50);
    ellipse(bushCrownX, bushCrownYOffset, 50, 25);
    fill(0, 175, 175, 50);
    ellipse(bushCrownX, bushCrownYOffset, 45, 20);
    fill(0, 150, 150, 50);
    ellipse(bushCrownX, bushCrownYOffset, 40, 15);
    fill(0, 100, 100, 150);
    ellipse(bushCrownX, bushCrownYOffset, 35, 10);
    // right crown
    fill(0, 250, 200, 50);
    ellipse(bushCrownXOffset, bushCrownYOffset - 5, 40, 25);
    fill(0, 225, 175, 50);
    ellipse(bushCrownXOffset, bushCrownYOffset - 5, 35, 20);
    fill(0, 200, 150, 50);
    ellipse(bushCrownXOffset, bushCrownYOffset - 5, 30, 15);
    fill(0, 150, 100, 150);
    ellipse(bushCrownXOffset, bushCrownYOffset - 5, 25, 10);
}

}};