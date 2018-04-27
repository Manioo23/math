


let old_center = new Point(randomX(), randomY());


svg.append('g')
	.append('circle')
	.attr('cx', old_center[0])
	.attr('cy', old_center[1])
	.attr('r', radius)
	.style('stroke', 'red');



