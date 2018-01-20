function makePair(baseTiles) {
    return baseTiles.concat(baseTiles.slice());
}

function getRandomTile(tilePairs) {
    let randomIndice = Math.floor(Math.random()*tilePairs.length);
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
        addListener(div);
    document.querySelector('.board').appendChild(div);
}

function flipTile(tile) {
    tile.style.color = '#FFF';
}

function unflipTile(tile) {
    tile.style.color = "#283593";
}

function unflipTiles() {
    document.querySelectorAll('.board__tile').forEach(function(tile){
        unflipTile(tile);
    });
}

function addListener(tile) {

    tile.addEventListener('click', function() {

        this.style.color = '#FFF';
        flipTile(this);
        
        if(previouslyFlipped !== null) {
            const previouslyFlippedText = previouslyFlipped.innerHTML;
            const currentTileText = this.innerHTML;
            if(previouslyFlippedText === currentTileText) {}
            else if(previouslyFlippedText !== currentTileText) {
                window.setTimeout(function() {
                    unflipTiles();
                },500);
            }
            previouslyFlipped = null;
            
        }
        else 
            previouslyFlipped = tile;
    });

}

function initGame(baseTiles) {
    layTiles(makePair(baseTiles));
}

const board = document.querySelector('.board');
let pairFlipCount = 0;
let previouslyFlipped = null;

let baseTiles = [
    'Hello World',
    'Python',
    'Ruby On Rails'
];


initGame(baseTiles);




// document.querySelector('.board__tile').addEventListener('click', (event) => {
//     alert("WHAT DA HECK?");
//     alert(event);
//     // if(event.target.className === 'board__tile' 
//     //    || event.target.tagName === 'H4') {
      
//     //     event.target.style.color = '#FFF';
//     //     pairFlipCount++;    

//     // }

// });



// let pairTiles = makePair(textBaseTiles);

// console.log(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// getRandomTile(pairTiles);
// console.log(pairTiles);