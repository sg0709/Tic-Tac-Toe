// sarthak goyal
// iit ism
export default class updateView{
    updateBoard(game){
        const ifWin = game.finish; 
        for(let i=0;i<game.board.length;i++)
        {
            let tile = document.querySelector(`.board-tile[data-index='${i}']`);
            tile.innerHTML=game.board[i];
            if(ifWin && ifWin.includes(i))
            {
                tile.classList.add("win");
            }
            else{
                tile.classList.remove("win");
            }
        }
    }
}