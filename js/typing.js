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
  
  fill(0);
  noStroke();
  textAlign(CENTER,CENTER);
  text(wordCount,width/2,75);
  textAlign(LEFT,CENTER);
  text(missCount+"miss",50,75);
  textAlign(RIGHT,CENTER);
  text(remainingTime(),width-50,75);
  
  keyBoard(200,300,word.charAt(nowCharN));
  
  showMiss();
}

function typingKeyTypedEvent(typedSound){
  if(key==word.charAt(nowCharN)){
    nowCharN++;
    correctCount++;
    playSound(typedSound,0.25);
    if(nowCharN>=word.length){
      wordCount++;
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

//失敗したときの処理
function miss(){
  print("miss");
  missCount++;
  missTime=10;
  playSound(missSound,0.25);
}

//ミスしたときの表示エフェクト
function showMiss(){
  if(missTime>0){
    background(255,0,0,30);
    missTime--;
  }
}