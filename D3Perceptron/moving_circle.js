console.log(new_center);
	

svg	.append('g')
	.append('circle')
	.attr('cx', old_center.x)
	.attr('cy', old_center.y)
	.attr('r', radius)
	.attr('class', 'circle');


d3	.select('.circle')
	.transition()
	.attr('cx', new_center.x)
	.attr('cy', new_center.y)
	.attr('r', new_radius)
	.duration(1000);

	