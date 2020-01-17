let xTurn;
let gameWon = false;

console.log(xTurn);

function changeTurn() {
    if (xTurn === true) {
        xTurn = false;
        console.log("Os turn now!")
    } else if (xTurn === false) {
        xTurn = true;
        console.log("Xs turn now!")
    }
    console.log(xTurn);
};

function beginGame() {
    console.log("begingame working");
    $("#test-button").click(function () {
        console.log("beep");
    });
};

beginGame();