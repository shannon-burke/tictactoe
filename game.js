$(document).ready(function () {

    let xTurn = true;
    //let xWin = false;
    //let oWin = false;
    const xMark = "X";
    const oMark = "O";
    let currentSelections = [];
    let xSelections = [];
    let oSelections = [];
    //const winningCombo = [1 && 2 && 3];
    let xScore = 0;
    let oScore = 0;
    let drawCount = 0;


    function resetGame() {
        $(".game-space").removeClass("marked").empty();
        xSelections = [];
        oSelections = [];
        currentSelections = [];
        $("#x-score").text(" " + xScore);
        $("#draw-count").text(" " + drawCount);
        $("#o-score").text(" " + oScore);
    };

    function resetScores() {
        xScore = 0;
        oScore = 0;
        drawCount = 0;
        resetGame();
    }

    $("#reset-game").click(resetGame);
    $("#reset-scores").click(resetScores);

    function checkWin() {
        if (xSelections.includes(1) && xSelections.includes(2) && xSelections.includes(3) || xSelections.includes(4) && xSelections.includes(5) && xSelections.includes(6) || xSelections.includes(7) && xSelections.includes(8) && xSelections.includes(9) || xSelections.includes(1) && xSelections.includes(4) && xSelections.includes(7) || xSelections.includes(2) && xSelections.includes(5) && xSelections.includes(8) || xSelections.includes(3) && xSelections.includes(6) && xSelections.includes(9) || xSelections.includes(1) && xSelections.includes(5) && xSelections.includes(9) || xSelections.includes(3) && xSelections.includes(5) && xSelections.includes(7)) {
            console.log("Xs win!");
            xScore++;
            setTimeout(resetGame, 1000);
        }
        else if (oSelections.includes(1) && oSelections.includes(2) && oSelections.includes(3) || oSelections.includes(4) && oSelections.includes(5) && oSelections.includes(6) || oSelections.includes(7) && oSelections.includes(8) && oSelections.includes(9) || oSelections.includes(1) && oSelections.includes(4) && oSelections.includes(7) || oSelections.includes(2) && oSelections.includes(5) && oSelections.includes(8) || oSelections.includes(3) && oSelections.includes(6) && oSelections.includes(9) || oSelections.includes(1) && oSelections.includes(5) && oSelections.includes(9) || oSelections.includes(3) && oSelections.includes(5) && oSelections.includes(7)) {
            console.log("Os win!");
            oScore++;
            setTimeout(resetGame, 1000);
        }
        else if (currentSelections.length >= 9) {
            console.log("Draw!");
            drawCount++;
            setTimeout(resetGame, 1000);
        }
        else {
            return;
        }
    };

    function doTurn() {
        selection = event.target.id;
        if (xTurn === true) {
            xTurn = false;
            $target.append(xMark).hide().fadeIn().addClass("x");
            xSelections.push(parseInt(selection, 10));
            //determineXWin();
            //console.log(xSelections);
        } else if (xTurn === false) {
            xTurn = true;
            $target.append(oMark).hide().fadeIn().addClass("o");
            oSelections.push(parseInt(selection, 10));
            //determineOWin();
            //console.log(oSelections);
        }
        $target.addClass("marked");
        currentSelections.push(parseInt(selection, 10));
        //checkWin();
        //console.log(currentSelections);
    };

    function determineValidMove() {
        $target = $(event.target);
        if ($target.hasClass("marked")) {
            console.log("this spot it already marked");
        }
        else {
            doTurn();
            checkWin();
        }
    };

    $(".game-space").click(determineValidMove);

    // $("#x-score").text(" " + xScore);

});