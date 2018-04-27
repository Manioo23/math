class Tile {
	constructor(_x, _y, _n){
		this.x = _x;
		this.y = _y;
		this.size = TILE_SIZE;
		this.setWaterPer(_n);
	}
	setWaterPer(value) {
		if(value > 1) {
			console.log('Error: To high water level');
		}
		this.waterPer = value;
		this.structure = value < 0.25 ? 'SNW' : value < 0.35 ? 'ROC' : value < 0.45 ? 'GRS' : value < 0.50 ? 'SND' : 'WTR';
		this.color = 
		this.structure === 'SNW' ?
		{r: 200, g: 200, b: 200} :
		this.structure === 'ROC' ?
		{r: 40, g: 40, b: 10} :
		this.structure === 'SND' ?
		{r: 204, g: 204, b: 50} :
		this.structure === 'GRS' ?
		{r: 0, g: 104, b: 0} :
		this.structure === 'WTR' ?
		{r: 0, g: 0, b: 104} :
		{r: 255, g: 0, b: 102}
		this.show();
	}
	show() {
		noStroke();
		fill(this.color.r, this.color.g, this.color.b);
		rect(this.x, this.y, this.size, this.size);
	}
}

class Water extends Tile {

}

class Ground extends Tile {

}