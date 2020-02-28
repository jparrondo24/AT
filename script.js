// ----------------------------- Variables ----------------------------- //

let game;
let score;
let numberOfStaticHit = 0;
let recentScores;
let userClicks = [];
let greeting, button, input;
let hasGameStarted = false;
let numberOfMissedTargets = 0;
const numTargets = 5;
let targets = [];


// ----------------------------- New Variables ---------------------------- //

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

// ----------------------------- Restart Game ----------------------------- //

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);

    input = createInput();
    input.position(width / 2 - 250, height / 2);

    button = createButton('Play');
    button.position(width / 2 - 250, height / 2 + 80);
    button.mousePressed(start);
}

function start() {
    button.style("visibility", "hidden");
    input.style("visibility", "hidden");
    hasGameStarted = true;

    restartGame();
}

function restartGame() {
    // for (let i = 0; i < NUMBER_OF_TARGETS; i++) {
    //   let hasDone = false
    //   while(!hasDone) {
    //     let newTarget = new Target(i, targets);
    //     hasDone = newTarget.hasFoundTargetPosition(i);
    //   }
    // }

    generator();
}





// ----------------------------- Generate Targets ----------------------------- //

function generator() {

    for (let index = 0; index < 10; index++) {
        let randomX = Math.floor(Math.random() * windowWidth);
        let randomY = Math.floor(Math.random() * windowHeight);
        circle(randomX, randomY, 30);
    }

}

// ----------------------------- Aim Timer ----------------------------- //

// function AimTimer() {
//     this.x = width / 2;
//     this.y = 100;
//     this.time = 30;

//     this.display = function () {

//         if (this.time <= 3) {
//             textSize(50);
//             fill(255, 100, 100);
//             text(this.time, this.x, this.y);

//         } else {
//             textSize(40);
//             fill(255);
//             text(this.time, this.x, this.y);
//         }
//     }
// }