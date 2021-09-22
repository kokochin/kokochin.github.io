let startMill;
let second;
let timeLimit;

function preload(){
  
}

function setup() {
  createCanvas(800,600);
  initKeyBoard();
  reset();
}

function draw() {
  background(255);
  typingGame();
}