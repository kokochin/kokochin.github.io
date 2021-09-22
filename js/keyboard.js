class keyButton{
	constructor(name,cap,x,y,w,h){
	  this.name=name;
	  this.cap=cap;  //文字・文字コード
	  this.isCode=(typeof cap=="number");
	  this.x=x;
	  this.y=y;
	  this.w=w;
	  this.h=h;
	  this.on=false;
	}
	
	//強調表示
	setOn(on){
	  this.on=on;
	}
	
	update(){
	}
	
	display(offsetX,offsetY){
	  if(keyIsPressed && (this.isCode && keyCode==this.cap || key==this.cap)){
		fill(150);
	  }else if(this.on){
		fill(200);
	  }else{
		fill(255);
	  }
	  stroke(0);
	  rect(this.x+offsetX,this.y+offsetY,this.w,this.h);
	  fill(0);
	  noStroke();
	  textSize(this.h*0.8);
	  textAlign(CENTER,CENTER);
	  text(this.name,this.x+this.w/2+offsetX,this.y+this.h*0.45+offsetY);
	}
  }
  
  let layout=[
	"1234567890",
	"qwertyuiop",
	"asdfghjkl",
	"zxcvbnm",
  ];
  
  let kbs=[];
  
  function initKeyBoard(){
	let i=0;
	for(let row=0;row<layout.length;row++){
	  for(let col=0;col<layout[row].length;col++){
		kbs[i++]=new keyButton(layout[row][col],layout[row][col],col*41+row*20,row*41,40,40);
	  }
	}
	kbs[i++]=new keyButton("SPACE",' ',120,164,200,40);
	kbs[i++]=new keyButton("SHIFT",SHIFT,-42,123,100,40);
	print("init");
  }
  
  function keyBoard(x,y,onKey){
	for(let i=0;i<kbs.length-1;i++){
	  kbs[i].setOn(kbs[i].cap==onKey.toLowerCase());
	}
	kbs[37].setOn(onKey!=onKey.toLowerCase());
	for(let i=0;i<kbs.length;i++){
	  kbs[i].display(x,y);
	}
  }
