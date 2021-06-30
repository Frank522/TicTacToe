const GameBoard = (() => {

    const grid = ['','','','','','','','',''];
    const HTMLBoard = Array.from(document.querySelectorAll('.GameBoard .cell'));
    const winArray = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,4,6],[2,5,8],[3,4,5],[6,7,8]];
    const eventListeners = [];

    const initialize = (startingValue) => {
        HTMLBoard.forEach(cell => {
            const listener = clickHandler(startingValue, cell);
            eventListeners.push(listener);
            cell.addEventListener('click', () => {listener.changeCell();});
        });
    }

    // changes both HTML and grid values upon click
    const clickHandler = (val, cell) => {

        let value = val;

        const changeValue = (reset) => {
            value = value == 'X' ? 'O' : 'X';
            if(reset) value = '';
        }

        const changeCell = () => {
            if(cell.innerText == '' && value != ''){
                cell.innerText = value;
                let index = cell.getAttribute('id').charAt(4);
                grid[index - 1] = value;
                cell.setAttribute('value', value);
                GameBoard.changeTurn();
            } else if (value == ''){
                cell.innerText = value;
                let index = cell.getAttribute('id').charAt(4);
                grid[index - 1] = value;
                cell.setAttribute('value', 'null');
            }
        }

        return {changeValue, changeCell, value};
    }

    // removes listeners for player whose turn is previously was and add them for player whose turn it is now
    const changeTurn = () => {
        eventListeners.forEach(listener => listener.changeValue(false));
    }
    //returns object that details if there is a win, the winner, and the cells used to make the win. 
    const isEnd = () => {
        const result = {
            value: false,
            winner: 'none',
            winCells: []
        }
        for(let i=0; i<winArray.length; i++){
            
            if(grid[winArray[i][0]] == 'X' && grid[winArray[i][1]] == 'X' && grid[winArray[i][2]] == 'X'){
                result.value = true;
                result.winner = 'X';
                result.winCells = winArray[i];
                return result;
            }
            if(grid[winArray[i][0]] == 'O' && grid[winArray[i][1]] == 'O' && grid[winArray[i][2]] == 'O'){
                result.value = true;
                result.winner = 'X';
                result.winCells = winArray[i];
                return result;
            }
        }

        return result;

    }

    const reset = () => {
        eventListeners.forEach(listeners => {
            listeners.changeValue(true);
            listeners.changeCell();
        });
    }

    return {isWin, initialize, reset, changeTurn};
})();


const Player = (value, name) => {
    let letter = value;
    let playerName = name;
    const getLetter = () => value;
    const getName = () => playerName;
    return { getLetter , getName };
}

const Game = ((Player1, Player2) => {
    let currentPlayer = Player1
    let nextPlayer = Player2
    let startVal
    const body = document.querySelector('.gameBoard')
    const select = document.querySelector('.select')
    const xBtn = document.querySelector('#xBtn')
    const oBtn = document.querySelector('#oBtn')

    xBtn.addEventListener('click', selection);
    oBtn.addEventListener('click', selection);

    function selection(e) {
        setTimeout(() => {
            startVal = e.target.getAttribute('value');
            select.style.display = "none";
            body.style.display = "flex";
            run();
        }, 500);
    }
    
    const run = () => {
        body.addEventListener('click', () => {
            determineResult();
        });
        GameBoard.initialize(startVal);
    }

    const determineResult = () => {
        result = GameBoard.isEnd();
        if(result.value){
            alert(result.winner + ' is the winner!');
            GameBoard.reset();
            
        }
    }


    return;
})(Player('X', 'Michael'), Player('0', 'Chris'));