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
    winner = null;
    turn = 1;
    render()
}

function render() {

}


