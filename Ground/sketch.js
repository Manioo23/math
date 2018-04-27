const MAP_SIZE = 800;
let TILE_SIZE,
	zoomSize = MAP_SIZE;
	i = 0;

let tiles = [];

function setup() {
	//Seting up canvas
	createCanvas(800, 800);
	frameRate(100);
	background(200);
	TILE_SIZE = width / MAP_SIZE;
	tiles[i] = [];
}

function draw() {
	//Initializing MAP
	
	for(let j = 0; j < MAP_SIZE; j++) {
		tiles[i][j] = new Tile(i* TILE_SIZE, j* TILE_SIZE, noise(i/(MAP_SIZE * 2 / 10 ), j/(MAP_SIZE * 2 / 10 )));
	}
	if(i < MAP_SIZE - 1) {
		i++;
		tiles[i] = [];
	}
}

function mouseClicked() {

}

function mouseWheel(event) {
	
}

function keyTyped() {
	if(key === 's') {
		let arr = [];
		tiles.forEach(tilesJ => {
			tilesJ.forEach(tile => {
				arr.push({s: tile.x, y: tile.y, typ: tile.structure})
			})
		});
		saveJSON(arr, 'Tiles.json')
	}
}
