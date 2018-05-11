for(let i = 0; i < DATA_COUNT; i++) {
    data.push(new Point(randomX(), randomY()))
}

svg .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dataPoints')
    .attr('cx', d => { return d.x })
    .attr('cy', d => { return d.y })
	.attr('r', 5)
    .style('fill', d => {return d.isGuessed ? 'green' : 'red'})
    .style('stroke', d => {return d.isInCircle ? 'white' : 'grey'});

/** I must use ther function() {...} syntax
 * because I need a reference to this to get mouse atributes
 */
svg .on('click', function() {
        /** Push data to data array
         * d3.mouse(event) returns a mouse attributes
         */
        data.push(new Point(d3.mouse(this)[0], d3.mouse(this)[1]));   

        /** For new circle, go through the update process */
        svg .selectAll("circle")  
            .data(data)
            .enter()
            .append('circle')
            .attr('class', 'dataPoints')
            .attr('cx', d => { return d.x })
            .attr('cy', d => { return d.y })
            .attr('r', 5)
            .style('fill', d => {return d.isGuessed ? 'green' : 'red'})
            .style('stroke', d => {return d.isInCircle ? 'white' : 'grey'});
      })
