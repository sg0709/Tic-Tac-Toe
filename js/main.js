// sarthak goyal
// iit ism
import Game from "./Game.js"
import updateView from "./updateView.js"
const newGame = document.querySelector("#button");
let tiles = document.querySelectorAll(".board-tile");
newGame.addEventListener("click",() => {
    let game = new Game();
    let update = new updateView();
    game.updatePlayer();
    update.updateBoard(game);
    tiles.forEach(tile => {
        tile.addEventListener("click",() => {
            onTileClick(tile.dataset.index);
        })
    })
    function onTileClick(i)
    {
        game.makemove(i);
        update.updateBoard(game);
    }
})
