const DATA_COUNT = 100;
const margin = 20;

let width = 600,
	height = 600,
	radius = 20;

let randomX = d3.randomUniform(margin, width - margin),
    randomY = d3.randomUniform(height - margin, margin),
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
