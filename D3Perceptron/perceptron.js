class Perceptron {
    weights = [];

    radius = 0;
    pos = {
        x: 0, 
        y: 0
    }
    
    constructor() {
        this.pos.x = randomX();
        this.pos.y = randomY();
        this.radius = d3.randomUniform(10, 800)();
    }

    train = (inputs) => {
        /** Learning */
    }

    activation = () => {
        /** Activation Function */
    }

    move = (newX, newY) => {
        d3  .select('.circle')
            .transition()
            .attr('cx', newX)
            .attr('cy', newY)
            .duration(1000);
    }
}