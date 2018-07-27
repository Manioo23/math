
class Blop {
	constructor(parent = null) {
		this.pos = {
			x: parent ? parent.pos.x + random(20) - 10 : random(width),
			y: parent ? parent.pos.y + random(20) - 10 : random(height)
		}
		this.acc = {
			x: 0,
			y: 0
		}
		this.vel = {
			x: parent ? -parent.vel.x : 0,
			y: parent ? -parent.vel.y : 0
		}
		this.aim = null;		
		
		this.mass = parent ? parent.mass + random(20) - 10 : random() * 100;
		this.speed = map(this.mass, 0, 100, 0.8, 0.5);
		this.drag = map(this.mass, 0, 100, 0.90, 0.75);
		this.viewRadius = parent ? parent.viewRadius + random(20) - 10 : random(100, 200);
		
		this.r = map(this.mass, 0, 100, 5, 15);
		this.maxHealth = map(this.mass, 0, 100, 1, 1.8);
		this.health = this.maxHealth;
		this.lifeTime = parent ? parent.lifeTime * 0.3 : 0;
		
		this.DNA = {
			kill: parent ? parent.DNA.kill + random(0.2) - 0.1 : random(),
			eat: parent ? parent.DNA.eat + random(0.2) - 0.1 : random(),
			family: parent ? parent.DNA.family + random(0.1) - 0.05 : random()
		}

		this.col = {
			r: map(this.DNA.kill, 0, 1, 100, 255), 
			g: map(this.DNA.eat, 0, 1, 100, 255),
			b: map(this.DNA.family, 0, 1, 100, 255)
		}
	}
	applyForce(x = 0, y = 0) {
		this.acc.x += x;
		this.acc.y += y;
	}
	update() {
		this.decide();

		if(this.aim) {
			if(this.aim.type === 'FOOD' && foods[this.aimIndex]) {
				if(this.aim.pos == foods[this.aimIndex].pos) {
					
					let vec = createVector(-this.pos.x + this.aim.pos.x, -this.pos.y + this.aim.pos.y);
					vec.normalize();

					this.applyForce(vec.x * this.speed, vec.y * this.speed);
				} else {
					this.aimIndex = null
					this.aim = null;
				}
			} else if(this.aim.type === 'ENEMY' && blops[this.aimIndex]) {
				let vec = createVector(-this.pos.x + blops[this.aimIndex].pos.x, -this.pos.y + blops[this.aimIndex].pos.y);
				vec.normalize();

				this.applyForce(vec.x * this.speed, vec.y * this.speed);
			} else {
				this.aimIndex = null
				this.aim = null;
			}
			
		}
		//Chechk if aim did not change position 
		if(this.aim  && this.aim.pos != foods[this.aimIndex].pos) {
			
		} 
		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;

	  	this.pos.x += this.vel.x;
	   	this.pos.y += this.vel.y;

		this.vel.x *= this.drag;
		this.vel.y *= this.drag;
		   
		this.acc.x = 0;
		this.acc.y = 0;

		this.health -= map(this.mass, 0, 100, 0.001, 0.005);
		this.lifeTime += 0.001;
		
		if(this.health <= 0) {
			return 1;
		}
		return 0;
	}
	show() {
		strokeWeight(2);
		stroke(this.col.r, this.col.g, this.col.b);
		fill(255);
		ellipse(this.pos.x, this.pos.y, this.r, this.r);
		strokeWeight(1);
		noFill();
		stroke('rgba(0, 0, 0, 1)');
		ellipse(this.pos.x, this.pos.y, this.viewRadius, this.viewRadius)

		strokeWeight(5);
		stroke(0);
		line(this.pos.x - 13, this.pos.y - 13, this.pos.x + 13, this.pos.y - 13);
		strokeWeight(3);
		stroke(150, 250, 150);
		line(this.pos.x - 13, this.pos.y - 13, this.pos.x + map(this.health, 0, this.maxHealth, -13, 13), this.pos.y - 13);
		strokeWeight(1);
	}
	findFood() {
		
		let min = null;
		let foodIndex = null;
		foods.forEach((food, index) => {
			let d = dist(this.pos.x, this.pos.y, food.pos.x, food.pos.y);
			
			//Check if colide with food
			if(d <= this.r/2) {
				this.health = this.health >= this.maxHealth - food.nut ? this.maxHealth : this.health + food.nut;
				foods[index] = new Food();				
			}
			
			//Find nearest food
			if((!min || d < min) && d <= this.viewRadius) {
				foodIndex = index;

				min = d;
			}
		});
		min = map(min, 0, this.viewRadius, 0, 1);
		if(foodIndex !== null && foods[foodIndex].nut > 0.3) {
			min -= 0.2;
		}
		return {foodIndex, min};
	}
	findEnemy() {
		let min = null;
		let enemyIndex = null;
		blops.forEach((blop, index) => {
			let vec = createVector(-this.pos.x + blop.pos.x, -this.pos.y + blop.pos.y);
			let d = vec.mag();
			if(d) {
				
				//Check if colide with enemy
				if(d <= (this.r/2) + (blop.r/2)) {
					this.health -= 0.3 
					blops[index].health -= 0.3;

					vec.normalize();

					this.applyForce(vec.x * -5, vec.y * -5);
					blops[index].applyForce(vec.x * 5, vec.y * 5);
				}
				
				//Find nearest enemy
				if((!min || d < min) && d <= this.viewRadius) {

					enemyIndex = index;
					min = d;
				}
			}
		});

		return {enemyIndex, min};
	}
	decide() {
		let enemyObj = this.findEnemy();
		let foodObj = this.findFood();

		if(foodObj.foodIndex === null && enemyObj.enemyIndex !== null) {
			this.aim = blops[enemyObj.enemyIndex];
			this.aimIndex = enemyObj.enemyIndex;
			this.aim.type = 'ENEMY';	
		} else if(enemyObj.enemyIndex === null && foodObj.foodIndex !== null) {
			
			this.aim = foods[foodObj.foodIndex];
			this.aimIndex = foodObj.foodIndex;
			this.aim.type = 'FOOD';
		} else if(enemyObj.enemyIndex !== null && foodObj.foodIndex !== null){
			if(enemyObj.min - this.DNA.kill < foodObj.min - this.DNA.eat ) {
				this.aim = blops[enemyObj.enemyIndex];
				this.aimIndex = enemyObj.enemyIndex;
				this.aim.type = 'ENEMY';
				//console.log('enemy');
				
			} else {
				
				this.aim = foods[foodObj.foodIndex];
				this.aimIndex = foodObj.foodIndex;
				this.aim.type = 'FOOD';
	
				//console.log('food');
			}
		}
	}
}