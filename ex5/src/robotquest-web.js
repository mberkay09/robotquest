'use strict';
import { turn, move,trailIndicators} from './robotquest-features.js';


let turns=0;

function main() {

    console.log("Starting now!");
    let robot = {
        position: {
            line: 0,
            column: 0

        },
        head: "up"
    }
    // attach events to your elements/buttons
    document.getElementById("turn-left-button").addEventListener("click", function() { turn_left(robot); }, false);
    document.getElementById("turn-right-button").addEventListener("click", function(){turn_right(robot);},false);
    document.getElementById("move-button").addEventListener("click", function () {move_robot(robot);}, false);
    // Initialize your global variables (robot, nbOfMoves, etc...)

}


function move_robot(robot) {

    console.log("Move the robot");

    const maxLineIndex=4;
    const maxColumnIndex=4;
    let nbOfMoves=0;
    // call the move function from robotquest-features (already imported 4U)
    move(robot, maxLineIndex, maxColumnIndex, nbOfMoves);

    switch(robot.head){
        case "up":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↑";
            break;
        case "down":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↓";
            break;
        case "left":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R←";
            break;
        case "right":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R→";
            break;
    }
}


function turn_left(robot) {
    console.log("Turn left");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-left', turns);
switch(robot.head){
    case "up":
        document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↑";
        break;
    case "down":
        document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↓";
        break;
    case "left":
        document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R←";
        break;
    case "right":
        document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R→";
        break;
}

}



function turn_right(robot) {
    console.log("Turn right");
    // you can call this function directly from robotquest-features.js (see import at top of file):
    turn(robot, 'turn-right', turns);
    switch(robot.head){
        case "up":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↑";
            break;
        case "down":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R↓";
            break;
        case "left":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R←";
            break;
        case "right":
            document.getElementById("l"+robot.position.line+"c"+robot.position.column).innerHTML="R→";
            break;
    }
}


// Calling main on load
window.onload = main;
