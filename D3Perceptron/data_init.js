for(let i = 0; i < DATA_COUNT; i++) {
    data.push(new Point(randomX(), randomY()))
}

svg .selectAll('circle')
    .data(data)
    .enter()
	.append('circle')
	.attr('class', 'data_points')
    .attr('cx', d => { return d.x })
    .attr('cy', d => { return d.y })
	.attr('r', 5)
    .style('fill', d => {return d.isGuessed ? 'green' : 'red'})
    .style('stroke', d => {return d.isInCircle ? 'white' : 'grey'})
