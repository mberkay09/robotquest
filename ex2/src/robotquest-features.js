module.exports =
    {turn, move, updateBoard, checkIfFlagReached, cloneRobot};

const SYMBOLS = {
    robot: setReverse('R'),
    tree: colorInGreen('T'),
    flag: colorInYellow('F'),
    water: setBlueBg('w')

}
module.exports.SYMBOLS = SYMBOLS;

const trailIndicators = {
    left: setBright('←'),
    right: setBright('→'),
    up: setBright('↑'),
    down: setBright('↓')
};

function turn(robot,step, turns) {
    switch (robot.head) {

        // 1b and 1a
        case ("up"):
            robot.head = step === "turn-right" ? "right":  "left";
            turns += 1;
            break;
            //  2a and 2b
        case ("right"):
            robot.head = step  === "turn-right" ? "down":"up";

            turns += 1;
            break;
            // 3a and 3b
        case ("down"):
            robot.head = step === "turn-right" ? "left" : "right";
            turns += 1;
            break;
            //4a and 4b
        case ("left"):
            robot.head = step === "turn-right" ? "up" : "down";
            turns += 1;
            // 3b
            break;
    }
    console.log(robot.head + " " + turns);
            return turns;


}

/*

function turn(robot, step, turns) {
//1a
    if (robot.head === "up" && step === "turn-left") {
        robot.head = "left";
        turns += 1;

    }
    //1b
    else if(robot.head === "up" && step === "turn-right") {
        robot.head = "right";
        turns += 1;

    }
    //2a
    else if(robot.head === "right" && step === "turn-right") {
        robot.head = "down";
        turns += 1;
    }
    //2b
    else if(robot.head === "right" && step === "turn-left") {
        robot.head = "up";
        turns += 1;
    }
    //3a
    else if(robot.head === "down" && step === "turn-right") {
        robot.head = "left";
        turns += 1;
    }
    //3b
    else if(robot.head === "down" && step === "turn-left") {
        robot.head = "right";
        turns += 1;
    }
    //4a
    else if(robot.head === "left" && step === "turn-right") {
        robot.head = "up";
        turns += 1;
    }
    //4b
    else if(robot.head === "left" && step === "turn-left") {
        robot.head = "down";
        turns += 1;
    }
    console.log(robot.head+" "+turns)
    return turns ;
}


*/

    function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {

        nbOfMoves += 1;
        return nbOfMoves;
    }

    function updateBoard(board, previousRobotState, currentRobotState) {
        return;
    }

    function checkIfFlagReached(robot, board) {
        return false;
    }

// utils
    function cloneRobot(robot) {
        let newRobot = {};
        newRobot.position = {};
        newRobot.position.line = robot.position.line;
        newRobot.position.column = robot.position.column;
        newRobot.head = robot.head;
        return newRobot;
    }


// presentation utils
    function colorInGreen(char) {
        return `\x1b[32m${char}\x1b[0m`;
    }

    function colorInYellow(char) {
        return `\x1b[33m${char}\x1b[0m`;
    }

    function setBlueBg(char) {
        return `\x1b[44m${char}\x1b[0m`;
    }

    function setReverse(char) {
        return `\x1b[7m${char}\x1b[0m`;
    }

    function setBright(char) {
        return `\x1b[1m${char}\x1b[0m`;
    }
