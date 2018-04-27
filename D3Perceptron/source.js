const DATA_COUNT = 100;

let width = 600,
	height = 600,
	radius = 20;

let randomX = d3.randomUniform(0, width),
    randomY = d3.randomUniform(height, 0),
    data = [];

class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}

var svg = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height);
