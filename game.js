$(document).ready(function () {

    let xTurn = true;
    let gameWon = false;
    xMark = "X";
    oMark = "O";

    $("#reset").click(function () {
        $(".game-space").removeClass("marked").empty();
        console.log("reset clicked");
    });


    function changeTurn() {

        if (xTurn === true) {
            xTurn = false;
            //console.log(xMark);
            //console.log(event.target);
            $target.append(xMark).hide().fadeIn();
            console.log("Os turn now!")
        } else if (xTurn === false) {
            xTurn = true;
            $target.append(oMark).hide().fadeIn();
            console.log("Xs turn now!")
        }

        $target.addClass("marked");
    };

    function determineValidTurn() {
        $target = $(event.target);
        if ($target.hasClass("marked")) {
            console.log("this spot it already marked");
        }
        else {
            changeTurn();
        }
    }

    function beginGame() {
        //console.log("begingame working");
        $(".game-space").click(determineValidTurn);
    };


    beginGame();

});