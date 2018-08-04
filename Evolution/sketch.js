const POPULATION = 500;

let bl;
let foods = [],
	blops = [];

function setup() {
	//Seting up canvas
	createCanvas(1000, 1000);
	frameRate(30);
	background(234, 232, 227);

	/** Initialize Food */
	for(let i = 0; i < 50; i ++) {
		foods[i] = new Food();
	}

	/** Intialize Blops */
	for(let i = 0; i < 20; i ++) {
		blops[i] = new Blop();
		blops[i].show();
	}
}

function draw() {
	background(234, 232, 227);

	foods.forEach(food => {
		food.show();
	});
	
	blops.forEach((blop, index) => {
		if(blop.update()) {
			// let minInd;
			// let minLife
			

			// 
			// blops[index] = new Blop(blops[minInd]);
			foods[int(random(foods.length))] = new Meat(blops[index].pos.x, blops[index].pos.y);
			delete blops[index];
		}
		blop.show();
	})
	let r = int(random(blops.length));
	if(!blops[r]) {
		let minInd;
		let minLife;
		
		blops.forEach((bl, i) => {
			if(minLife < bl.lifeTime) {
				minInd = i;
				minLife = bl.lifeTime;
			}
		})

		blops[r] = new Blop(blops[minInd]);
	}
}