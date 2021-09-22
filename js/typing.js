let nowCharN=0;
let word="";
let correct=0;
let missCount=0;
let missTime=0;

//タイピングゲームの表示
function typingGame(){
  background(255);
  
  textAlign(LEFT,CENTER);
  textSize(50);
  noStroke();
  fill(100);
  text(word,width/2-textWidth(word)/2,200);
  stroke(173,138,10);
  fill(255,200,20);
  text(word.substring(0,nowCharN),width/2-textWidth(word)/2,200);
  
  keyBoard(200,300,word.charAt(nowCharN));
  
  showMiss();
}

function keyTyped(){
  if(key==word.charAt(nowCharN)){
    nowCharN++;
    if(nowCharN>=word.length){
      nowCharN=0;
      word=randWord(word);
    }
  }else if(keyCode==SHIFT || key==' '){
    
  }else{
    miss();
  }
}

//ランダムに単語を選択
function randWord(nowWord){
  let w;
  do{
    w=words[int(random(words.length))];
  }while(nowWord==w);
  return w;
}

//ゲームリセット
function reset(){
  print("reset!");
  word=randWord(word);
  missCount=0;
  correct=0;
}

//失敗したときの処理
function miss(){
  print("miss");
  missCount++;
  missTime=10;
}

//ミスしたときの表示エフェクト
function showMiss(){
  if(missTime>0){
    background(255,0,0,30);
    missTime--;
  }
}