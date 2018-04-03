let data = [],
	learningRateSlider, /** Slider for adjusting learning rate */
	avgX = 0, /** Average X of data */
	avgY = 0, /** Average Y of data */
	a = 1, /** Slope of the line */
	b = 0, /** Intercept */ 
 	learningRate = 0.001;

function setup() {
	createCanvas(800, 800);
	frameRate(30);
	background(10);

	learningRateSlider = createSlider(0, 0.01, 0.001, 0.0001);
	learningRateSlider.position(20, 20);
	learningRateSlider.style('width', '200px')
}
function draw() {
	/** Reading the value of slider */
	learningRate = learningRateSlider.value();

	/** Every frame the line will be fitted */
	if(data.length) {
		calcLine();		
	}
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
	let error = null;

	/** FIXME:
	 * Some thing is incorrect in this formula. 
	 * The line is going towards being completely horizontal.
	 * I don't now yet why and how to fix it. However there is probably 
	 * a problem with error of intercept.
	*/
	data.forEach(dataPoint => {
		guess = a * dataPoint.x + b;
		error = dataPoint.y - guess;
		
		a += a * error * learningRate;
		b += error * learningRate;
	});

	background(10);

	showAllPoints();
	showLine();
}