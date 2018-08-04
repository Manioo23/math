const sign = function (x) {
	if(x > 0) {
		return(1);
	} else if (x = 0) {
		return(0);
	} else if (x < 0) {
		return(-1);
	}
}
const sigmoid = function (x) {
	return 1/(1 + Math.exp(-x));
}
const tanh = function (x) {
	return (1 - Math.exp(-2 * x)) / (1 + Math.exp(-2 * x));
}
const linear = function (x) {
	return x;
}

const Activation = {
	sign,
	sigmoid,
	tanh,
	linear
}