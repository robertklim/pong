class Paddle {
    constructor(side) {
        this.y = height/2;
        this.w = 20;
        this.h = 100;
        this.ychange = 0;
        this.steps = 10;
        this.isUp = false;
        this.isDown = false;
        this.upBtn = "P";
        this.downBtn = "L";
        
        if (side === "left") {
            this.x = this.w;
            this.upBtn = "Q";
            this.downBtn = "A";
        } else {
            this.x = width - this.w;
        }
    }
    
    update() {
        if (this.isUp) {
            this.ychange = -this.steps;
        } else if (this.isDown) {
            this.ychange = this.steps;
        } else {
            this.ychange = 0;
        }
        this.y += this.ychange;
        this.y = constrain(this.y, this.h/2, height-this.h/2);
    }

    setMove(k, b) {
        switch (k) {
        case this.upBtn:
            return this.isUp = b;
        case this.downBtn:
            return this.isDown = b;
        default:
            return b;
        }
    }
    
    show() {
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}