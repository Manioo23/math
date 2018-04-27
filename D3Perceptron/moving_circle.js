let center = [50, 100],
	width = 600,
	height = 600,
	radius = 20;

var svg = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height);


svg.append('g')
	.append('circle')
	.attr('cx', center[0])
	.attr('cy', center[1])
	.attr('r', radius)
	.style('stroke', 'red');



