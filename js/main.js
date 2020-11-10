/*----- constants -----*/
const PLAYERS = {
    '1': "url('https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif')",
    '-1': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')",
    '0': 'white'
}




/*----- app's state (variables) -----*/
let gameBoard;
let winner;
let turn;



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
    // gameBoard.forEach(function(arr){
    //     arr.forEach(function(element,idx){
    //         document.getElementById(idx).style.backgroundImage = element && PLAYERS[element];
    //     })
    // })
    //check for winner using ternary
    //check for tie
    //no one won so change message turn

    let openCells = gameBoard.forEach(function (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr.includes(null);
        }
    })

    if (winner) {
        message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`
        resetBtn.style.display = null;
    } else if (openCells) {
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
    let coordinateC = parseInt(coordinate.charAt(0));
    let coordinateR = parseInt(coordinate.charAt(1));

    console.log(coordinateC, coordinateR);
    //loop through gameBoard
    for (let i = 0; i < gameBoard.length; i++) {
        let index1 = i
        for (let j = 0; j < gameBoard[i].length; j++) {
            let index2 = j
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
    // console.log(evt.target);
}

function checkForWin() {

}


let checkCell = function () {

}

let updateCell = function (evt) {


}
updateCell();






// gameBoard.forEach(function(arr){
//     let index = arr.findIndex(element => element === evt.target)
//     console.log(index);
//  })

 // let checkArray = function(){
    //     gameBoard.some(function(arr,idx){
    //        if(arr.includes([[coordinateC][coordinateR]])){
    //            gameBoard[[coordinateC][coordinateR]] = turn;
    //            console.log('worked?')
    //        };
    //     })
    // }
    // checkArray();