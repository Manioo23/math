class Net {

    constructor(_sizes, _activations) {
        if (typeof(_activations) == "string") {
            _activations = Array(_sizes.length).fill(_activations);
        }
        if (_sizes.length != _activations.length) {
            throw new Error("lengths don't match!");
        } else {
            this.numLayers = _sizes.length;
            this.sizes = _sizes;
            this.activations = _activations;
            this.createNeurons();
        }
    }

    createNeurons() {
        let neurons = Array(this.numLayers);

        // Initialize inputs separately
        let layerSize = this.sizes[0]
        let actFun = this.activations[0]
        neurons[0] = Array(layerSize);
        for(let j = 0; j < layerSize; j++) {
            neurons[0][j] = new Neuron(Activation[actFun], 1, ones)
        }

        // Initialize all the other layers in second place.
        // Counting starts at 1 - first layer.
        for (let i = 1; i < this.numLayers; i++) {
            layerSize = this.sizes[i]
            let previousLayerSize = this.sizes[i - 1]
            actFun = this.activations[i]
            neurons[i] = Array(layerSize);
            for(let j = 0; j < layerSize; j++) {
                neurons[i][j] = new Neuron(Activation[actFun], previousLayerSize, Math.random);
            }
        }

        this.neurons = neurons;
    }

    feedForward(_input) {
        let a = _input;
        for (let i = 0; i < this.numLayers; i++) {
            let layerSize = this.sizes[i];
            let b = Array(layerSize);
            for (let j = 0; j < layerSize; j++) {
                b[j] = this.neurons[i][j].activate(a);
            }
            a = b;
        }

        return(a);
    }

}