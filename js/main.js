/*----- constants -----*/
const PLAYERS = {
    '1': "url('https://media.giphy.com/media/SKGo6OYe24EBG/giphy.gif')",
    '-1': "url('https://media.giphy.com/media/G3dFISzqWT8is/giphy.gif')",
    '0': 'white'
}

const LENGTH = 7;



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
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0],
        [0,0,0,0,0,0]
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

    let openCells = gameBoard.forEach(function(arr){
        for(let i = 0;i < arr.length; i++){
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
    // check if cell has player marker assigned to it
    if (gameBoard[[evt.target.id]]) return;
    //if anything but the cell has been clicked do nothing
    if (evt.target.id === 'gameBoard') return;
    //cell is not clickable it someone won
    if (winner) return;
    //let player to that cell
    gameBoard[[evt.target.id]] = turn;
    checkForWin();
    //switch turn
    turn *= -1;
    render()
    console.log(evt.target);
}

function checkForWin() {
    
}





// let checkCell = function(){
//     gameBoard.forEach(function(arr){
//         for(let i = 0; i < arr.length; i++){
//             arr[i].id === evt.target.id
//         }
//     })
// }


// convertedArray.forEach(function (element, idx) {
//     document.getElementById(idx).style.backgroundImage = element && PLAYERS[element];
// })

// if (winner) {
//     message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`
//     resetBtn.style.display = null;
// } else if (!convertedArray.includes(0)) {
//     message.textContent = 'Bummer Its A Tie'
//     resetBtn.style.display = null;
// } else {
//     message.textContent = `Player ${turn > 0 ? 1 : 2}'s turn!`
// }

//  //fill grid
//  gameBoard.forEach(function (element, idx) {
//     document.getElementById(idx).style.backgroundImage = element && PLAYER[element];
//   })

