const DATA_COUNT = 100;

let randomX = d3.randomUniform(0, width),
    randomY = d3.randomUniform(height, 0),
    data = [];

class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}

