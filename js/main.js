/*----- constants -----*/
const PLAYERS = {
    '1': "url('https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif')",
    '-1': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')",
    '0': 'white'
}

const COL_HEIGHT = 6;
const ROW_LENGTH = 7;

/*----- app's state (variables) -----*/
let gameBoard;
let winner;
let turn;
let coordinateR;
let coordinateC;


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
            //document.getElementById(`c${idx1}r${idx2}`).style.backgroundImage = element && PLAYERS[element];
        })
    })


    // let counter1 = 0;
    // gameBoard.forEach(function (arr, idx) {
    //     if (counter1 === coordinateC) {
    //         console.log(gameBoard[coordinateC]);
    //         for(let i = 0; i < COL_HEIGHT, i++;){
    //             console.log('check')
    //         }
            
    //     }
    //     counter1++
    // })




    // gameBoard.forEach(function(arr,idx1){
    //     if(idx1 === coordinateC){
    //         console.log(gameBoard[coordinateC]);
    //         arr.forEach(function(element,idx){
                
    //         })
            
    //     }
    // })



    // for(let i = 0; i < COL_HEIGHT.length; i++){
                
    //     if(i = 0){
    //         console.log(`${i} cells still have 0`)
    //     }
        
    // }

    // gameBoard[coordinateC].indexOf(0).style.backgroundColor = 'red'
    // console.log(coordinateC);
    // console.log('found the column')

    //check for winner using ternary
    //check for tie
    //no one won so change message turn
    // let openCells = function () {
    //     gameBoard.forEach(function (arr) {
    //         arr.includes(0);
    //     })
    // }

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
    coordinateC = parseInt(coordinate.charAt(0));
    coordinateR = parseInt(coordinate.charAt(1));

    //console.log(coordinateC, coordinateR);
    //loop through gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        //let index1 = i
        for (let j = 0; j < gameBoard[i].length; j++) {
            //let index2 = j
            //if cell is linked to a player then return;
            if (gameBoard[coordinateC][coordinateR] === 1 || gameBoard[coordinateC][coordinateR] === -1) {
                console.log('nope thats taken')
                return;
            }
        }
    }

    //cell is not clickable it someone won
    if (winner) return;


    //loop through gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        let index1 = i
        for (let j = 0; j < gameBoard[i].length; j++) {
            let index2 = j
            //link player to that cell
            if (gameBoard[coordinateC][coordinateR] == 0) {
                gameBoard[coordinateC][coordinateR] = turn;
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
