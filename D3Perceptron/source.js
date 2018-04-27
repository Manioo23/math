const DATA_COUNT = 100;
const margin = 20;

let width = 600,
	height = 600,
	radius = 20;

let randomX = d3.randomUniform(margin, width - margin),
    randomY = d3.randomUniform(height - margin, margin),
    data = [];

let finalCircle = {
    x: randomX(),
    y: randomY(),
    r: 100
}

class Point {
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.isInCircle = (this.x - finalCircle.x) ** 2 + (this.y - finalCircle.y) ** 2 <= finalCircle.r ** 2; 
    }
}

var svg = d3.select('body').append('svg')
	.attr('width', width)
    .attr('height', height);
    
svg .append('circle')
    .attr('cx', finalCircle.x)
    .attr('cy', finalCircle.y)
    .attr('r', finalCircle.r)
    .style('stroke', 'white');