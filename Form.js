class Form {

  constructor() {
    this.formDiv = createDiv();
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.radio = createRadio();
    this.radio.option("Easy");
    this.radio.option("Medium");
    this.radio.option("Hard");
    this.radio.option("Expert");
    
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.radio.hide();
  }

  display(){
 this.formDiv.position(displayWidth/2-450,displayHeight/2-200);
 this.formDiv.size(300,300);
 this.formDiv.style('background-color',"lightblue");
 this.input.parent(this.formDiv);
 this.button.parent(this.formDiv);
 this.radio.parent(this.formDiv);
 this.greeting.parent(this.formDiv);
 //this.formDiv.html(this.input);
    //this.profileDiv.style('background-color',"blue");
  //this.profileDiv.style('width',200);
   this.radio.position(this.formDiv.width - 280 ,displayHeight/2-250)
    this.title.html("ABC Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(this.formDiv.width - 240 , displayHeight/2 - 300);
    this.button.position(this.formDiv.width - 180, displayHeight/2-200);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.radio.hide();
      player.name = this.input.value();
      playerCount+=1;   
     
      player.index = playerCount;
      player.level = this.radio.value();
      var index = 0;

      player.update();
     
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(this.formDiv.width/2-50 , this.formDiv.height/2-50);
      profileDiv.html("NAME : "+player.name+"   "+"LEVEL : "+player.level);
      
      
      
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      Player.updateCarsAtEnd(0);
    });

  }
}
