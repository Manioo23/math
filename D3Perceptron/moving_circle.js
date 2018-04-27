console.log(new_center);
	

svg	.append('g')
	.append('circle')
	.attr('cx', old_center.x)
	.attr('cy', old_center.y)
	.attr('r', radius)
	.attr('class', 'circle');


	


d3  .select('.circle')
	.transition()
	.attr('cx', new_center.x)
	.attr('cy', new_center.y)
	.attr('r', new_radius)
	.duration(10000);

d3	.selectAll('.data_points')
	.attr('fill', d => { 
		var shit = ( (d.attr('cx') - d3.select('.circle').attr('cx'))**2 + (d.attr('cy') - d3.select('.circle').attr('cy'))**2 <= d3.select('.circle').attr('r')**2);
		console.log(shit);
		return shit ? 'green' : 'red';
	 } );