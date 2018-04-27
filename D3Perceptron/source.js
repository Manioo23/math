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

for(let i = 0; i < DATA_COUNT; i++) {
    data.push(new Point(randomX(), randomY()))
}
svg .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', d => { return d.x })
	.attr('cy', d => { return d.y })
	.attr('r', 5)
    .style('fill', 'white')
