class Food {
    constructor() {
        this.pos = {
            x: random(width),
            y: random(height)
        }

        this.col = {
            r: random(65, 145),
            g: random(170, 250),
            b: random(60, 140)
        }
        this.nut = 0.3
        this.r = 5;
    }
    show() {
        noStroke();
        fill(this.col.r, this.col.g, this.col.b);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}

class Meat {
    constructor(x, y) {
        this.pos = {
            x,
            y
        }

        this.col = {
            r: random(170, 250),
            g: random(60, 140),
            b: random(65, 145)
        }
        this.nut = 0.6
        this.r = 5;
    }
    show() {
        noStroke();
        fill(this.col.r, this.col.g, this.col.b);
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
    }
}