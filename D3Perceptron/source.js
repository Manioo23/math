const DATA_COUNT = 100,
	margin = 20;

let width = 600,
	height = 600,
	radius = 20;

let randomX = d3.randomUniform(0, width),
	randomY = d3.randomUniform(height, 0),
	data = [];

let finalCircle = {
	x: randomX(),
	y: randomY(),
	r: 100
}

let oldCenter = { x: randomX(), y: randomY() },
	newCenter = { x: randomX(), y: randomY() },
	oldRadius = radius,
	newRadius = d3.randomUniform(10, 80)();

class Point {
	constructor(_x, _y) {
		this.x = _x;
		this.y = _y;
		this.isInCircle = (this.x - finalCircle.x) ** 2 + (this.y - finalCircle.y) ** 2 <= finalCircle.r ** 2;
		this.isGuessed = (this.x - newCenter.x) ** 2 + (this.y - newCenter.y) ** 2 <= newRadius ** 2;
	}
}

var svg = d3.select('body')
	.append('svg')
	.attr('width', width)
	.attr('height', height);

/** Final circle */
svg.append('circle')
	.attr('cx', finalCircle.x)
	.attr('cy', finalCircle.y)
	.attr('r', finalCircle.r)
	.style('stroke', 'white');