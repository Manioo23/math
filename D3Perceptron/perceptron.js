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

    move = () => {
       /** Moving Circle DOM Element */
    }
}