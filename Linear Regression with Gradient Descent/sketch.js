let data = [],
	errors = [],
	a = 1, /** Slope of the line */
	b = 0, /** Intercept */ 
	minError = 0, 
	maxError = 0,
 	learningRate = 0.0002;

function setup() {
	createCanvas(800, 800);
	frameRate(30);
	background(10);
}
function draw() {
	/** Every frame the line will be fitted */
	if(data.length) {
		calcLine();		
	}

	
	showErrors();
	
}

function mouseClicked() {
	/** Maping mouse axis from range of window size to range 0 to 100 */
	let _x = map(mouseX, 0, width, 0, 100);
	let _y = map(mouseY, 0, height, 100, 0);

	data.push(createVector(_x, _y));
	addPoint(data[data.length - 1]);
	calcLine();
}

function keyTyped() {
	
}
/** Shows an error chart to the screen */
function showErrors() {
	if(errors.length > width / 5) {
		errors.splice(0, 1);
	}

	let x = width / errors.length;
	let y = 0;

	errors.forEach((errorPoint, index) => {
		y = map(errorPoint, minError, maxError, height, height / 3);
		
		stroke(200, 100, 100);
		point(x * index, y);
	});
	
	y = map(0, minError, maxError, height, height / 3)
	line(0, y, 25, y);

	fill(200, 100, 100);
	noStroke();
	text("Error = 0", 3, y-3);
}

/** Adds and shows a data point at given position on canvas.
 * @param _vec New data point's position vector 
 */
function addPoint(_vec) {
	let _x = map(_vec.x, 100, 0, width, 0);
	let _y = map(_vec.y, 0, 100, height, 0);
	
	stroke(0);
	fill(100);
	ellipse(_x, _y, 7, 7);
}

/** Shows all data points on canvas */
function showAllPoints() {
	strokeWeight(1);
	stroke(255);
	fill(100);

	data.forEach(dataPoint => {
		let x = map(dataPoint.x, 0, 100, 0, width);
		let y = map(dataPoint.y, 0, 100, height, 0);
		
		ellipse(x, y, 5, 5);
	});
}

/** Shows the best fitted line to the screen */
function showLine() {
	let x1 = 0;
	let x2 = 100;

	let y1 = a * x1 + b;
	let y2 = a * x2 + b;

	x1 = map(x1, 0, 100, 0, width);
	x2 = map(x2, 0, 100, 0, width);
	y1 = map(y1, 0, 100, height, 0);
	y2 = map(y2, 0, 100, height, 0);

	strokeWeight(2);
	stroke(200);
	line(x1, y1, x2, y2);
}

/** Calculates the best fitted line based on given points */
function calcLine() {
	let guess = null;
	let errorSum = 0;
	let error = null;

	data.forEach((dataPoint, index) => {
		guess = a * dataPoint.x + b;
		errorSum += dataPoint.y - guess;

		error = errorSum / (index + 1);
		a += dataPoint.x * error * learningRate;
		b += error * learningRate * 100;
	});
	
	minError = minError > error ? error : minError;
	maxError = maxError < error ? error : maxError;
	errors.push(error);

	background(10);

	showAllPoints();
	showLine();
}