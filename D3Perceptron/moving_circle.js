console.log(new_center);
	

svg	.append('g')
	.append('circle')
	.attr('cx', old_center.x)
	.attr('cy', old_center.y)
	.attr('r', radius)
	.attr('class', 'circle');

let my_circle = d3.select('.circle');

<<<<<<< HEAD
	


d3  .select('.circle')
=======

my_circle
>>>>>>> 04918c1ded3f07a99c9f65ee7c56c7fad070e537
	.transition()
	.attr('cx', new_center.x)
	.attr('cy', new_center.y)
	.attr('r', new_radius)
	.duration(10000);
<<<<<<< HEAD

d3	.selectAll('.data_points')
	.attr('fill', d => { 
		var shit = ( (d.attr('cx') - d3.select('.circle').attr('cx'))**2 + (d.attr('cy') - d3.select('.circle').attr('cy'))**2 <= d3.select('.circle').attr('r')**2);
		console.log(shit);
		return shit ? 'green' : 'red';
	 } );
=======

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
>>>>>>> 04918c1ded3f07a99c9f65ee7c56c7fad070e537
