console.log(newCenter);
	
svg	.append('g')
	.append('circle')
	.attr('cx', oldCenter.x)
	.attr('cy', oldCenter.y)
	.attr('r', radius)
	.attr('class', 'circle');

let myCircle = d3.select('.circle');

myCircle.transition()
	.attr('cx', newCenter.x)
	.attr('cy', newCenter.y)
	.attr('r', newRadius)
	.duration(10000);

let checkData = () => {
	let tempX = myCircle.attr('cx'),
		tempY = myCircle.attr('cy'),
		tempR = myCircle.attr('r'),
		tempGuess = null;

	d3	.selectAll('.dataPoints')
		.style('fill', d => {
			tempGuess = (d.x - tempX) ** 2 + (d.y - tempY) ** 2 <= tempR ** 2;
			return tempGuess ? 'green' : 'red';
		})
}

setInterval(() => checkData() , 5);
