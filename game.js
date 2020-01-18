$(document).ready(function () {

    let xTurn = true;
    let xWin = false;
    let yWin = false;
    const xMark = "X";
    const oMark = "O";

    let currentSelections = [];
    let xSelections = [];
    let oSelections = [];

    function resetGame() {
        $(".game-space").removeClass("marked").empty();
        console.log("reset clicked");
    };

    $("#reset").click(resetGame);

    function doTurn() {
        selection = event.target.id;
        if (xTurn === true) {
            xTurn = false;
            $target.append(xMark).hide().fadeIn().addClass("x");
            xSelections.push(parseInt(selection, 10));
            //console.log(xSelections);
        } else if (xTurn === false) {
            xTurn = true;
            $target.append(oMark).hide().fadeIn().addClass("o");
            oSelections.push(parseInt(selection, 10));
            //console.log(oSelections);
        }
        $target.addClass("marked");
        currentSelections.push(parseInt(selection, 10));
        //console.log(currentSelections);
    };

    function determineValidTurn() {
        $target = $(event.target);
        if ($target.hasClass("marked")) {
            console.log("this spot it already marked");
        }
        else {
            doTurn();
        }
    };

    function determineWin() {
        if (xWin === true) {
            alert("Xs win!");
            resetGame();
        }
        else if (yWin === true) {
            alert("Os win!");
            resetGame();
        }
        else {
            determineValidTurn();
        }
    }

    $(".game-space").click(determineWin);

});