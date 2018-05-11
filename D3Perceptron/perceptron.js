class Perceptron {
    constructor(_x = randomX(), _y = randomY(), _radius = d3.randomUniform(10, 800)(), _lr = 0.01) {
        this.weights = [];

        this.radius = 0;
        this.pos = {
            x: 0, 
            y: 0
        }

        this.pos.x = _x;
        this.pos.y = _y;
        this.radius = _radius;
        this.learning_rate = _lr;
    }

    train(inputs){
        /** Learning based on given Array of inputs */
        inputs.forEach(element => {
            let x = element.x,
                y = element.y,
                isInCircle = element.isInCircle;
            
            /** Calculating error */
            let predict = this.activation(x, y);
            let error = predict - isInCircle;

            this.radius -= error * this.learning_rate * 100;
            this.pos.x += error * this.learning_rate * (this.pos.x - element.x);
            this.pos.y += error * this.learning_rate * (this.pos.y - element.y);
        });

        this.move(this.pos.x, this.pos.y);
    }

    activation(x, y){
        /** left and right sides of cricle equation */
        let left = (x - this.pos.x) ** 2 + (y - this.pos.y) ** 2,
            right = this.radius ** 2;
        return left <= right ? 1 : 0;
    }

    move(newX, newY){
        d3  .select('.circle')
            .transition()
            .attr('cx', newX)
            .attr('cy', newY)
            .attr('r', this.radius)
            .duration(1000);

        console.log('working!');
        
    }
}

let perceptronCircle = new Perceptron(oldCenter.x, oldCenter.y, radius);

setInterval(() => perceptronCircle.train(data), 1000);