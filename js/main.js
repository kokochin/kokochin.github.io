let startMill;
let second;
let timeLimit;
let keyBoardSound,missSound;
let isMute=false;
let nowCharN=0;
let word="";
let wordCount=0;
let correctCount=0;
let missCount=0;
let missTime=0;
let time;

function preload(){
  soundFormats("mp3","ogg");
  keyBoardSound=loadSound("SE/keyboard.mp3");
  missSound=loadSound("SE/miss.mp3");
}

function setup() {
  createCanvas(800,600);
  initKeyBoard();
  time=new timer();
  reset();
}

function draw() {
  background(255);
  typingGame();
}

function keyTyped(){
  typingKeyTypedEvent(keyBoardSound);
}

function playSound(sound,volume){
  if(!isMute){
    sound.play(0,1,volume);
  }
}

//ゲームリセット
function reset(){
  print("reset!");
  word=randWord(word);
  missCount=0;
  correct=0;
  time.start();
}

function remainingTime(){
  return (300-time.nowSec()).toFixed(2)
}

function mousePressed(){
  print("pause");
  time.pause();
}

function mouseReleased(){
  print("resume");
  time.resume();
}