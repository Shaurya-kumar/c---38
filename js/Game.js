class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1 = createSprite(100,500)
    car2 = createSprite(300,500)
    car3 = createSprite(500,500)
    car4 = createSprite(700,500)

    cars = [car1,car2,car3,car4]

  }

  play(){
    form.hide();
    textSize(30);
    text("Game Start", 120, 100)
    Player.getPlayerInfo();

    if(allPlayers !== undefined)
    {
      var index = 0
      var x = 100
      var y

      for(var plr in allPlayers){
        /*if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");
    
        
      }*/
      index = index + 1
      x = x + 200
      y = windowHeight - allPlayers[plr].distance

      cars[index - 1].x = x
      cars[index - 1].y = y
     if(index === player.index){
camera.position.x = windowWidth/2
camera.position.y = cars[index - 1].y

     }
    }
  }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    drawSprites();
  }
  }
