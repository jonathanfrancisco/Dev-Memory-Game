function makePair(baseTiles) {
    return baseTiles.concat(baseTiles.slice());
}

function getRandomTile(tilePairs) {
    let randomIndice = Math.floor(Math.random()*tilePairs.length);
    console.log(tilePairs[randomIndice]+' tile will be now removed');
    return tilePairs.splice(randomIndice, 1);
}

function layTiles(pairTiles) {
    while(pairTiles.length != 0)
        appendTile(getRandomTile(pairTiles));
}

function appendTile(tile) {
    let div = document.createElement('div');
        div.className = 'board__tile';
    let h4 = document.createElement('h4');
        h4.innerHTML = tile;
        div.appendChild(h4);
        div.style.color = '#283593';
    document.querySelector('.board').appendChild(div);
}

let baseTiles = [
    'Hello World',
    'Ruby',
    'Python',
    'Ruby On Rails',
    'Spring',
    'Java'
];

let pairTiles = makePair(baseTiles);
layTiles(pairTiles);


// let pairTiles = makePair(textBaseTiles);

// console.log(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// console.log(pairTiles);