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
let convertedArray;


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
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0]
    ]
    convertedArray = [].concat(...gameBoard);
    winner = null;
    turn = 1;
    render()
}

function render() {
    //button hidden on init
    resetBtn.style.display = 'none';
    //fill grid
    convertedArray.forEach(function (element, idx) {
        document.getElementById(idx).style.backgroundImage = element && PLAYERS[element];
    })
    //check for winner using ternary
    //check for tie
    //no one won so change message turn
    if (winner) {
        message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`
        resetBtn.style.display = null;
    } else if (!convertedArray.includes(0)) {
        message.textContent = 'Bummer Its A Tie'
        resetBtn.style.display = null;
    } else {
        message.textContent = `Player ${turn > 0 ? 1 : 2}'s turn!`
    }
}


function handleClick(evt) {
    // check if cell has player marker assigned to it
    if (convertedArray[evt.target.id]) return;
    //if anything but the cell has been clicked do nothing
    if (evt.target.id === 'gameBoard') return;
    //cell is not clickable it someone won
    if (winner) return;
    //let player to that cell
    convertedArray[evt.target.id] = turn;
    checkForWin();
    //switch turn
    turn *= -1;
    render()
    console.log(convertedArray);
    console.log(evt.target.id%7);

}

function checkForWin() {
    
}


// let column0 = [];
// let column1 = [];
// let column2 = [];
// let column3 = [];
// let column4 = [];
// let column5 = [];
// let column6 = [];
// let column7 = [];

// let counter = 0;

// let columnCells = function(){
//     for(let i = 0; i < convertedArray.length; i++){
//         if([i] % 7 == 0){
//             column0.push(i);
//         }

//     }
// }

// columnCells()
// console.log(column0);



// let columnCells = convertedArray.filter(el => el.length % 7 == 0);

// console.log(columnCells);


// let getColumns= function(){
//     for(let i = 0; i < convertedArray.length; i++){
//         if(convertedArray[i] % 7 == 0) {
//             columnCells.push([i])
//         }
//     }
// }



// let checkV = convertedArray.filter(function(cell){
//     return cell.id % 1;
// })
// console.log(checkV);


// let checkVertically = convertedArray.filter(function(cell){
//     console.log(cell);
//     return cell.id % LENGTH ===  0;
// })
// console.log(checkVertically);
