let data = [];
let interval;
let avgX, avgY;
let a, b;

function setup() {
	createCanvas(800, 800);
	frameRate(30);
	background(250);
	avgX = 0; 
	avgY = 0;
	interval = 50;
	for(let i = 1; i <= interval; i++) {
		line(0, height/interval * i, 3, height/interval * i);
		line(width/interval * i, height, width/interval * i, height - 3);
	}
}

function draw() {
	
}

function mouseClicked() {
	//Maping mouse axis from range of window size to range 0 to 100
	let _x = map(mouseX, 0, width, 0, 100);
	let _y = map(mouseY, 0, height, 100, 0);
	data.push(createVector(_x, _y));
	show(data[data.length - 1]);
	calcLine();
}

function keyTyped() {
	
}

/**
 * Shows a point at given position on canvas.
 * @param _vec Position vector of point to show
 */
function show(_vec) {
	let _x = map(_vec.x, 100, 0, width, 0);
	let _y = map(_vec.y, 0, 100, height, 0);
	stroke(0);
	fill(100);
	ellipse(_x, _y, 7, 7);
}
/**
 * Calculate average of y axis and x axis
 * 
 */
function calcLine() {
	let sumX = 0; 
	let sumY = 0;
	let sumDelta = 0;
	let sumDeltaX2 = 0;
	let x1 = 0, 
		y1, 
		x2 = 100, 
		y2;
		
	for(let i = 0; i < data.length; i++) {
		sumX += data[i].x;
		sumY += data[i].y;
	}

	avgX = sumX / data.length;
	avgY = sumY / data.length;

	data.forEach(vec => {
		sumDelta += (vec.x - avgX) * (vec.y - avgY);
		sumDeltaX2 += pow(vec.x - avgX, 2);
	});
	

	a = sumDelta / sumDeltaX2;
	b = avgY - (a * avgX);
	background(250);
	for (let i = 0; i < data.length; i++) {
		show(data[i]);
	}
	for(let i = 1; i <= interval; i++) {
		line(0, height/interval * i, 3, height/interval * i);
		line(width/interval * i, height, width/interval * i, height - 3);
	}
	
	y1 = (a * x1) + b;
	y2 = (a * x2) + b;

	x1 = map(x1, 0, 100, 0, width);
	x2 = map(x2, 0, 100, 0, width);
	y1 = map(y1, 0, 100, height, 0);
	y2 = map(y2, 0, 100, height, 0);

	stroke(250, 50, 60);
	strokeWeight(3);
	line(x1, y1, x2, y2);
	strokeWeight(1);
	stroke(0);
}