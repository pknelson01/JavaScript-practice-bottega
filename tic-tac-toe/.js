class GameBoard {
    constructor(player, winningSection, winner, message, tilesLeft, gameboard) {
        this.player = 'X';
        this.winningSection = [];
        this.tilesLeft = 9;
        this.winner = "";
        this.message = document.getElementById('message');
        this.gameboard = document.querySelector('.gameboard');
    }

    createBoard() {
        for (let tile = 1; tile <= 9; tile++) {
            const tileElement = document.createElement('div');
            const tileTextContent = document.createTextNode(`${tile}`);
            tileElement.appendChild(tileTextContent);
            tileElement.classList.add('tile');

            this.gameboard.appendChild(tileElement);
        }
    }
}

const test = new GameBoard();
console.log(test.createBoard());