const DATA_SIZE = 150;

let data = [],
	brain, 
	debug = true;

let circle = {
	radius: 175,
	x: 200,
	y: 300,
	show: function() {
		strokeWeight(1);
		noFill();
		stroke(255);
		ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
	}
}

function Point() {
	this.x = random() * width;
	this.y = random() * height;
	this.isInCircrle = dist(circle.x, circle.y, this.x, this.y) <= circle.radius ? 1 : -1;
	this.isGuessed = null;

	this.show = () => {
		strokeWeight(1);
		/** 
		 * Red fill for ones in desire but not in guessed circle
		 * Green fill for ones guessed correctly
		 */
		!this.isGuessed ? fill(20, 150, 10) : fill(150, 20, 10); 
		this.isInCircrle ? stroke(255) : stroke(0);
		ellipse(this.x, this.y, 7, 7);
	}
}

function setup() {
	//Seting up canvas
	createCanvas(800, 800);
	frameRate(30);
	background(200);

	//Populating the data Array
	for(let i = 0; i < DATA_SIZE; i++) {
		data[i] = new Point();
	}

	//Creating new perceptron
	brain = new Perceptron();
}

function draw() {
	background(150);
	data.forEach(p => p.show());
	circle.show();
	brain.show();
	brain.train(data);
}

function mouseClicked() {

}

function keyTyped() {
	
}
