// sarthak goyal
// iit ism
export default class Game{
    constructor(){
        //console.log("constructor");
        this.turn="X";
        this.board=new Array(9).fill(null);
        this.finish = null;
    }
    nextturn()
    {
        if(this.turn == "X")
        {
            this.turn = "O";
        }
        else{
            this.turn = "X";
        }
    }
    makemove(i){
        if(this.board[i] || this.finish)
        {
            return;
        }
        console.log(i);
        this.board[i] = this.turn;
        let ifWin = this.checkwinning();
        console.log(ifWin);
        if(ifWin)
        {
            this.finish = ifWin;
            return;
        }
        this.nextturn();
        this.updatePlayer();
    }

    checkwinning()
    {
        const winningComb= [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];

        for(const comb of winningComb)
        {
            const [a,b,c] = comb;
            if(this.board[a] && this.board[a]==this.board[b] && this.board[b]==this.board[c])
            {
                return comb;
            }
        }
        return null;
    }

    updatePlayer(){
        const playerX = document.querySelector(".player-x");
        const playerO = document.querySelector(".player-o");
        playerX.classList.remove('bdr-btm');
        playerO.classList.remove('bdr-btm');
        if(this.turn == "X")
        {
            playerX.classList.add('bdr-btm');
        }
        else if(this.turn == "O")
        {
            playerO.classList.add('bdr-btm');
        }
    }
}