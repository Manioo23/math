class Perceptron {
    weights = [];

    radius = 0;
    pos = {
        x: 0, 
        y: 0
    }
    
    constructor(_x = null, _y = null, _radius = null, _lr = null) {
        this.pos.x = _x | randomX();
        this.pos.y = _y | randomY();
        this.radius = _radius | d3.randomUniform(10, 800)();
        this.learning_rate = _lr | 0.001;
    }

    train = (inputs) => {
        /** Learning */
        inputs.forEach(element => {
            let x = element.x,
                y = element.y,
                isInCircle = element.isInCircle;
            
            let predict = activation(x, y);
            let error = predict - isInCircle;

            this.radius += error * _lr;
            this.pos.x -= error * _lr;
            this.pos.y -= error * _lr;



        });

    }

    activation = (x, y) => {
        /** Activation Function */
        let left = (x - this.pos.x) ** 2 + (y - this.pos.y) ** 2,
            right = this.radius ** 2;
        return left <= right ? 1 : 0;
    }

<<<<<<< HEAD
    move = (newX, newY) => {
        d3  .select('.circle')
            .transition()
            .attr('cx', newX)
            .attr('cy', newY)
            .duration(1000);
=======
    move = () => {
       /** Moving Circle DOM Element */
       
>>>>>>> 90fc06751cde70c49c5791755c52981b75d06130
    }
}