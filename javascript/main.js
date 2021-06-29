const GameBoard = (() => {

    const grid = ['','','','','','','','',''];
    const HTMLBoard = Array.from(document.querySelectorAll('.cell'));
    const winArray = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,5,7],[3,6,9],[4,5,6],[7,8,9]];

    const updateHTML = () => {
        for(let i=0; i<9; i++){
            HTMLBoard[i].innerText = grid[i];
        }
    }

    const changeValue = (value) => {
        if(this.innerText == null){
            this.innerText = value;
        }
    }

    const changeTurn = (value) => {
        for(cell in HTMLBoard){
            cell
        }
    }

    const isWin = () => {
        const result = {
            value: false,
            winner: 'none',
            winCells: []
        }
        for(let i=0; i<winArray.length; i++){
            let isX = false;
            let isO = false;
            /*
            if(grid[winArray[i][0]] == 'X' && grid[winArray[i][1]] == 'X' && grid[winArray[i][2]] == 'X'){
                result.value = true;
                result.winner = 'X';
                return result;
            }
            if(grid[winArray[i][0]] == 'O' && grid[winArray[i][1]] == 'O' && grid[winArray[i][2]] == 'O'){
                result.value = true;
                result.winner = 'X';
                return result;
            }
            */
            for(let j=0; j<3; j++){
                if(grid[winArray[i][j]] = 'X'){
                    isX = true;
                    isO = false;
                }
                else if(grid[winArray[i][j]] = '0'){
                    isO = true;
                    isX = false;
                } else {
                    isO = false;
                    isX = false;
                }
            }
            if(isX){
                result.value = true;
                result.winner = 'X';
                result.winCells = winArray[i];
                return result;
            }
            if(isO){
                result.value = true;
                result.winner = 'O';
                result.winCells = winArray[i];
                return result;
            }
        }

        return result;

    }

    const setSquare = (value, cell) => {
        grid[cell] = value;
        updateHTML();
    }

    return {isWin, setSquare, changeTurn};
})();

const Player = (value) => {
    let letter = value;
    const getLetter = () => value;
    return { getLetter };
}

const Game = ((Player1, Player2) => {
    this.currentPlayer = Player1;
    this.nextPlayer = Player2;


})(new Player('X'), new Player('0'));