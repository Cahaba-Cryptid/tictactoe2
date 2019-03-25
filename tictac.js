let cells = document.querySelectorAll('.row > div');

var board = {
    row1: null,
    row2: null,
    row3: null
};

let currentPlayer = 'X';

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {
    if(event.target.textContent !== ''){
        return;
    }
    event.target.textContent = currentPlayer;
    togglePlayer();
}

function togglePlayer() {
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X'
    }
}

var winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

