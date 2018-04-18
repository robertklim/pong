let leftscore = 0;
let rightscore = 0;

function setup() {
    createCanvas(600, 400);
    puck = new Puck();
    leftPaddle = new Paddle("left");
    rightPaddle = new Paddle("right");
}

function draw() {
    background(0);
    
    puck.checkPaddleRight(rightPaddle);
    puck.checkPaddleLeft(leftPaddle);

    leftPaddle.show();
    rightPaddle.show();
    leftPaddle.update();
    rightPaddle.update();
    
    puck.update();
    puck.edges();
    puck.show();
    
    fill(255);
    textSize(32);
    text(leftscore, width * 0.25, 40);
    text(rightscore, width * 0.75, 40);
}


function keyReleased() {
    leftPaddle.setMove(key, false);
    rightPaddle.setMove(key, false);
}

function keyPressed() {
    leftPaddle.setMove(key, true);
    rightPaddle.setMove(key, true);
}