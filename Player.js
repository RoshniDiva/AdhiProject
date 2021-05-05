class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
    this.level = null;
    this.roomIndex = null;
    //this.winner = [];
  }

 /* getRoomIndex(){
    var roomIndexRef = database.ref('roomIndex');
    roomIndexRef.on("value",(data)=>{
      roomAr = data.val();
    })

  }
  updateRoomIndex(room){
      database.ref('/').update({
        roomIndex:room
      })
  }*/

  static getRoomInfo(){
    var roomInfoRef = database.ref('rooms');
    roomInfoRef.on("value",(data)=>{
      roomAr = data.val();
      console.log(roomAr);
    })
  }


  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
   
    if(this.level =="Easy"){
      this.roomIndex = 1;
    }
    else if(this.level =="Medium"){
      this.roomIndex =2;
    }
    else if(this.level =="Hard"){
      this.roomIndex = 3;
    }
    else if(this.level =="Expert"){
      this.roomIndex = 4;
    } 
    else if(this.level ==""){
      alert("Please select the level");
    }

    console.log(this.roomIndex);
    var roomIndex = "rooms/room"+this.roomIndex;
    Player.getRoomInfo();
    for(var rooms in roomAr){
      if(roomAr[rooms].includes(roomIndex)){
        this.index = playerCount
      }
      else{
        this.index = 0;
      }
    }
    
    
    //this.updateRoomIndex(roomIndex);
    //this.getRoomIndex();
    //console.log(roomAr);
  
    var playerIndex = "players/player" + this.index;
    var finalIndex = roomIndex+"/"+playerIndex
    database.ref(finalIndex).set({
      name:this.name,
      distance:this.distance,
      level:this.level
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })

  }
   getCarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
      this.rank = data.val();
    })
  }
  static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd:rank
    })
  }
 /* static getRank(){
    var playeratEndRef = database.ref("players/player"+this.index);
    playeratEndRef.on("value",(data)=>{
      this.rank= data.val();
    })
  }*/

 static updatePlayersAtEnd(rank){
   database.ref("players/player"+player.index).update({
     rank:rank
   })
 }
}
