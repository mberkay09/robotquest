let features = require('./robotquest-features');
const R = features.SYMBOLS.robot;
const T = features.SYMBOLS.tree;
const F = features.SYMBOLS.flag;
const W = features.SYMBOLS.water;
const PLAY_BOARD = [
    [T,   T,    '.',   F],
    [T,   '.',  '.', '.'],
    ['.', '.',  '.', '.'],
    [R,   '.',  '.',   W]
];
let robot = {
    position: {
        line: 0,
        column: 0
    },
    head: 'up'
};

let moves = 0;
let turns = 0;



var prompt = require('prompt-sync')();
console.log(" Current position of robot head is"+" "+ robot.head);

let input = prompt("TO move up enter u, to move right enter r?");
 switch(input){
     case "u":
     function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
         nbOfMoves += 1;
         return nbOfMoves;
     }
     { switch (input)
     {
         case "r":
             robot.head = "right";
         }
         break;
         case "L"}
 }

console.log(input);
*/