let cells = document.querySelectorAll('.row > div');
let currentPlayer = 'X';
let gameOver = false;

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked() {

    if(gameOver === true) {
        resetBoard()
        return;
    }

    //if the square has an X or O .. 
    if (event.target.textContent !== "") {
        return;
    }

    event.target.textContent = currentPlayer;
    checkWinDrawOrLose();
    togglePlayer();
}

function togglePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}

function checkWinDrawOrLose() {
    if (checkTop() || checkMiddle() || checkBottom() || checkLeftColumn() || checkMiddleColumn() || checkRightColumn() || checkDiagLeftToRight() || checkDiagRightToLeft()){
        console.log(currentPlayer + " is the winner!");
        gameOver = true;
    }
}

function checkTop() {
    if ((cells[0].textContent === cells[1].textContent && cells[1].textContent === cells[2].textContent) && !isEmpty(0, 1, 2)) {
        return true;
    } else {
        return false;
    }
}

function checkMiddle() {
    if((cells[3].textContent === cells[4].textContent && cells[4].textContent === cells[5].textContent) && !isEmpty(3, 4, 5)) {
        return true;
    } else {
        return false;
    }
}

function checkBottom() {
    if((cells[6].textContent === cells[7].textContent && cells[7].textContent === cells[8].textContent) && !isEmpty(6, 7, 8)) {
        return true;
    } else {
        return false;
    }
}

function checkLeftColumn() {
    if((cells[0].textContent === cells[3].textContent && cells[3].textContent === cells[6].textContent) && !isEmpty(0, 3, 6)) {
        return true;
    } else {
        return false;
    }
}

function checkMiddleColumn() {
    if((cells[1].textContent === cells[4].textContent && cells[4].textContent === cells[7].textContent) && !isEmpty(1, 4, 7)) {
        return true;
    } else {
        return false;
    }
}

function checkRightColumn() {
    if((cells[2].textContent === cells[5].textContent && cells[5].textContent === cells[8].textContent) && !isEmpty(2, 5, 8)) {
        return true;
    } else {
        return false;
    }
}

function checkDiagLeftToRight(){
    if((cells[0].textContent === cells[4].textContent && cells[4].textContent === cells[8].textContent) && !isEmpty(0, 4, 8)) {
        return true;
    } else {
        return false;
    }
}
function checkDiagRightToLeft(){
    if((cells[2].textContent === cells[4].textContent && cells[4].textContent === cells[6].textContent) && !isEmpty(2, 4, 6)) {
        return true;
    } else {
        return false;
    }
}

function isEmpty(x, y, z) {
    if (cells[x].textContent === "" || cells[y].textContent === "" || cells[z].textContent === "") {
        return true;
    } else {
        return false;
    }
}

function resetBoard() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    } 
    gameOver = false;
    currentPlayer = 'X';
}



