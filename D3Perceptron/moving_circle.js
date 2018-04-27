console.log(new_center);
	

svg	.append('g')
	.append('circle')
	.attr('cx', old_center.x)
	.attr('cy', old_center.y)
	.attr('r', radius)
	.attr('class', 'circle');

let my_circle = d3.select('.circle');


my_circle
	.transition()
	.attr('cx', new_center.x)
	.attr('cy', new_center.y)
	.attr('r', new_radius)
	.duration(10000);

let checkData = () => {
	let tempX = my_circle.attr('cx'),
		tempY = my_circle.attr('cy'),
		tempR = my_circle.attr('r'),
		tempGuess = null;

	d3	.selectAll('.dataPoints')
		.style('fill', d => {
			tempGuess = (d.x - tempX) ** 2 + (d.y - tempY) ** 2 <= tempR ** 2;
			return tempGuess ? 'green' : 'red';
		})
}

setInterval(() => checkData() , 5);
