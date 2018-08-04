/** Initial drawing circle to the screen */
svg .append('circle')
	.attr('cx', oldCenter.x)
	.attr('cy', oldCenter.y)
	.attr('r', oldRadius)
	.attr('class', 'circle');

let myCircle = d3.select('.circle');

/** 
 * Checking for data points inside the circle, 
 * Is called very often to make an illusion
 * of real time updating.
 */
let checkData = () => {
	/**
	 * Getting the svg class circle attributes. 
	 */
	let tempX = myCircle.attr('cx'), 
		tempY = myCircle.attr('cy'),
		tempR = myCircle.attr('r'),
		tempGuess = null;

	d3	.selectAll('.dataPoints')
		.style('fill', d => {
			tempGuess = (d.x - tempX) ** 2 + (d.y - tempY) ** 2 <= tempR ** 2;
			return tempGuess == d.isInCircle ? 'green' : 'red';
		})
}

setInterval(() => checkData() , 1);
