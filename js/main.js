/*----- constants -----*/
const PLAYERS = {
    '1': "url('https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif')",
    '-1': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')",
    '0': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')"
}

const COL_HEIGHT = 6;
const ROW_LENGTH = 7;

/*----- app's state (variables) -----*/
let gameBoard;
let winner;
let turn;
let rowIdx;
let colIdx;


/*----- cached element references -----*/
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('#message')
const resetBtn = document.querySelector('#resetBtn')


/*----- event listeners -----*/
document.getElementById('gameBoard').addEventListener('click', handleClick);
document.getElementById('resetBtn').addEventListener('click', init);


/*----- functions -----*/
init()

function init() {
    gameBoard = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    winner = null;
    turn = 1;
    render()
}

function render() {
    //button hidden on init
    resetBtn.style.display = 'none';
    //fill grid
    gameBoard.forEach(function (arr, idx1) {
        arr.forEach(function (element, idx2) {
            document.getElementById(`c${idx1}r${idx2}`).style.backgroundImage = element && PLAYERS[element];
        })
    })

    //check for winner using ternary
    //check for tie
    //no one won so change message turn
    let openCells = function () {
        gameBoard.forEach(function(arr){
            arr.forEach(function(element){

            })
        })
    }

    let loop = 0

    if (winner) {
        message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`
        resetBtn.style.display = null;
    } else if (loop) {
        message.textContent = 'Bummer Its A Tie'
        resetBtn.style.display = null;
    } else {
        message.textContent = `Player ${turn > 0 ? 1 : 2}'s turn!`
    }
}



function handleClick(evt) {
    //if anything but the cell has been clicked do nothing
    if (evt.target.id === 'gameBoard') return;

    //get coordinate values from event.target.id
    var coordinate = evt.target.id.replace(/\D/g, '');
    colIdx = parseInt(coordinate.charAt(0));
    rowIdx = parseInt(coordinate.charAt(1));

    //set tokens to stack
    const colArr = gameBoard[colIdx];
    rowIdx = colArr.indexOf(0);


    if(rowIdx == -1) return;
    console.log(rowIdx);

    //cell is not clickable it someone won
    if (winner) return;


    //loop through gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        let index1 = i
        for (let j = 0; j < gameBoard[i].length; j++) {
            let index2 = j
            //link player to that cell
            if (gameBoard[colIdx][rowIdx] == 0) {
                gameBoard[colIdx][rowIdx] = turn;
            }
        }
    }

    checkForWin();
    //switch turn
    turn *= -1;
    render()
}

function checkForWin() {

}
