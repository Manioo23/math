class Neuron {
    /**
     * @param {Function} _actFunct Activation function for this layer
     * @param {Number} _weightCount Number of how many inputs there will be
     * @param {Function} _initCallback Initialization callback for weights
     */
    constructor(_actFunct, _weightCount, _initCallback) {
        this.weights = new Array(_weightCount).fill().map(_initCallback) ;
        this.actFunct = _actFunct;
        this.bias = 0;
    }
    sum() {
        let finalSum = 0;
        this.inputs.forEach((input, index) => {
            finalSum += input * this.weights[index];
        });

        finalSum += this.bias;
        return finalSum;
    }
    activate(_inputs) {
        this.inputs = _inputs;

        return this.actFunct(this.sum());
    }
}