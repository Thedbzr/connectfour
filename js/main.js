/*----- constants -----*/
const PLAYERS = {
    '1': 'red',
    '-1': 'yellow',
    'null': 'white'
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
document.getElementById('gameBoard').addEventListener('click',handleClick);
document.getElementById('resetBtn').addEventListener('click',init);




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
    winner = null;
    turn = 1;
    render()
}

function render() {
    //button hidden on init
    resetBtn.style.display = 'none';
    //fill grid
    gameBoard.forEach(function(arr){
        arr.forEach(function(cell,idx){
            document.getElementById(idx).style.backgroundImage = cell && PLAYERS[cell];
        })
    })

    // let checkTie = function(arr,search){

    //     const nullCell = (element) => element = null;
    //     return arr.some(row => row.includes(nullCell));
    // }

   let checkForNull = gameBoard.forEach(function(arr){
        arr.forEach(function(cell){
            
        })
    })

    //check for winner using ternary
    //check for tie
    //no one won so change message turn
    if(winner) {
        message.textContent = `Player ${winner > 0 ? 1 : 2} wins!`
    } else if (){
        
    }
}


function handleClick(evt){
    // check if cell has player marker assigned to it
    if(gameBoard[evt.target.id]) return;
    //if anything but the cell has been clicked do nothing
    if(evt.target.id === 'gameBoard') return;
    //cell is not clickable it someone won
    if(winner) return;
    //let player to that cell
    gameBoard[evt.target.id] = turn;
    checkForWin();
    //switch turn
    turn *= -1;
    render()
}

function checkForWin(){
    
}