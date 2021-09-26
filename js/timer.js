class timer{
  
    constructor(){
      this.startMilli=0;
      this.pauseMilli=0;
      this.isPause=false;
    }
    
    nowMilli(){
      print(this.isPause);
      if(this.isPause){
        return int(this.pauseMilli-this.startMilli);
      }else{
        return int(millis()-this.startMilli);
      }
    }
    
    nowSec(){
      return this.nowMilli()/1000.0;
    }
    
    start(){
      this.startMilli=millis();
    }
    
    pause(){
      this.pauseMilli=millis();
      this.isPause=true;
    }
    
    resume(){
      this.startMilli+=millis()-this.pauseMilli;
      this.isPauase=false;
    }
  }