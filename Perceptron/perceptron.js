class Perceptron {
	constructor() {
		this.circle = {
		   radius: random(width),
		   x: random(width),
		   y: random(height),
		   show: function() {
			   strokeWeight(1);
			   noFill();
			   stroke(20);
			   ellipse(this.x, this.y, this.radius * 2, this.radius * 2);
		   }
	   }
	   this.learningRate = 0.0001;
	}

	show() {
		this.circle.show();
	}
	train(data) {
		let guess;
		let error;

		//Calculating error for every dataPoint
		data.forEach(dataPoint => {
			guess = this.makeGuess(dataPoint.x, dataPoint.y);
			error = dataPoint.isInCircrle - guess;

			//Visualising
			dataPoint.isGuessed = error;

			/**FIXME:
			 * Wrong formula for corretcting the x and y of Perceptrons circle
			 */
			this.circle.radius += error * this.learningRate;
			this.circle.x += error * this.learningRate * dataPoint.x;
			this.circle.y += error * this.learningRate * dataPoint.y;
			
		});
	}

	makeGuess(x, y) {
		return dist(this.circle.x, this.circle.y, x, y) <= this.circle.radius ? 1 : -1;
	}
}